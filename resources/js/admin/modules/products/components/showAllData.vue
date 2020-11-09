<template>
    <div class="col-md-12">

        <Table border
            ref="selection"
            :columns="dataStructureTable"
            v-if="getAllProduct.length"
             @on-selection-change="handleSelectionChange"
            :data="getAllProduct">
            </Table>
            <br/>

            <!-- <Pagination :meta="filterString" :changePaginatedPage="changePaginatedPage" :changePaginatedPerPage="changePaginatedPerPage" /> -->
    </div>
</template>
<script>

import {mapState, mapActions, mapMutations, mapGetters } from 'vuex'
export default {
   name : "ShowAllData",
   data(){
         let deleteMultiple = {}
                if (this.isPermitted('delete','product')){
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
                        title: 'SKU',
                        key: 'sku',
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
                        title: 'Brand',
                        key: 'brand',
                        sortable: true,
                        tooltip:true,
                        render: (h,params) => {
                            return h('Tag',{props: {type: 'border', color: '#000' }}, params.row.brand.name)
                        }

                    },
                     {
                        title: 'Price',
                        key: 'price',
                        sortable: true,
                        tooltip:true
                    },
                    // {
                    //     title: 'Image',
                    //     key: 'image',
                    //     render: (h,params) => {
                    //         return

                    //     }
                    // },
                    {
                        title: 'Action',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            let deleteButton = h('')
                            if (this.isPermitted('delete','product')) {
                                deleteButton =   h('Button', {
                                                    props: {
                                                        type: 'error',
                                                        size: 'small'
                                                    },
                                                    on: {
                                                        click: () => {
                                                            this.deleteProduct(params.row)
                                                        }
                                                    }
                                            }, 'Delete')
                            };
                            let edit = h('')
                            if(this.isPermitted('update','product')){
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
       ...mapGetters("productsStoreIndex",['getAllProduct','filterString']),
   },
   methods:{
         ...mapActions("productsStoreIndex", ['getProducts','changePaginatedPage','changePaginatedPerPage','deleteConfirmation','deleteProduct','multiDelete','handleSelectionChange']),
         ...mapMutations("productsStoreIndex",["GET_EDIT_DATA"])
   },
    created(){
       if (this.getAllProduct.length == 0) {
            this.getProducts();
       }
    }
}
</script>
