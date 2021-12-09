<template>
<span>
    <Modal v-model="editMeta.showModal" role="form" :title="$t('attributes.edit')" :mask-closable="false" :closable="false" :loading="editData.busy">
            <Loading :show="editData.busy"/>

            <Input v-model="editData.name" placeholder="Edit Attribute name"
            :class="{ 'is-invalid': editData.errors.has('name') }"
            />
            <has-error :form="editData" field="name"></has-error>
            <div class="space"></div>

            <Input v-model="editData.slug" placeholder="Edit Attribute slug"
            :class="{ 'is-invalid': editData.errors.has('slug') }"
            />
            <has-error :form="editData" field="slug"></has-error>
            <div class="space"></div>


            <div slot="footer">
                <Button type="default" @click="TOGGLE_MODAL('att-edit')">Close</Button>
                <Button
                    type="warning"
                    @click="editAttribute"
                    :disabled="editData.busy"
                    :loading="editData.busy"
                >{{editData.busy ? $t('attributes.editing') : $t('attributes.edit') }}</Button>
            </div>
        </Modal>
</span>
</template>


<script>
import {mapState, mapActions, mapMutations,mapGetters } from 'vuex'

export default {
    name: 'editModalComponent',
    computed:{
        ...mapState("attributesStoreIndex", ['editMeta' , 'editData'
       ])
    },
    methods:{
         ...mapActions("attributesStoreIndex", ['editAttribute' ]),
         ...mapMutations("attributesStoreIndex" , ['TOGGLE_MODAL'])
    },
    async created(){
        this.token = window.Laravel.csrfToken;
    }
}
</script>

