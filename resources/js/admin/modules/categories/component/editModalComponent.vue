<template>
<span>
    <Modal v-model="showEditModal" role="form" title="Edit category" :mask-closable="false" :closable="false" :loading="isEditing">
            <Spin v-if="isEditing">
                <Icon type="ios-loading" size="50" class="demo-spin-icon-load"></Icon>
               <h2> Loading.....</h2>
            </Spin>
            <Input v-model="editData.name" placeholder="Edit category name"
            :class="{ 'is-invalid': editData.errors.has('name') }"
            />
            <has-error :form="editData" field="name"></has-error>
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
                <Button type="default" @click="TOGGLE_EDIT_MODAL">Close</Button>
                <Button
                    type="warning"
                    @click="editCategory"
                    :disabled="isEditing"
                    :loading="isEditing"
                >{{isEditing ? 'Editing..' : 'Edit Category'}}</Button>
            </div>
        </Modal>
</span>
</template>


<script>
import {mapState, mapActions, mapMutations } from 'vuex'

export default {
    name: 'editModalComponent',
    computed:{ 
        ...mapState("categoriesStoreIndex", ['showEditModal' , 'editData' , 'isEditing','errors'
       ]),
    },
    methods:{
         ...mapActions("categoriesStoreIndex", ['editCategory']),
         ...mapMutations("categoriesStoreIndex" , ['TOGGLE_EDIT_MODAL'])

    }
}
</script>

