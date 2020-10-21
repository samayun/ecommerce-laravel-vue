<template>
    <div class="content">
        <div class="container-fluid">
            
            <!--~~~~~~~ TABLE ONE ~~~~~~~~~-->
            <div class="card p-2">
                <p class="card-title ml-3">Categories
                     <Button
                     
                      @click="TOGGLE_MODAL" 
                      :disabled="isAdding"
                      :loading="isLoading"><Icon type="md-add" /> Add Category</Button></p>

                <div class="card-body">
                    <table class="table" v-if="getAllCategory.length">
                            <!-- TABLE TITLE -->
                        <tr>
                            <th>ID</th>
                            <th>Category Name</th>
                            <th>Category Image</th>
                            <th>Created at</th>
                            <th>Action</th>
                        </tr>
                            <!-- TABLE TITLE -->
                        <tr v-for="cat in getAllCategory" :key="cat.id">
                            <td>{{ cat.id}}</td>
                            <td>{{cat.name}}</td>
                            <td><img src="/img/logo.png" alt="" width="120"></td>
                            <td> {{cat.created_at }} </td>
                            <td>
                                <Button type="info" size="small" >Edit</Button>
                                <Button type="error" size="small" >Delete</Button>
                            </td>
                        </tr>
                    </table>
            </div>
          <!--  adding modal -->
            <Modal v-model="showModal" role="form" title="Add category" :mask-closable="false" :closable="false">
                <Input v-model="addData.name" placeholder="Add category name"
                 :class="{ 'is-invalid': addData.errors.has('name') }"
                 />
                 <has-error :form="addData" field="name"></has-error>
                <div class="space"></div>
                <!-- <Upload
                    ref="uploads"
                    type="drag"
                     :headers="{'x-csrf-token' : token, 'X-Requested-With' : 'XMLHttpRequest'}"
                    :on-success="handleSuccess"
                    :on-error="handleError"
                    :format="['jpg','jpeg','png']"
                    :max-size="2048"
                    :on-format-error="handleFormatError"
                    :on-exceeded-size="handleMaxSize" 
                    action="/app/upload"
                > -->
                    <!-- <div style="padding: 20px 0">
                    <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                    <p>Click or drag files here to upload</p>
                    </div>
                </Upload> -->
                <!-- <div class="demo-upload-list" v-if="data.iconImage">
                    <img :src="`${data.iconImage}`" />
                    <div class="demo-upload-list-cover">
                    <Icon type="ios-trash-outline" @click="deleteImage"></Icon>
                    </div>
                </div> -->

                <div slot="footer">
                    <Button type="default" @click="TOGGLE_MODAL">Close</Button>
                    <Button
                        type="primary"
                        @click="addCategory"
                        :disabled="isAdding"
                        :loading="isAdding"
                    >{{isAdding ? 'Adding..' : 'Add Category'}}</Button>
                </div>
                </Modal>
            </div>

        </div>
    </div>
</template>

<script>
import {mapState, mapActions, mapMutations, mapGetters } from 'vuex'

export default {
    computed:{ 
        ...mapState("categoriesStoreIndex", [
          'showModal' , 'isLoading' , 'isAdding' ,'addData'
       ]),
       ...mapGetters("categoriesStoreIndex",['getAllCategory'])
    },
    methods:{
         ...mapActions("categoriesStoreIndex", ['addCategory','getCategories' ]),
         ...mapMutations("categoriesStoreIndex" , ['TOGGLE_MODAL'])
    },
    created(){
        this.getCategories()
    }
}
</script>