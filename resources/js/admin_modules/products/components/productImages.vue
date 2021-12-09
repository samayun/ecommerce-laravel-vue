<template>
<div>
    <div class="row">
        <div class="col-md-3"  v-for="(item,i) in editProductData.images" :key="i">
            <div class="demo-upload-list">
                <img :src="item.url" size="small" class="w-100"/>
                    <div class="demo-upload-list-cover">
                        <Icon type="ios-trash-outline" @click="deleteImage(item)"></Icon>
                    </div>
            </div>
        </div>
    </div>
    <Upload
        ref="upload"
        name="images"
        :headers="{'x-csrf-token' : token, 'X-Requested-With' : 'XMLHttpRequest'}"
        :show-upload-list="false"
        multiple
        type="drag"
        :before-upload="handleBeforeUpload"
        :format="['jpg','jpeg','png']"
        :max-size="2048"
        :on-format-error="handleFormatError"
        :on-exceeded-size="handleMaxSize"
        :on-success="handleSuccess"
        action="/api/admin/images"
        >
            <div style="padding: 20px 0">
                <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                <p class='is-invalid text-danger' > {{ $t('click_here_upload') }} </p>

            </div>
    </Upload>
    <div class="demo-upload-list">
        <span  v-for="(item,i) in uploadList" :key="i">
            <img :src="item" size="small" class="w-25"/>
            <div class="demo-upload-list-cover">
                <Icon type="ios-eye-outline" @click="handleView(item)"></Icon>
                <Icon type="ios-trash-outline" @click="handleRemove(item)"></Icon>
            </div>
        </span>
    </div>


    <Modal title="View image" v-model="visible">
          <img size="large" :src="images" class="w-75"/>
    </Modal>

    <Button type="success" @click="UploadImage" icon="ios-upload"> Upload </Button>
</div>
</template>
<script>
import { mapState } from 'vuex';
    export default {
        naem: "Product Images",
        data () {
            return {
                visible: false,
                productId: "",
                images: new Form({}),
                uploadList: [],
                defaultList:[]
            }
        },
        computed:{
             ...mapState("productsStoreIndex", ['editProductData']),
        },
        methods: {
            deleteImage(item){
                 axios.delete(`/api/admin/images/${item.id}` ,{
                    productId: item.imageable_id,
                    image: item.id
                }).then(res => {
                    this.editProductData.images.splice(this.editProductData.images.indexOf(item),1)
                    //  this.defaultList = res.data.images;
                    //  this.$refs.upload.clearFiles();
                }).catch(err => console.log(err) )
            },
            UploadImage(){
                axios.post('/api/admin/images' ,{
                    productId: this.productId,
                    images: this.uploadList
                })
                .then(res => {
                    this.uploadList.forEach(element => {
                        this.$refs.upload.fileList.splice(element, 1);
                    });
                     this.editProductData.images = res.data.images;
                })
                .catch(err => console.log(err) )
            },
            handleView (item) {
                this.visible = true;
                this.images = item;
            },
            handleRemove (file) {
                 // delete data from the upload instance
                const fileList = this.$refs.upload.fileList;
                this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
            },
            handleSuccess (res, file) {
                 this.images = res;
                // file.url = res;
                // file.name = file;
            },
            handleFormatError (file) {
                this.$Notice.warning({
                    title: 'The file format is incorrect',
                    desc: 'file' + file.name + ' The format is incorrect. Please upload a picture in jpg or png format. '
                });
            },
            handleMaxSize (file) {
                this.$Notice.warning({
                    Title: 'Exceeded file size limit',
                    Desc: 'file' + file.name + ' is too large to exceed 2M. '
                });
            },
            handleBeforeUpload(file) {
                    const check = this.uploadList.length < 3;
                    if (!check) {
                        this.$Notice.warning({
                            title: 'Up to 3 images can be uploaded at most. '
                        });
                    }
                    let reader = new FileReader()
                    reader.readAsDataURL(file)
                    const _this = this
                    reader.onloadend = function (e) {
                        file.url = reader.result
                    //    let obj =  {
                    //         name: file.name,
                    //         type: file.type,
                    //         url: file.url,
                    //         size: `${file.size /1000} KB`
                    //     }
                        _this.uploadList.push(file.url)
                    }
                return false;
            },},
        mounted () {
            this.uploadList = this.$refs.upload.fileList;
        },
        created(){
             this.token = window.Laravel.csrfToken;
             this.productId = this.$route.params.id
             this.defaultList = this.editProductData.images
        }
    }
</script>
<style>
    .demo-upload-list {
        text-align: center;
        line-height: 60px;
        border: 1px solid transparent;
        border-radius: 4px;
        overflow: hidden;
        background: #fff;
        position: relative;
        box-shadow: 0 1px 1px rgba(255, 255, 255, 0.87);
        margin-right: 4px;
        height: 100%;
        width: 100%;
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
    .demo-upload-list:hover .demo-upload-list-cover {
        display: inline flow-root list-item;
        background: #0000004d;
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
