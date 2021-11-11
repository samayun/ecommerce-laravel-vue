<?php
namespace App\Repositories;

use App\Contracts\ProductContract;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;


class ProductRepository implements ProductContract
{
    protected $model;
    protected $CACHE_KEY;

    public function __construct(Product $model){
        $this->model = $model;
    }
    public function all(){
        $KEY = 'products';
        return Cache::remember($KEY, now()->addMinutes(120), function () {
            $products =  $this->model->latest()->get();
            return ProductResource::collection($products);
        });
    }
    public function withFilter($request){
        // string $orderBy = 'id', string $sortBy = 'desc';
        // {"page":"1","perPage":"10","orderBy":"created_at","sortBy":"desc"}
        $this->SET_CACHE($request);
        $this->flush($this->CACHE_KEY);
        $KEY = $this->getCachekey();

        return Cache::remember($KEY, now()->addMinutes(120), function () use($request) {
            $products =  $this->model::with('images')->filter($request);
            return ProductResource::collection($products);
        });
    }
    public function SET_CACHE($request)
    {
        $page    =  $request->has('page') ? (int)$request->query('page') : 1;
        $perPage =  $request->has('perPage') ? (int)$request->query('perPage') : 10;
        $orderBy =  $request->has('orderBy') ? $request->query('orderBy') : 'created_at';
        $sortBy  =  $request->has('sortBy') ? $request->query('sortBy') : 'desc';
        $q       =  $request->has('q') ? $request->query('q') :"";
        $this->CACHE_KEY  =  "products.$page.$perPage.$orderBy.$sortBy.$q";
    }
    public function getCachekey()
    {
        return $this->CACHE_KEY;
    }
    public function flush($key)
    {
        if(cache()->has($key)){
            return cache()->forget($key);
        }
    }
    /**
     * @param int $id
     * @return mixed
     */
    // public function findById(int $id);

    /**
     * @param array $params
     * @return mixed
     */
    public function create(array $params){
        $this->flush($this->CACHE_KEY);
        $request = collect($params);
        if($request->has('categories')){
            $product = $this->model->create($request->except('categories')->toArray());
            $product->categories()->sync($request['categories']);
        }
        return new ProductResource($product);
    }

    public function show(int $id){
        $product = $this->findById($id);
        $KEY = 'product.'.$id;
        if($product){
            return Cache::remember($KEY, now()->addMinutes(120), function () use($product) {
                return new ProductResource($product);
            });
        }
    }
    /**
     * @param array $params
     * @return mixed
     */
    public function update( $params,$id){
        $product = $this->findById($id);
        if($product){
            $request = collect($params)->except('attributes', 'images');

            if($request->has('categories')){
                $updated  = $product->update($request->except('categories')->toArray());
                $product->categories()->sync($request['categories']);

                $this->flush($this->CACHE_KEY);
                 return new ProductResource($product);
            }
        }
    }
    public function findByCriteria($criteria = 'id', $data ){
       return $this->model->where($criteria, $data)->first();;
    }
    public function findById( $id){
        return $this->findByCriteria('id',$id);
    }

    /**
     * @param $id
     * @return bool
     */
    public function delete(int $id){
        $product = $this->findByCriteria('id',$id);
        if($product){
            $this->flush($this->CACHE_KEY);
            return $product->delete();
         }
    }

    public function bulk_delete($selected_data)
    {
        $this->flush($this->CACHE_KEY);
        DB::beginTransaction();
        foreach ($selected_data as $product) {
            $found = $this->findById($product['id']);
            $path = 'products/'.$found['image'];

            if (Storage::disk('public')->exists($path)) {
                Storage::disk('public')->delete($path);
            }
            $found->delete();
        }
        DB::commit();
        // success
    }
}
