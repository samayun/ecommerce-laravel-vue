<template>
<span class="mr-3">
<Button
    type="success"
    @click="TOGGLE_MODAL('cat-add')"
    :disabled="addData.busy"
    :loading="addData.busy"><Icon type="ios-add" /> {{$t('categories.add')}}</Button>

    <Modal v-model="addMeta.showModal" role="form" :title="$t('categories.add')" :mask-closable="false" :closable="false" @keyup.enter="addCategory">
        <Loading :show="addData.busy"/>

        <Input v-model="addData.name" placeholder="Add category name"
        :class="{ 'has-error': addData.errors.has('name') }"
        autofocus
        />
        <has-error :form="addData" field="name"></has-error>

        <Upload
            v-show="addData.name && addData.name.length >= 3"
            ref="upload"
            type="drag"
            name="icon"
            :multiple="false"
             :show-upload-list="false"
            :headers="{'x-csrf-token' : token, 'X-Requested-With' : 'XMLHttpRequest'}"
            :before-upload="handleBeforeUpload"
            :on-success="handleSuccess"
            :on-error="handleError"
            :format="['jpg','jpeg','png']"
            :max-size="2048"
            :on-format-error="handleFormatError"
            :on-exceeded-size="handleMaxSize"
            action="/api/admin/categories"
        >
            <div style="padding: 20px 0">
                <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                <p  :class="{ 'text-danger': addData.errors.has('icon') }"> {{ $t('click_here_upload') }} </p>

            </div>
        </Upload>
        <has-error :form="addData" field="icon"></has-error>

        <div class="demo-upload-list" v-if="addData.icon">
            <img :src="`${addData.icon}`" style="width:10rem;height:6rem;"/>
            <div class="demo-upload-list-cover">
               <Icon type="ios-camera-outline" size="large" @click="handleImageView(true)"></Icon>
               <Icon type="ios-trash-outline" size="large" @click="deleteImage"></Icon>
            </div>
        </div>
        <Modal title="View image" v-model="imageVisible">
                <img :src="addData.icon" :alt="addData.name" style="width:100%;"/>
            </Modal>
        <div slot="footer">
            <Button type="default" @click="TOGGLE_MODAL('cat-add')"> {{$t('close') }} </Button>
            <Button
                type="primary"
                @click="addCategory"
                :disabled="addData.busy"
                :loading="addData.busy"
            >{{addData.busy ? $t('categories.adding')+'..' : $t('categories.add')}}</Button>
        </div>
    </Modal>
    </span>
</template>


<script>
import {mapState, mapActions, mapMutations, mapGetters } from 'vuex'

export default {
    name: "addModalComponent",

    computed:{
        ...mapState("categoriesStoreIndex", [
          'addMeta' ,'addData','errors'
       ]),
       ...mapGetters("categoriesStoreIndex", ['isImageVisible']),
        imageVisible: {
            get(){
                return this.addMeta.isImageVisible
            },
            set(value){
                this.handleImageView(true)
            }
        }
    },
    methods:{
         ...mapActions("categoriesStoreIndex", ['addCategory' , "handleBeforeUpload",'handleMaxSize' ,'handleFormatError' ,'handleSuccess','handleError' ,'deleteImage' ,'handleImageView'  ]),
         ...mapMutations("categoriesStoreIndex" , ['TOGGLE_MODAL'])
    },
     created(){
        this.token = window.Laravel.csrfToken;
        let _this = this
        $Bus.$on('clearAddedFiles' , () => {
            _this.$refs.upload.clearFiles();
        })
    }

}
</script>

<style>
    .demo-upload-list{

        text-align: center;
        line-height: 60px;
        border: 1px solid transparent;
        border-radius: 4px;
        overflow: hidden;
        background: #fff;
        position: relative;
        box-shadow: 0 1px 1px rgba(0,0,0,.2);
        margin-right: 4px;
    }
    .demo-upload-list img{
        width: 100%;
        height: 100%;
    }
    .demo-upload-list-cover{
        display: none;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0,.6);
    }
    .demo-upload-list:hover .demo-upload-list-cover{
        display: block;
    }
    .demo-upload-list-cover i{
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        margin: 0 2px;
    }
    /* .ivu-icon {
        line-height: 58px;
    } */
</style>

<i18n>
{
    "en" : {
        "click_here_upload" : "Click or drag files here to upload",
        "close": "Close"
    },
    "bn" : {
        "click_here_upload" : "আপলোড করতে এখানে ক্লিক করুন",
        "close" : "বন্ধ করুন"
    }
}
</i18n>
