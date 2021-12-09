<template>
<main class="app-content" id="app">
    <div class="app-title">
        <div>
            <h1><i class="fa fa-cogs"></i> {{$t('products.edit')}}</h1>
        </div>
    </div>
    <div class="row user">
        <div class="col-md-3">
            <div class="tile p-0">
                <ul class="nav flex-column nav-tabs user-tabs">
                    <li class="nav-item"><a class="nav-link active" href="#general" data-toggle="tab">General</a></li>
                    <li class="nav-item"><a class="nav-link" href="#images" data-toggle="tab"> Gallary Images</a></li>
                    <li class="nav-item"><a class="nav-link" href="#attributes" data-toggle="tab"> Size &amp; Color Attributes </a></li>
                </ul>
            </div>
        </div>
        <div class="col-md-9">
            <div class="tab-content">
                <div class="tab-pane active" id="general">
                     <product-edit-form ></product-edit-form>
                </div>
               <div class="tab-pane " id="images">
                    <productImages></productImages>
                </div>
                <div class="tab-pane " id="attributes" >
                    <product-attributes :productid="$route.params.id"></product-attributes>
                </div>
            </div>
            <!-- ttaabb ccoonnteentt//   -->
        </div>
        <!-- ccoll mdd9 -->
    </div>
 </main>
</template>


<script>
import productEditForm from '../components/editForm.vue'
import productImages from '../components/productImages.vue'
import productAttributes from '../components/productAttributes.vue'

export default {
    name       : "editAndUpdateProduct",
    components : { productEditForm, productImages, productAttributes }
}
</script>
<style>
    .demo-upload-list{

        text-align: center;
        line-height: 60px;
        border: 1px solid transparent;
        border-radius: 4px;
        overflow: hidden;
        background: #fff;
        position: relative;
        box-shadow: 0 1px 1px rgba(0,0,0,.2);
        margin-right: 4px;
    }
    .demo-upload-list img{
        width: 100%;
        height: 100%;
    }
    .demo-upload-list-cover{
        display: none;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0,.6);
    }
    .demo-upload-list:hover .demo-upload-list-cover{
        display: block;
    }
    .demo-upload-list-cover i{
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        margin: 0 2px;
    }
    /* .ivu-icon {
        line-height: 58px;
    } */
</style>
