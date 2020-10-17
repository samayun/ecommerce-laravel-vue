<template>
<div class="container">
    <div class="card-header">
        <h3 class="card-title"> Categories
            <button class="btn btn-sm btn-outline-success ml-2" @click="TOGGLE_MODAL"> 
            <i class="fa fa-plus"></i> </button>
        </h3>
    </div>
    <div class="modal fade show" id="modal-default" v-if="showModal" style="padding-right: 12px; display: block;" aria-modal="true">
            <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                <h4 class="modal-title">Adding Categories</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="TOGGLE_MODAL">
                    <span aria-hidden="true">×</span>
                </button>
                </div>
                <form class="form-horizontal"  >
                <div class="modal-body">
                    <div class="card-body">
                        <div class="form-group">
                            <p class="text-center text-danger" v-if="errors.name"> {{ errors.name[0]}} </p>
                            <label for="name" class="col-sm-4 control-label">Name </label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" v-model="data.name" id="name" placeholder="Name">
                            </div>
                        </div>
                    </div>
                            <!-- /.card-body -->
                </div>
                <div class="modal-footer justify-content-between">
                    <button type="button"
                        class="btn btn-default"
                        data-dismiss="modal"
                        @click="TOGGLE_MODAL">Close</button>
                        
                    <button type="button"
                        class="btn btn-primary"
                        :disabled="isAdding"
                        :loading="isLoading"
                        @click="addCategory(data)"
                        > <i class="fa fa-plus"></i> Add</button>
                </div>
                </form>
            </div>
            <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>
    <Table border
         :columns="dataStructureTable"
         v-if="categories"
         :data="categories"></Table>
</div>
</template>
<script>
import axios from "axios";
import {mapActions , mapGetters , mapState, mapMutations } from "vuex";

    export default {
        data () {
            return {
                data: {
                    name: ""
                } ,
                dataStructureTable: [
                    {
                        title: 'ID',
                        key: 'id'
                    },
                    {
                        title: 'Name',
                        key: 'name',
                        render: (h, params) => {
                            return h('div', [
                                h('Icon', {
                                    props: {
                                        type: 'person'
                                    }
                                }),
                                h('strong', params.row.name)
                            ]);
                        }
                    },
                    {
                        title: 'Icon Image',
                        key: 'icon'
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
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, 'View'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, 'Delete')
                            ]);
                        }
                    }
                ],
                
            }
        },
        methods: {
            ...mapActions('categoriesStoreIndex', [ 'getCategoriesAction' ,'addCategory' ] ),
            ...mapMutations( 'categoriesStoreIndex',['TOGGLE_MODAL']),
            show (index) {
                this.$Modal.info({
                    title: 'Category Info',
                    content: `Name： ${this.categories[index].name}<br>`
                })
            },
            remove (index) {
                this.data6.splice(index, 1);
            },

        },
        computed : {
            ...mapGetters('categoriesStoreIndex' , {
                categories : 'getAllCategory',
                showModal: 'showModal',
                isAdding: 'isAdding',
                isLoading: 'isLoading',
                errors: 'errors'
           }),

        } , 
        created(){
            if (!this.categories.length) {
                this.getCategoriesAction()
            }
        }
        
    }
</script>
