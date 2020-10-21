<template>
<div class="container">
    <div class="card-header">
        <h3 class="card-title"> Categories
            <button class="btn btn-sm btn-outline-secondary ml-2" @click="TOGGLE_MODAL"> 
            <i class="fa fa-plus"></i>  Add Category </button>
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

    	<!-- tag editing modal -->
        <Modal
            v-model="editModal"
            title="Edit Category"
            :mask-closable="false"
            :closable="false"
            >
            <Input v-model="editData.name" placeholder="Edit Category name"  />
            <div slot="footer">
                <Button type="default" @click="editModal = false">Close</Button>
                <Button type="primary" @click="editCategory" :disabled="isEditing" :loading="isEditing">{{isEditing ? 'Editing..' : 'Edit tag'}}</Button>
            </div>
        </Modal>

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
                ...mapState("categoriesStoreIndex", ['editData' ,'isEditing' , 'editModal' , 'editModal' ]),
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
                                        type: 'md-user'
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
                                        type: 'danger',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            console.log("params");
                                            console.log(params.row.id);
                                            
                                            this.editCategory(params.row);
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
            ...mapActions('categoriesStoreIndex', [ 'getCategoriesAction' ,'addCategory' , 'editCategory' ] ),
            ...mapMutations( 'categoriesStoreIndex',['TOGGLE_MODAL']),
            remove (index) {
                this.categories.splice(index, 1);
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
