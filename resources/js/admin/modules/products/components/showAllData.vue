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

            <Pagination :meta="filterString" :changePaginatedPage="changePaginatedPage" :changePaginatedPerPage="changePaginatedPerPage" />
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
                    {
                        title: 'Image',
                        key: 'image',
                        render: (h,params) => {
                            return h('Avatar', {
                                        props: {
                                            src: `${params.row.image}`,
                                            shape:'square',
                                            alt:  `${params.row.name}`,
                                            size: 'large'
                                        },

                                        style: {
                                            marginRight: '5px',
                                            width: '6rem',
                                            height:'5rem'
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
                            let edit = h('')
                            if(this.isPermitted('update','product')){
                             edit = h('Button', {
                                    props: {
                                        icon: 'ios-editor fa fa-edit',
                                        type: "primary",
                                        size: 'small',
                                        color: 'primary'
                                    },
                                    style: {
                                        marginRight: '7px',
                                        cursor:'pointer'
                                    },
                                    on: {
                                        click: () => {
                                            // this.GET_EDIT_DATA(params.row)
                                            this.$router.replace('/admin/products/edit/'+params.row.id);
                                        }
                                    }
                                },'');
                            }
                            let deleteButton = h('')
                            if (this.isPermitted('delete','product')) {
                                deleteButton =   h('Button', {
                                                    props: {
                                                        icon: 'ios-trash',
                                                        type: "primary",
                                                        size: 'small',
                                                        color: 'red'
                                                    },
                                                    style: {
                                                        cursor:'pointer'
                                                    },
                                                    on: {
                                                        click: () => {
                                                            this.deleteProduct(params.row)
                                                        }
                                                    }
                                            }, '')
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
