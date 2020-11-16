<template>
    <main class="app-content" id="app">
        <div class="app-title" :class="getIsDark ? 'app-title-dark' : 'app-title'">
            <div>
                <h1><i class="fa fa-cogs"></i> {{ $t('brands.name') }} </h1>
                <p> List of all brands </p>
            </div>

            <add-modal-component v-if="isPermitted('create','brand')"></add-modal-component>
        </div>
        <div class="row ">
            <filter-data
              :defaultFilter="filterString"
              :getResult="getBrands" ></filter-data>

            <show-all-data v-if="isPermitted('view','brand')"   ></show-all-data>
        </div>
        <edit-modal-component v-if="isPermitted('update','brand')"></edit-modal-component>
    </main>
</template>


<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import addModalComponent from "../components/addModalComponent"
import editModalComponent from "../components/editModalComponent"
import showAllData from '../components/showAllData.vue';


export default {
    components:{ addModalComponent , editModalComponent , showAllData },
    created(){
        document.title = 'Brands'
    },
    computed: {
       ...mapState("brandsStoreIndex", [ 'isLoading','filterString']),
       ...mapGetters('settingsStoreIndex',['getIsDark'])
   },
   methods:{
       ...mapActions("brandsStoreIndex",['getBrands'])
   }
}
</script>

<style>
    .app-title-dark {
        background-color: #343a40;
        color: #ffffff;
    }
</style>
