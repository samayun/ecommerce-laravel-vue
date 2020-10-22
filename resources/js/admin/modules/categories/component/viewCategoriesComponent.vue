<template>
    <div>
         <span v-if="multiSelected.length > 0">
             <Button type="error" @click="multiDelete"> Multiple Delete </Button> {{multiSelected }} selected
         </span>
        <Loading :show="getAllCategory.length == 0"/>
        <Table border
           @on-selection-change="handleSelectionChange"
            ref="selection"
            :columns="dataStructureTable"
            v-if="getAllCategory.length"
            :data="getAllCategory"></Table>
            <br/>

        <Checkbox @on-change="handleSelectAll"> Select/Deselect All </Checkbox>
    </div>
</template>
<script>
import {mapState, mapActions, mapMutations, mapGetters } from 'vuex'
export default {
   name : "viewCategoriesComponent",
   data(){
       return {
                 dataStructureTable: [
                    {
                        type: 'selection',
                        align: 'center',
                        width: 50 
                    },
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
                                            src: `/img/${params.row.icon}`,
                                            alt:  `${params.row.icon}`
                                        },
                                        style: {
                                            marginRight: '5px',
                                            width: '10rem'
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
                            return h('div', [
                                h('Button', {
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
                                }, 'Edit'),
                                h('Button', {
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
                            ]);
                        }
                    }
                ],
       }
   },
   computed: {
       ...mapState("categoriesStoreIndex", [ 'showEditModal' , 'editData' , 'isEditing','errors' ,'multiSelected' ]),
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