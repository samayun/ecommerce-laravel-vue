<template>
    <span class="float-right mr-3">
       <a
            class="btn btn-primary"
            @click.prevent="TOGGLE_MODAL('add')"
            :disabled="addBrandData.busy"
            :loading="addBrandData.busy"><Icon type="ios-add" /> {{$t('brands.add')}}</a>

    <Modal v-model="addMeta.showModal" role="form" :title="$t('brands.add')"   :headers="{'x-csrf-token' : token, 'X-Requested-With' : 'XMLHttpRequest'}" :mask-closable="false" :closable="false" >
        <Loading :show="addBrandData.busy"/>

            <Input v-model="addBrandData.name" :placeholder="$t('brands.add')"
                :class="{ 'is-invalid': addBrandData.errors.has('name') }"
                autofocus
            />
            <has-error :form="addBrandData" field="name"></has-error>

            <Upload
                ref="upload"
                type="drag"
                :multiple="false"
                :show-upload-list="false"
                name="logo"
                :headers="{'x-csrf-token' : token, 'X-Requested-With' : 'XMLHttpRequest'}"
                :before-upload="handleBeforeUpload"
                :on-success="handleSuccess"
                :format="['jpg','jpeg','png']"
                :max-size="2048"
                :on-format-error="handleFormatError"
                :on-exceeded-size="handleMaxSize"
                action="/api/admin/brands"
            >
                <div style="padding: 20px 0">
                    <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                    <p  :class="{ 'text-danger': addBrandData.errors.has('logo') }"> {{ $t('click_here_upload') }} </p>

                </div>
            </Upload>
            <has-error :form="addBrandData" field="logo"></has-error>

            <div class="demo-upload-list" v-if="addBrandData.logo">
                <img :src="`${addBrandData.logo}`" style="width:10rem;height:6rem;"/>
                <div class="demo-upload-list-cover">
                <Icon type="ios-camera-outline" size="large" @click="HANDLE_VIEW"></Icon>
                <Icon type="ios-trash-outline" size="large" @click="deleteImage('add')"></Icon>
                </div>
            </div>
             <Modal title="View image" v-model="imageVisible">
                    <img :src="addBrandData.logo" :alt="addBrandData.name" style="width:100%;"/>
                </Modal>
            <div slot="footer">
                <Button type="default" @click="TOGGLE_MODAL('add')"> {{$t('close') }} </Button>
                <Button
                    type="primary"
                    @click="createBrand"
                >    <i class="fa fa-fw fa-lg fa-check-circle"></i> {{addBrandData.busy ? $t('brands.adding')+'..' : $t('brands.add')}}</Button>
            </div>
        </Modal>
    </span>
</template>


<script>
import {mapState, mapActions, mapMutations, mapGetters } from 'vuex'

export default {
    name: "addModalComponent",

    computed:{
        ...mapState("brandsStoreIndex", [
          'addMeta' ,'isLoading','addBrandData'
       ]),
        imageVisible: {
            get(){
                return this.addMeta.isImageVisible
            },
            set(value){
                this.HANDLE_VIEW(true)
            }
        }
    },
    methods:{
         ...mapActions("brandsStoreIndex", ['createBrand' , 'handleMaxSize' ,'handleFormatError' ,'handleSuccess','handleBeforeUpload','handleError' ,'deleteImage' ,'HANDLE_VIEW'  ]),
         ...mapMutations("brandsStoreIndex" , ['TOGGLE_MODAL'])
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
