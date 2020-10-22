<template>
    <div>
        <Checkbox @change="handleSelectAll(true)"> Select/Deselect All </Checkbox>
        <Loading :show="getAllCategory.length == 0"/>
        <Table border ref="selection"
            :columns="dataStructureTable"
            v-if="getAllCategory.length"
            :data="getAllCategory"></Table>
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