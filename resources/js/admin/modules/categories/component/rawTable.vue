<template>
    <table class="table" v-if="getAllCategory.length" ref="selection">
        <!-- TABLE TITLE -->
        <tr>
            <th> <Checkbox type="info" size="small" @change="handleSelectAll(true)"/> </th>
            <th>ID</th>
            <th>Category Name</th>
            <th>Category Image</th>
            <th>Created at</th>
            <th>Action</th>
        </tr>
            <!-- TABLE TITLE -->
        <tr v-for="cat in getAllCategory" :key="cat.id">
            <td> <Checkbox type="success" size="small" /> </td>
            <td>{{ cat.id}}</td>
            <td>{{cat.name}}</td>
            <td><img src="/img/logo.png" alt="" width="120"></td>
            <td> {{cat.created_at | timeFormat }} </td>
            <td>
                <Button type="info" size="small" @click="clickEditBtn(cat)">Edit</Button>
                <Button type="error" size="small" @click="deleteConfirmation(cat)" >Delete</Button>
            </td>
        </tr>
    </table>
</template>
<script>
import {mapState, mapActions, mapMutations, mapGetters } from 'vuex'
export default {
   name : "viewCategoriesComponent",
   computed: {
       ...mapState("categoriesStoreIndex", [ 'showEditModal' , 'editData' , 'isEditing','errors']),
       ...mapGetters("categoriesStoreIndex",['getAllCategory'])
   },
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
         },
        handleSelectAll(status){
             this.$refs.selection.selectAll(status)
         }
   },
    created(){
        this.getCategories();
    }
}
</script>