<?php
namespace App\Repositories;

use App\Contracts\BrandContract;
use App\Models\Brand;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\QueryException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Doctrine\Instantiator\Exception\InvalidArgumentException;
use App\Traits\UploadAble;

class BrandRepository implements BrandContract
{
    use UploadAble;
    protected $model;

    public function __construct(Brand $model)
    {
        // parent::__construct($model);
        $this->model = $model;
    }

   public function lists()
   {
        $KEY = 'brands';
        return Cache::remember($KEY, now()->addMinutes(120), function () {
            return  $this->model::all();
        });
   }
   public function create($attributes)
   {
      return $this->model::create($attributes);
    }
    public function update(array $params,int $id){
        $data = $this->model::findOrFail($id);
        if($data) { $data->update($params); }
    }
    public function delete(int $id){
        $data = $this->model::findOrFail($id);
        if($data) { $data->delete(); }
    }

}
