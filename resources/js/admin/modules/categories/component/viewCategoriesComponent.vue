<template>
    <div>
         <span v-if="isPermitted('delete','category') && multiSelected.length > 0">
             <Button type="error" @click="multiDelete"> Multiple {{ $t('delete') }} </Button> {{multiSelected.length }} selected
         </span>
         <!-- <Loading show="getAllCategory.length < 1"/> -->
        <Table border
           @on-selection-change="handleSelectionChange"
            ref="selection"
            :columns="dataStructureTable"
            v-if="getAllCategory.length"
            :loading="getAllCategory.length == 0"
            :data="getAllCategory">
            </Table>
            <br/>

    </div>
</template>
<script>
import {mapState, mapActions, mapMutations, mapGetters } from 'vuex'
export default {
   name : "viewCategoriesComponent",
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
                                            height:'5rem',
                                            color: "#f55"
                                        }

                                    })

                        }
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        width: 100,
                        align: 'center',
                        render: (h, params) => {
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
                                            this.TOGGLE_MODAL('cat-edit')
                                            this.GET_EDIT_DATA(params.row);
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
       ...mapState("categoriesStoreIndex", [ 'editMeta' , 'editData','errors' ,'multiSelected' ]),
       ...mapGetters("categoriesStoreIndex",['getAllCategory','filterString' ])
   },
   methods:{
         ...mapActions("categoriesStoreIndex", ['getCategories','editCategory' ,'deleteCategory' ,'multiDelete', 'handleSelectionChange','changePaginatedPage','changePaginatedPerPage']),
         ...mapMutations("categoriesStoreIndex" , ['TOGGLE_MODAL' ,'GET_EDIT_DATA' ]),
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
        if (this.getAllCategory.length == 0) {
             this.getCategories();
        }
    }
}
</script>
