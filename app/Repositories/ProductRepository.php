<?php
namespace App\Repositories;

use App\Contracts\ProductContract;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\DB;

class ProductRepository implements ProductContract
{
    protected $model;

    public function __construct(Product $model){
        $this->model = $model;
    }
    public function all(){
        $products =  $this->model->latest()->get();
        return ProductResource::collection($products);
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
        $product = $this->model->create($params);
        return new ProductResource($product);
    }

    public function show(int $id){
        $product = $this->findById($id);
        if($product){
             return new ProductResource($product);
        }
    }
    /**
     * @param array $params
     * @return mixed
     */
    public function update( $params,$id){
        $product = $this->findById($id);
        if($product){
            $updated  = $product->update($params);
            return new ProductResource($product);
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
        if($product){ return $product->delete(); }
    }

    public function bulk_delete($selected_data)
    {
        foreach ($selected_data as $product) {
            DB::beginTransaction();
            $this->findById($product['id'])->delete();
            DB::commit();
        }
    }
}
