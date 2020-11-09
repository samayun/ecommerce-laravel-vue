<template>
    <div class="col-md-12">
         <span class="m-2 " v-if="isPermitted('delete','brand') && multiSelected.length !== 0">
             <Button type="error" @click="multiDelete"> Multiple {{ $t('delete') }} </Button> {{multiSelected.length }} selected
         </span>
        <Table border
            ref="selection"
            :columns="dataStructureTable"
            v-if="getAllBrand.length"
             @on-selection-change="handleSelectionChange"
            :loading="isLoading"
            :data="getAllBrand">
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
                if (this.isPermitted('delete','brand')){
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
                        title: 'LOGO',
                        key: 'logo',
                        render: (h,params) => {
                            return h('img', {
                                        attrs: {
                                            src: `${params.row.logo}`,
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
                            if (this.isPermitted('delete','brand')) {
                                deleteButton =   h('Button', {
                                                    props: {
                                                        type: 'error',
                                                        size: 'small'
                                                    },
                                                    on: {
                                                        click: () => {
                                                            this.deleteBrand(params.row)
                                                        }
                                                    }
                                            }, 'Delete')
                            };
                            let edit = h('')
                            if(this.isPermitted('update','brand')){
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
       ...mapState("brandsStoreIndex", [ 'isLoading','multiSelected']),
       ...mapGetters("brandsStoreIndex",['getAllBrand','filterString'])
   },
   methods:{
         ...mapActions("brandsStoreIndex", ['getBrands','changePaginatedPage','changePaginatedPerPage','deleteConfirmation','deleteBrand','multiDelete','handleSelectionChange']),
         ...mapMutations("brandsStoreIndex",["GET_EDIT_DATA"])
   },
    created(){
       if (this.getAllBrand.length == 0) {
            this.getBrands();
       }
    }
}
</script>
