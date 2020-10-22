<template>
    <div class="content">
        <div class="container-fluid">

            <!--~~~~~~~ TABLE ONE ~~~~~~~~~-->
            <div class="card p-2">
            <p class="card-title ml-3">Categories
            <!--  adding modal -->
            <add-modal-component></add-modal-component> </p>

                <div class="card-body">
                    <table class="table" v-if="getAllCategory.length">
                            <!-- TABLE TITLE -->
                        <tr>
                            <th>ID</th>
                            <th>Category Name</th>
                            <th>Category Image</th>
                            <th>Created at</th>
                            <th>Action</th>
                        </tr>
                            <!-- TABLE TITLE -->
                        <tr v-for="cat in getAllCategory" :key="cat.id">
                            <td>{{ cat.id}}</td>
                            <td>{{cat.name}}</td>
                            <td><img src="/img/logo.png" alt="" width="120"></td>
                            <td> {{cat.created_at }} </td>
                            <td>
                                <Button type="info" size="small" @click="clickEditBtn(cat)">Edit</Button>
                                <Button type="error" size="small" @click="deleteConfirmation(cat)" >Delete</Button>
                            </td>
                        </tr>
                    </table>
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

export default {
    computed:{ 
        ...mapState("categoriesStoreIndex", [ 'showEditModal' , 'editData' , 'isEditing','errors'
       ]),
       ...mapGetters("categoriesStoreIndex",['getAllCategory'])
    },
    components:{ addModalComponent , editModalComponent  },
    methods:{
         ...mapActions("categoriesStoreIndex", ['getCategories','editCategory' ,'deleteCategory' ]),
         ...mapMutations("categoriesStoreIndex" , ['TOGGLE_EDIT_MODAL' ,'GET_EDIT_DATA']),
         clickEditBtn(cat){
             this.TOGGLE_EDIT_MODAL()
             this.GET_EDIT_DATA(cat);
         },
         deleteConfirmation(category){
             this.$Modal.confirm({
                 title: '<Icon type="ios-information-circle"></Icon> Are you sure to delete',
                 content: "Click OK to proceed",
                 onOk: () => {
                     this.deleteCategory(category)
                 }
             })
         }
    },
    created(){
        this.getCategories();
    }
}
</script>

