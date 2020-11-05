<template>
<div class="content bg-transparent">
    <div class="container-fluid">
        <filter-data
            :defaultFilter="filterString"
            :getResult="getCategories" ></filter-data>
            <!--~~~~~~~ TABLE ONE ~~~~~~~~~-->
        <div class="row">
            <div class="col-md-6">
                <p class=" ml-3"> {{ $t('categories.name') }}
                <!--  adding modal -->
                <add-modal-component v-if="isPermitted('create','category')"></add-modal-component> </p>
                <div class="">
                    <view-categories-component v-if="isPermitted('view','category')"></view-categories-component>
                </div>
                <!-- edit Modal -->
                <edit-modal-component v-if="isPermitted('update','category')"></edit-modal-component>

            </div>
            <div class="col-md-6">
                <p class=" ml-3"> {{ $t('subcategories.name') }}
                <!--  adding modal -->
                <createSubCategory v-if="isPermitted('create','category')"></createSubCategory> </p>
                <div class="">
                    <showSubCategories v-if="isPermitted('view','category')"></showSubCategories>
                </div>
                <!-- edit Modal -->
                <editSubCategory v-if="isPermitted('update','category')"></editSubCategory>
                </div>
            </div>
    </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import addModalComponent from "../component/addModalComponent"
import editModalComponent from "../component/editModalComponent"
import viewCategoriesComponent from '../component/viewCategoriesComponent';

import createSubCategory from "../component/sub-category/createSubCategory"
import editSubCategory from "../component/sub-category/editSubCategory"
import showSubCategories from '../component/sub-category/showSubCategories.vue';

export default {
    components:{ addModalComponent , editModalComponent , viewCategoriesComponent , createSubCategory,showSubCategories,editSubCategory  },
    computed: {
       ...mapGetters("categoriesStoreIndex",['filterString' ])
    },
    methods:{
        ...mapActions("categoriesStoreIndex", ['getCategories'])
    },
    created(){
        document.title = 'Categories'
    }
}
</script>

