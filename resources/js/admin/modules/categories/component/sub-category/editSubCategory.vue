<template>
<span>
    <Modal v-model="editSubMeta.showModal" role="form" :title="$t('subcategories.edit')" :mask-closable="false" :closable="false" :loading="editSubData.busy">
            <Loading :show="editSubData.busy"/>

            <Input v-model="editSubData.name" placeholder="Edit Sub category name"
            :class="{ 'is-invalid': editSubData.errors.has('name') }"
            />
            <has-error :form="editSubData" field="name"></has-error>
            <div class="space"></div>

            <div slot="footer">
                <Button type="default" @click="TOGGLE_MODAL('sub-edit')">Close</Button>
                <Button
                    type="warning"
                    @click="editSubCategory"
                    :disabled="editSubData.busy"
                    :loading="editSubData.busy"
                >{{editSubData.busy ? $t('subcategories.editing') : $t('subcategories.edit') }}</Button>
            </div>
        </Modal>
</span>
</template>


<script>
import {mapState, mapActions, mapMutations,mapGetters } from 'vuex'

export default {
    name: 'editSubCategory',
    computed:{
        ...mapState("categoriesStoreIndex", ['editSubData' , 'editSubMeta','errors'
       ]),
        imageVisible: {
            get(){
                return this.editSubData.isImageVisible
            },
            set(value){
                this.handleImageView(value)
            }
        }
    },
    methods:{
         ...mapActions("categoriesStoreIndex", ['editSubCategory']),
         ...mapMutations("categoriesStoreIndex" , ['TOGGLE_MODAL'])
    },
    async created(){
        this.token = window.Laravel.csrfToken;
    }
}
</script>

