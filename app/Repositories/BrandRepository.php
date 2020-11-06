<?php
namespace App\Repositories;

use App\Contracts\BrandContract;
use App\Models\Brand;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;


class BrandRepository implements BrandContract
{

   public function lists($request)
   {
     $KEY = 'brands';
    //  .$request->id.$request->orderBy.$request->sortBy.$request->perPage.$request->page;
    //  page=1&perPage=10&orderBy=created_at&sortBy=desc
     return Cache::remember($KEY, now()->addMinutes(120), function () use ($request) {
            return  Brand::search($request->q)->orderBy($request->orderBy , $request->sortBy)->paginate($request->perPage);
        });
   }
}
