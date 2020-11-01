<template>
    <div class="content bg-transparent">
        <div class="container-fluid">
            <filter-data
              :defaultFilter="filterString"
              :getResult="getCategories" ></filter-data>
            <!--~~~~~~~ TABLE ONE ~~~~~~~~~-->
            <div class="card p-2">

            <p class="card-title ml-3"> {{ $t('categories.name') }}
            <!--  adding modal -->
            <add-modal-component v-if="isPermitted('create','category')"></add-modal-component> </p>

            <div class="card-body">
                <view-categories-component v-if="isPermitted('view','category')"></view-categories-component>
            </div>

            <!-- edit Modal -->
            <edit-modal-component v-if="isPermitted('update','category')"></edit-modal-component>
            </div>

        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import addModalComponent from "../component/addModalComponent"
import editModalComponent from "../component/editModalComponent"
import viewCategoriesComponent from '../component/viewCategoriesComponent';


export default {
    components:{ addModalComponent , editModalComponent , viewCategoriesComponent  },
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

