<template>
    <Modal v-model="editSubMeta.showModal" role="form" :title="$t('attributes.add')" :mask-closable="false" :closable="false" @keyup.enter="editAttribute">
        <Loading :show="editSubData.busy"/>

        <label for="name" > Name </label>
        <Input v-model="editSubData.name" placeholder="Edit Sub Attribute name"
        :class="{ 'is-invalid': editSubData.errors.has('name') }"
        autofocus
        />
        <has-error :form="editSubData" field="name"></has-error>
        <div class="spacer"></div>

        <Input v-model="editSubData.slug" placeholder="Edit Sub Attribute slug"
        :class="{ 'is-invalid': editSubData.errors.has('slug') }"
        />
        <has-error :form="editSubData" field="slug"></has-error>
        <div class="spacer"></div>

        <Select v-model="editSubData.parent_id" :class="{ 'is-invalid': editSubData.errors.has('parent_id') }">
            <Option
             v-for="item in attributes"
              :key="item.id"
               :value="item.id"
                 :selected="item.id == editSubData.parent_id"
               >  {{ item.name }} </Option>
        </Select>
        <has-error :form="editSubData" field="parent_id"></has-error>
        <div class="spacer"></div>

        <div slot="footer">
            <Button type="default" @click="TOGGLE_MODAL('sub-edit')"> {{$t('close') }} </Button>
            <Button
                type="primary"
                @click="editAttribute"
                :disabled="editSubData.busy"
                :loading="editSubData.busy"
            >{{editSubData.busy ? $t('attributes.editing')+'..' : $t('attributes.edit')}}</Button>
        </div>
    </Modal>
</template>

<script>
import {mapState, mapActions, mapMutations,mapGetters } from 'vuex'
export default {
    name: 'editAttribute',
    computed:{
        ...mapState("attributesStoreIndex", ['editSubData','editSubMeta','attributes'])
    },
    methods:{
         ...mapActions("attributesStoreIndex", ['editAttribute']),
         ...mapMutations("attributesStoreIndex" , ['TOGGLE_MODAL'])
    }
}
</script>

