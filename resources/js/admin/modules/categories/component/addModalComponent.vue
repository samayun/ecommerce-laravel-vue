<template>
<span class="float-right mr-3">
<Button
    type="success"
    @click="TOGGLE_MODAL" 
    :disabled="isAdding"
    :loading="isAdding"><Icon type="ios-add" /> Add Category</Button>

<Modal v-model="showModal" role="form" title="Add category" :mask-closable="false" :closable="false" @keyup.enter="addCategory">
            <Spin v-if="isAdding">
                <Icon type="ios-loading" size="50" class="demo-spin-icon-load"></Icon>
               <h2> Loading.....</h2>
            </Spin>
        <Input v-model="addData.name" placeholder="Add category name"
        :class="{ 'is-invalid': addData.errors.has('name') }"
        autofocus
        />
        <has-error :form="addData" field="name"></has-error>
        <div class="space"></div>
        <Upload
            ref="uploads"
            type="drag"
            multiple="false"
            :headers="{'x-csrf-token' : token, 'X-Requested-With' : 'XMLHttpRequest'}"
            :on-success="handleSuccess"
            :on-error="handleError"
            :format="['jpg','jpeg','png']"
            :max-size="2048"
            :on-format-error="handleFormatError"
            :on-exceeded-size="handleMaxSize" 
            action="/api/admin/upload"
        > 
          <div style="padding: 20px 0">
             <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
              <p>Click or drag files here to upload</p>
          </div>
        </Upload>
        <div class="image-thumb" v-if="addData.icon">
            <img :src="`${addData.icon}`" style="width:10rem;height:6rem;"/>
            <div class="demo-upload-list-cover">
               <Icon type="ios-trash-outline" size="large"></Icon>
            </div>
        </div>

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
    </span>
</template>


<script>
import {mapState, mapActions, mapMutations } from 'vuex'

export default {
    name: "addModalComponent",
    computed:{ 
        ...mapState("categoriesStoreIndex", [
          'showModal' ,'isLoading', 'isAdding' ,'addData'
       ]),
    },

    methods:{
         ...mapActions("categoriesStoreIndex", ['addCategory' , 'handleMaxSize' ,'handleFormatError' ,'handleSuccess','handleError' ]),
         ...mapMutations("categoriesStoreIndex" , ['TOGGLE_MODAL' ]),

    },
    async created(){
        this.token = window.Laravel.csrfToken;
    }

}
</script>