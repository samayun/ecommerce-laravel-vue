<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\AttributeResource;
use Illuminate\Http\Request;
use App\Models\Admin;
use App\Models\Attribute;
use App\Traits\UploadAble;

use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Auth;
use DB;

class AttributeController extends Controller
{
    use UploadAble;

    public function __construct()
    {
        $this->authorizeResource(Attribute::class, 'attribute');
    }
    public function index(Request $request)
    {
        return AttributeResource::collection(
            Attribute::whereNull('parent_id')->with('values')->latest()->get()
        );
    }
    public function values(Request $request)
    {
        return AttributeResource::collection(
             Attribute::whereNotNull('parent_id')->with('value')->latest()->get()
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request , [
            'name' => 'bail|required|min:3',
            'slug' => $request->slug ? "required|alpha_dash|unique:attributes,slug" : "",
            'parent_id' => $request->parent_id ? 'required' : ''
        ]);

        $data = Attribute::create($request->all()); // actually subattribute created
        return new AttributeResource($data);
    }
    public function multiDelete(Request $request)
    {
        $this->authorize('multi_delete');
        try {

            foreach ($request->all() as $attribute) {
                DB::beginTransaction();
                Attribute::find($attribute['id'])->delete();
                DB::commit();
            }
            return response()->json(['message' => "SUCCESS"], 200);
        } catch (\Throwable $th) {
            DB::rollback();
        }
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Attribute $attribute)
    {
        return new AttributeResource($attribute);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Attribute $attribute)
    {
        $this->validate($request , [
            'name' => 'required',
            'slug' => 'required|unique:attributes,slug,'.$request->id,
            'parent_id' => $request->parent_id ? 'required' : ''
        ]);
        // $attribute = Attribute::where('id',$request->id);
        return $attribute->update($request->except('id'));
        // return new AttributeResource($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request , Attribute $attribute)
    {
        return $attribute->delete();
    }
}
