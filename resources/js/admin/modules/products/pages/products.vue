<template>
    <main class="app-content" id="app">
        <div class="app-title">
            <div>
                <h1><i class="fa fa-fw fa-lg fa-check-circle"></i> {{ $t('products.name') }} </h1>
                <p> List of all products </p>
            </div>
         <span class="m-2 " v-if="isPermitted('delete','product') && multiSelected.length !== 0">
             <Button type="error" @click="bulk_delete"> BULK {{ $t('delete') }} </Button> {{multiSelected.length }} selected
         </span>
            <create-product v-if="isPermitted('create','product')"></create-product>
        </div>
        <div class="row ">
            <!-- <filter-data
              :defaultFilter="filterString"
              :getResult="getBrands" ></filter-data> -->

            <show-all-data v-if="isPermitted('view','product')"   ></show-all-data>
        </div>
        <updateProduct v-if="isPermitted('update','product')"></updateProduct>
    </main>
</template>


<script>

import { mapActions, mapGetters, mapState } from 'vuex'
import createProduct from "../components/createProduct"
import updateProduct from "../components/updateProduct"
import showAllData from '../components/showAllData.vue';

export default {
    components:{
        createProduct , updateProduct , showAllData },
    created(){
        document.title = 'Products'
    },
    computed: {
       ...mapState("productsStoreIndex", [ 'multiSelected']),
   },
   methods:{
       ...mapActions("productsStoreIndex",['bulk_delete'])
   }
}
</script>
