<template>
    <div>
         <span v-if="isPermitted('delete','category') && multiSelected.length > 0">
             <Button type="error" @click="multiDelete"> Multiple Delete </Button> {{multiSelected.length }} selected
         </span>
         <!-- <Loading show="getAllCategory.length < 1"/> -->
        <Table border
           @on-selection-change="handleSelectionChange"
            ref="selection"
            :columns="dataStructureTable"
            v-if="getAllCategory.length"
            :loading="isLoading"
            :data="getAllCategory">
            </Table>
            <br/>
            <Pagination />

        <Checkbox v-if="isPermitted('delete','category')" @on-change="handleSelectAll"> Select/Deselect All </Checkbox>
    </div>
</template>
<script>
import Pagination from './Pagination'
import {mapState, mapActions, mapMutations, mapGetters } from 'vuex'
export default {
   name : "viewCategoriesComponent",
   components:{Pagination},
   data(){
       return {
                 dataStructureTable: [
                    {
                        type: 'selection',
                        align: 'center',
                        width: 50 ,
                        render: (h,params) => {
                            if (this.isPermitted('delete','category')) {
                                return h('Checkbox' , {
                                    props: {
                                        type: 'success'
                                    }
                                },NO)
                            }
                            return h('i', 'delete')
                        }
                    }
                    ,
                    {
                        title: 'ID',
                        key: 'id',
                        sortable: true,
                        tooltip:true,
                    },
                    {
                        title: 'Name',
                        key: 'name',
                        sortable: true,
                        tooltip:true
                    },
                    {
                        title: 'Icon Image',
                        key: 'icon',
                        render: (h,params) => {
                            return h('img', {
                                        attrs: {
                                            src: `${params.row.icon}`,
                                            alt:  `${params.row.name}`
                                        },
                                        style: {
                                            marginRight: '5px',
                                            width: '10rem',
                                            height:'5rem'
                                        }

                                    })

                        }
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            let deleteButton = h('')
                            if (this.isPermitted('delete','category')) {
                                deleteButton =   h('Button', {
                                                    props: {
                                                        type: 'error',
                                                        size: 'small'
                                                    },
                                                    on: {
                                                        click: () => {
                                                            this.deleteConfirmation(params.row)
                                                        }
                                                    }
                                            }, 'Delete')
                            };
                            let edit = h('')
                            if(this.isPermitted('update','category')){
                             edit = h('Button', {
                                    props: {
                                        type: 'info',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.clickEditBtn(params.row);
                                        }
                                    }
                                }, 'Edit');
                            }
                            return h('div', [
                                edit, deleteButton
                            ]);
                        }
                    }
                ],
       }
   },
   computed: {
       ...mapState("categoriesStoreIndex", [ 'showEditModal' , 'editData','isLoading' , 'isEditing','errors' ,'multiSelected' ]),
       ...mapGetters("categoriesStoreIndex",['getAllCategory' ])
   },
   methods:{
         ...mapActions("categoriesStoreIndex", ['getCategories','editCategory' ,'deleteCategory' ,'multiDelete' ]),
         ...mapMutations("categoriesStoreIndex" , ['TOGGLE_EDIT_MODAL' ,'GET_EDIT_DATA' , 'handleSelectionChange']),
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
        handleSelectAll(v){
            this.$refs['selection'].selectAll(v)
         }
   },
    created(){
        this.getCategories();
    }
}
</script>
