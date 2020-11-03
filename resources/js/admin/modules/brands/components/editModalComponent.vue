<template>
<span>
    <Modal v-model="editMeta.showModal" role="form" :title="$t('brands.edit')" :mask-closable="false" :closable="false" :loading="editBrandData.busy">
            <Loading :show="editBrandData.busy"/>

            <Input v-model="editBrandData.name" placeholder="Edit brand name"
            :class="{ 'is-invalid': editBrandData.errors.has('name') }"
            />
            <has-error :form="editBrandData" field="name"></has-error>
            <Input v-model="editBrandData.slug" placeholder="Edit brand slug"
                :class="{ 'is-invalid': editBrandData.errors.has('slug') }"
            />
            <has-error :form="editBrandData" field="slug"></has-error>
            <div class="space"></div>
                <Upload
                    ref="upload"
                    type="drag"
                    name="logo"
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
                    action=""
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
                         <Icon type="ios-trash-outline" size="large" @click="deleteImage('edit')"></Icon>
                    </div>
                </div>
                <Modal :closable="false"  v-model="imageVisible">
                        <img :src="editBrandData.logo" :alt="editBrandData.name" style="width:100%;"/>
                    </Modal>
            <div slot="footer">
                <Button type="default" @click="TOGGLE_MODAL('edit')">Close</Button>
                <Button
                    type="success"
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
        ...mapState("brandsStoreIndex", ['editMeta' , 'editBrandData'
       ]),
        imageVisible: {
            get(){
                return this.editMeta.isImageVisible
            },
            set(value){
                this.HANDLE_VIEW(value)
            }
        }
    },
    methods:{
         ...mapActions("brandsStoreIndex", ['updateBrand','handleBeforeUpload' ,'handleMaxSize' ,'handleFormatError' ,'handleSuccess','handleError' ,'deleteImage' ,'HANDLE_VIEW'   ]),
         ...mapMutations("brandsStoreIndex" , ['TOGGLE_MODAL'])
    },
    async created(){
        this.token = window.Laravel.csrfToken;

    }
}
</script>
