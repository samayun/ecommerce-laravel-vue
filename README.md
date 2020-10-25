#### Php artisan commands
``` console
    composer create-project --prefer-dist laravel/laravel ECommerce "8"
    composer require laravel/ui --dev
    php artisan ui vue --auth
    npm install admin-lte vue-router vuex @fortawesome/fontawesome-free moment vform view-design
    npm install
    npm run watch 
```

> ## How to Sorting , Paginating and Filtering
</br> 

#### Step-1: Pagination.vue
``` javascript
    [...]
    <template>
        <Page
            :total="filterString.total"
            :current="filterString.page"
            :page-size="filterString.perPage"
            @on-change="changePaginatedPage"
            @on-page-size-change="changePerPaginatedPage"
            show-total
            show-elevator
            show-sizer
            prev-text="Previous"
            next-text="NeXT"/>
    </template>
    <script>
    import { mapActions, mapGetters } from 'vuex'
    export default {
        computed: {
        ...mapGetters("categoriesStoreIndex",['filterString']),
    },
    methods:{
        ...mapActions("categoriesStoreIndex" , ['changePaginatedPage','changePerPaginatedPage'])
    }
    }
    </script>

```
#### Step - 2: State Management
``` js
export default {
    state: {
        filterString:{
            page: 1,
            perPage : 6,
            orderBy: 'created_at',
            sortBy: 'desc',
            q: "",
            total: 0
        }
    },
    getters: {
       filterString         : state => state.filterString,
       getFilteredURLString : state => {
           let {page,perPage,orderBy,sortBy,q} = state.filterString;
           let queryString = "";
           if (q != "") {
              queryString = `page=1&q=${q}`
           } else {
              queryString = `page=${page}`
           }
           (perPage !="") ? queryString += `&perPage=${perPage}` : null;
           (orderBy !="") ? queryString += `&orderBy=${orderBy}` : null;
           (sortBy !="") ? queryString += `&sortBy=${sortBy}` : null;

           return queryString;
       }
    },
    actions : {
         async getCategories({commit ,state , getters}){
           try {
            commit('SET_IS_LOADING' , true)
            let res =   await axios.get(`/api/admin/categories?${getters.getFilteredURLString}`);
            if (res.status == 200) {
                let updatedFilterString = {
                    page: parseInt(res.data.current_page),
                    perPage :parseInt(res.data.per_page),
                    total: parseInt(res.data.total)
                }
                commit('FILTER_DATA', updatedFilterString)
                commit('FETCH_CATEGORIES' , res.data.data);
                commit('SET_IS_LOADING' , false)

             }
           } catch (error) {
                commit('SET_IS_LOADING' , false)
               if (error.response.status == 403) {
                  $Notice.error({
                        title: 'Category FETCH Failed!',
                        desc: error.response.data.message
                    });
               }

           }
        },
        changePaginatedPage({state,commit ,dispatch } , page){
           commit('FILTER_DATA', {page})
           dispatch('getCategories')
        },
        changePerPaginatedPage({state,commit , dispatch} , perPage){
            commit('FILTER_DATA', {perPage})
            dispatch('getCategories')
        }
    },
    mutations: {
        FETCH_CATEGORIES(state , categories){
            state.categories = categories
        },
        FILTER_DATA(state , payload){
            //  state.filterString = payload
            // update only @given credentials 
            for(let obj in payload){
                state.filterString[obj] = payload[obj]
            }
        },
    }
}
```

[![View Added Image](docs/images/pagination.png)](docs/images/pagination.png)

* #### Step-3 Backend
``` php
// web.php
    [...]
<?php
    use Illuminate\Support\Facades\Route;
    use App\Http\Controllers\Admin\CategoryController;

    Route::group(['prefix' => 'api/admin' , 'middleware' => 'auth:admin' ], function () {
        Route::resource('categories' , CategoryController::class);
    });
    [...]
 
```

``` php
<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function scopeSearch($query , $q)
    {
        if($q == null) return;
        return $query->where('name','LIKE', "%$q%");
    }
}

```

``` php
<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Policies\CategoryPolicies;
use App\Models\Category;
use Illuminate\Http\Request;


class CategoryController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(Category::class, 'category');
    }
    public function index(Request $request){
        $perPage =  $request->has('perPage') ? $request->query('perPage') : 5;
        $orderBy =  $request->has('orderBy') ? $request->query('orderBy') : 'created_at';
        $sortBy  =  $request->has('sortBy') ? $request->query('sortBy') : 'desc';
        $q       =  $request->has('q') ? $request->query('q') : '' ;
        // these code must be efactored - we wil need this again and again
        return Category::search($q)->orderBy($orderBy , $sortBy)->paginate($perPage );
    }
}
```
#### Now Test in browser :smile:


