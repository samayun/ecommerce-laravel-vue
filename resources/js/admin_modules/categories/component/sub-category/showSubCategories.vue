<template>
    <div>
         <span v-if="isPermitted('delete','category') && subMeta.multiSelected.length > 0">
             <Button type="error" @click="multiDelete(false)"> Multiple {{ $t('delete') }} </Button> {{subMeta.multiSelected.length }} selected
         </span>
         <!-- <Loading show="getAllSubCategory.length < 1"/> -->
        <Table border
           @on-selection-change="handleSelectionChangeSubCategory"
            ref="selection"
            :columns="dataStructureTable"
            v-if="getAllSubCategory.length"
            :loading="getAllSubCategory.length == 0"
            :data="getAllSubCategory">
            </Table>
            <br/>
            <Pagination :meta="filterString" :changePaginatedPage="changeSubPaginatedPage" :changePaginatedPerPage="changeSubPaginatedPerPage" />

    </div>
</template>
<script>
import {mapState, mapActions, mapMutations, mapGetters } from 'vuex'
export default {
   name : "showSubCategories",
   data(){
         let deleteMultiple = {}
                if (this.isPermitted('delete','category')){
                    deleteMultiple =  {
                        type: 'selection',
                        align: 'center',
                        width: 40
                        }
                    }else{
                        deleteMultiple = {
                            title: 'ID',
                            key: 'id',
                            sortable: true,
                            tooltip:true,
                    }
            }
       return {
                 dataStructureTable: [
                     deleteMultiple ,
                    {
                        title: 'Name',
                        key: 'name',
                        sortable: true,
                        tooltip:true
                    },
                    {
                        title: 'Category',
                        key: 'parent_id',
                        render: (h,params) => {
                            name = params.row.category ? params.row.category.name : ""
                            return h('Tag', {}, name )

                        }
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        width: 100,
                        align: 'center',
                        render: (h, params) => {
                            let edit = h('')
                            if(this.isPermitted('update','category')){
                             edit = h('Icon', {
                                    props: {
                                        type: 'ios-download',
                                        size: 'large'
                                    },
                                    style: {
                                        marginRight: '5px',
                                        fontSize: '25px',
                                        cursor: 'pointer',
                                        color: "#f11"
                                    },
                                    on: {
                                        click: () => {
                                            this.TOGGLE_MODAL('sub-edit')
                                            this.GET_SUB_EDIT_DATA(params.row);
                                        }
                                    }
                                }, 'Edit');
                            }
                            let deleteButton = h('')
                            if (this.isPermitted('delete','category')) {
                               deleteButton =   h('Icon', {
                                                    props: {
                                                        type: 'ios-trash',
                                                        size: 'large'
                                                    },
                                                    style: {
                                                        fontSize: '25px',
                                                        cursor: 'pointer',
                                                        color: "#f55"
                                                    },
                                                    on: {
                                                        click: () => {
                                                            this.deleteConfirmation(params.row)
                                                        }
                                                    }
                                            }, 'Delete')
                                 };
                            return h('div', [
                                edit, deleteButton
                            ]);
                        }
                    }
                ],
       }
   },
   computed: {
       ...mapState("categoriesStoreIndex", [ 'editMeta' , 'editData','errors' ,'subMeta' ]),
       ...mapGetters("categoriesStoreIndex",['getAllSubCategory','filterString' ])
   },
   methods:{
         ...mapActions("categoriesStoreIndex", ['getSubCategories','editCategory' ,'deleteSubCategory' ,'multiDelete', 'handleSelectionChangeSubCategory','changeSubPaginatedPage','changeSubPaginatedPerPage']),
         ...mapMutations("categoriesStoreIndex" , ['TOGGLE_MODAL','GET_SUB_EDIT_DATA' ]),
         deleteConfirmation(sub_category){
             this.$Modal.confirm({
                 title: '<Icon type="ios-information-circle"></Icon> Are you sure to delete',
                 content: "Click OK to proceed",
                 onOk: () => {
                     this.deleteSubCategory(sub_category)
                 }
             })
         }
   },
    created(){
        if (this.getAllSubCategory.length == 0) {
             this.getSubCategories();
        }
    }
}
</script>
