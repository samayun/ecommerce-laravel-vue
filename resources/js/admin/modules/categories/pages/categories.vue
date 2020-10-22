<template>
    <div class="content bg-transparent">
        <div class="container-fluid">

            <!--~~~~~~~ TABLE ONE ~~~~~~~~~-->
            <div class="card p-2">
                <!-- SEARCH FORM -->
                <form class="form-inline ml-3 mb-4">
                    <div class="input-group input-group-sm">
                    <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search">
                    <div class="input-group-append">
                        <button class="btn btn-navbar" type="submit">
                        <i class="fas fa-search"></i>
                        </button>
                    </div>
                    </div>
                </form>
            <p class="card-title ml-3">Categories
            <!--  adding modal -->
            <add-modal-component></add-modal-component> </p>

            <div class="card-body">
                <view-categories-component ></view-categories-component>
            </div>

            <!-- edit Modal -->
            <edit-modal-component ></edit-modal-component>
            </div>

        </div>
    </div>
</template>

<script>
import {mapState, mapActions, mapMutations, mapGetters } from 'vuex'
import addModalComponent from "../component/addModalComponent"
import editModalComponent from "../component/editModalComponent"
import viewCategoriesComponent from '../component/viewCategoriesComponent';

export default {
    components:{ addModalComponent , editModalComponent , viewCategoriesComponent }

}
</script>

