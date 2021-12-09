<template>
<div>
    <div class="demo-upload-list" v-for="item in uploadList">
        <template v-if="item.status === 'finished'">
            ![](item.url)
            <div class="demo-upload-list-cover">
                <Icon type="ios-eye-outline" @click.native="handleView(item.name)"></Icon>
                <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
            </div>
        </template>
        <template v-else>
            <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
        </template>
    </div>
    <Upload
        ref="upload"
        :show-upload-list="false"
        :default-file-list="defaultList"
        :on-success="handleSuccess"
        :format="['jpg','jpeg','png']"
        :max-size="2048"
        :on-format-error="handleFormatError"
        :on-exceeded-size="handleMaxSize"
        :before-upload="handleBeforeUpload"
        multiple
        type="drag"
        action="//jsonplaceholder.typicode.com/posts/"
        style="display: inline-block;width:58px;">
        <div style="width: 58px;height:58px;line-height: 58px;">
            <Icon type="camera" size="20"></Icon>
        </div>
    </Upload>
    <Modal title="View image" v-model="visible">
        ![]('https://o5wwk8baw.qnssl.com/' + imgName + '/large')
    </Modal>
</div>
</template>
<script>
    export default {
        data () {
            return {
                defaultList: [
                    {
                        'name': 'a42bdcc1178e62b4694c830f028db5c0',
                        'url': 'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar'
                    },
                    {
                        'name': 'bc7521e033abdd1e92222d733590f104',
                        'url': 'https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar'
                    }
                ],
                imgName: '',
                visible: false,
                uploadList: []
            }
        },
        methods: {
            handleView (name) {
                this.imgName = name;
                this.visible = true;
            },
            handleRemove (file) {
                                 // delete data from the upload instance
                const fileList = this.$refs.upload.fileList;
                this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
            },
            handleSuccess (res, file) {
                                 // Since the upload process is an instance, here's the mock add url
                file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar';
                file.name = '7eb99afb9d5f317c912f08b5212fd69a';
            },
            handleFormatError (file) {
                this.$Notice.warning({
                    Title: 'The file format is incorrect',
                    Desc: 'file' + file.name + ' The format is incorrect. Please upload a picture in jpg or png format. '
                });
            },
            handleMaxSize (file) {
                this.$Notice.warning({
                    Title: 'Exceeded file size limit',
                    Desc: 'file' + file.name + ' is too large to exceed 2M. '
                });
            },
            // handleBeforeUpload () {
            //     const check = this.uploadList.length < 5;
            //     if (!check) {
            //         this.$Notice.warning({
            //             Title: 'Up to 5 images can be uploaded at most. '
            //         });
            //     }
            //     return check;
            // },

                handleBeforeUpload(file) {
                    // Create a FileReader object
                    let reader = new FileReader()
                            // The readAsDataURL method is used to read the contents of the specified Blob or File
                            // When the read operation is completed, readyState becomes DONE, loadend is triggered, and the result property contains the data: URL (the base64 encoded string represents the file's data)
                            // read the file as a URL accessible address
                    reader.readAsDataURL(file)

                    const _this = this
                    reader.onloadend = function (e) {
                        file.url = reader.result
                        _this.uploadList.push(file)
                    }
                 },
        },
        mounted () {
            this.uploadList = this.$refs.upload.fileList;
        }
    }
</script>
<style>
    .demo-upload-list{
        display: inline-block;
        width: 60px;
        height: 60px;
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
</style>
