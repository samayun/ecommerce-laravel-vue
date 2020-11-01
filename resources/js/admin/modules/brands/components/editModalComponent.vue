<template>
<span>
    <Modal v-model="showEditModal" role="form" :title="$t('categories.edit')" :mask-closable="false" :closable="false" :loading="isEditing">
            <Loading :show="isEditing"/>

            <Input v-model="editData.name" placeholder="Edit category name"
            :class="{ 'is-invalid': editData.errors.has('name') }"
            />
            <has-error :form="editData" field="name"></has-error>
            <div class="space"></div>
                <Upload
                    ref="upload"
                    type="drag"
                    :multiple="false"
                    :show-upload-list="false"
                    :headers="{'x-csrf-token' : token, 'X-Requested-With' : 'XMLHttpRequest'}"
                    :on-success="handleSuccess"
                    :on-error="handleError"
                    :format="['jpg','jpeg','png']"
                    :max-size="2048"
                    :on-format-error="handleFormatError"
                    :on-exceeded-size="handleMaxSize"
                    action="/api/admin/upload_category_image"
                >
                    <div style="padding: 20px 0">
                        <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                        <p  :class="{ 'text-danger': editData.errors.has('icon') }">Click or drag files here to upload</p>

                    </div>
                </Upload>
                <div class="demo-upload-list" v-if="editData.icon">
                    <img :src="`${editData.icon}`" style="width:10rem;height:6rem;"/>
                    <div class="demo-upload-list-cover">
                         <Icon type="ios-camera-outline" size="large" @click="HANDLE_VIEW(false)"></Icon>
                         <Icon type="ios-trash-outline" size="large" @click="deleteImageAndClearFiles"></Icon>
                    </div>
                </div>
                <Modal :closable="false"  v-model="imageVisible">
                        <img :src="editData.icon" :alt="editData.name" style="width:100%;"/>
                    </Modal>
            <div slot="footer">
                <Button type="default" @click="TOGGLE_EDIT_MODAL">Close</Button>
                <Button
                    type="warning"
                    @click="editCategory"
                    :disabled="isEditing"
                    :loading="isEditing"
                >{{isEditing ? $t('categories.editing') : $t('categories.edit') }}</Button>
            </div>
        </Modal>
</span>
</template>


<script>
import {mapState, mapActions, mapMutations,mapGetters } from 'vuex'

export default {
    name: 'editModalComponent',
    computed:{
        ...mapState("categoriesStoreIndex", ['showEditModal' , 'editData' , 'isEditing','errors' , 'isEditImageVisible'
       ]),
        imageVisible: {
            get(){
                return this.isEditImageVisible
            },
            set(value){
                this.HANDLE_VIEW(value)
            }
        }
    //    ...mapGetters("categoriesStoreIndex", ['isEditImageVisible'])
    },
    methods:{
         ...mapActions("categoriesStoreIndex", ['editCategory' ,'handleMaxSize' ,'handleFormatError' ,'handleSuccess','handleError' ,'deleteEditImage' ,'HANDLE_VIEW'   ]),
         ...mapMutations("categoriesStoreIndex" , ['TOGGLE_EDIT_MODAL']),
         deleteImageAndClearFiles(){
             this.deleteEditImage();
             this.$refs.upload.clearFiles()
         }
    },
    async created(){
        this.token = window.Laravel.csrfToken;
    }
}
</script>

