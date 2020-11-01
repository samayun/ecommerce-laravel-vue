<template>
<span>
    <Modal v-model="showEditModal" role="form" :title="$t('brands.edit')" :mask-closable="false" :closable="false" :loading="isEditing">
            <Loading :show="isEditing"/>

            <Input v-model="editBrandData.name" placeholder="Edit category name"
            :class="{ 'is-invalid': editBrandData.errors.has('name') }"
            />
            <has-error :form="editBrandData" field="name"></has-error>
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
                        <p  :class="{ 'text-danger': editBrandData.errors.has('logo') }">Click or drag files here to upload</p>

                    </div>
                </Upload>
                <div class="demo-upload-list" v-if="editBrandData.logo">
                    <img :src="`${editBrandData.logo}`" style="width:10rem;height:6rem;"/>
                    <div class="demo-upload-list-cover">
                         <Icon type="ios-camera-outline" size="large" @click="HANDLE_VIEW(false)"></Icon>
                         <Icon type="ios-trash-outline" size="large" @click="deleteImageAndClearFiles"></Icon>
                    </div>
                </div>
                <Modal :closable="false"  v-model="imageVisible">
                        <img :src="editBrandData.logo" :alt="editBrandData.name" style="width:100%;"/>
                    </Modal>
            <div slot="footer">
                <Button type="default" @click="TOGGLE_EDIT_MODAL">Close</Button>
                <Button
                    type="warning"
                    @click="updateBrand"
                    :disabled="editBrandData.busy"
                    :loading="editBrandData.busy"
                >{{editBrandData.busy ? $t('brands.editing') : $t('brands.edit') }}</Button>
            </div>
        </Modal>
</span>
</template>


<script>
import {mapState, mapActions, mapMutations,mapGetters } from 'vuex'

export default {
    name: 'editModalComponent',
    computed:{
        ...mapState("categoriesStoreIndex", ['showEditModal' , 'editBrandData' , 'isEditing','errors' , 'isEditImageVisible'
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
         ...mapActions("categoriesStoreIndex", ['updateBrand' ,'handleMaxSize' ,'handleFormatError' ,'handleSuccess','handleError' ,'deleteEditImage' ,'HANDLE_VIEW'   ]),
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

