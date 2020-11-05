<template>
<span>
    <Modal v-model="editMeta.showModal" role="form" :title="$t('categories.edit')" :mask-closable="false" :closable="false" :loading="editData.busy">
            <Loading :show="editData.busy"/>

            <Input v-model="editData.name" placeholder="Edit category name"
            :class="{ 'is-invalid': editData.errors.has('name') }"
            />
            <has-error :form="editData" field="name"></has-error>
            <div class="space"></div>
                <Upload
                    ref="upload"
                    type="drag"
                    name="icon"
                     v-show="editData.name && editData.name.length >= 3 || editData.icon == ''"
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
                        <p  :class="{ 'text-danger': editData.errors.has('icon') }">Click or drag files here to upload</p>

                    </div>
                </Upload>
                <div class="demo-upload-list" v-if="editData.icon">
                    <img :src="`${editData.icon}`" style="width:10rem;height:6rem;"/>
                    <div class="demo-upload-list-cover">
                         <Icon type="ios-camera-outline" size="large" @click="handleImageView(false)"></Icon>
                         <Icon type="ios-trash-outline" size="large" @click="deleteImage(false)"></Icon>
                    </div>
                </div>
                <Modal :closable="false"  v-model="imageVisible">
                        <img :src="editData.icon" :alt="editData.name" style="width:100%;"/>
                    </Modal>
            <div slot="footer">
                <Button type="default" @click="TOGGLE_MODAL('cat-edit')">Close</Button>
                <Button
                    type="warning"
                    @click="editCategory"
                    :disabled="editData.busy"
                    :loading="editData.busy"
                >{{editData.busy ? $t('categories.editing') : $t('categories.edit') }}</Button>
            </div>
        </Modal>
</span>
</template>


<script>
import {mapState, mapActions, mapMutations,mapGetters } from 'vuex'

export default {
    name: 'editModalComponent',
    computed:{
        ...mapState("categoriesStoreIndex", ['editMeta' , 'editData','errors'
       ]),
        imageVisible: {
            get(){
                return this.editMeta.isImageVisible
            },
            set(value){
                this.handleImageView(value)
            }
        }
    },
    methods:{
         ...mapActions("categoriesStoreIndex", ['editCategory' , "handleBeforeUpload",'handleMaxSize' ,'handleFormatError' ,'handleSuccess','handleError' ,'deleteImage' ,'handleImageView'   ]),
         ...mapMutations("categoriesStoreIndex" , ['TOGGLE_MODAL'])
    },
    async created(){
        this.token = window.Laravel.csrfToken;
    }
}
</script>

