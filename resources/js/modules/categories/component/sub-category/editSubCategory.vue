<template>
    <Modal v-model="editSubMeta.showModal" role="form" :title="$t('subcategories.add')" :mask-closable="false" :closable="false" @keyup.enter="editSubCategory">
        <Loading :show="editSubData.busy"/>
        <label for="name" > Name </label>
        <Input v-model="editSubData.name" placeholder="Edit Sub Category name"
        :class="{ 'has-error': editSubData.errors.has('name') }"
        autofocus
        />
        <has-error :form="editSubData" field="name"></has-error>
        <div class="spacer"></div>

        <Input v-model="editSubData.slug" placeholder="Edit Sub Category slug"
        :class="{ 'has-error': editSubData.errors.has('slug') }"
        />
        <has-error :form="editSubData" field="slug"></has-error>
        <div class="spacer"></div>

        <textarea v-model="editSubData.description" placeholder="Edit Sub Category description"
        :class="{ 'has-error': editSubData.errors.has('description') }"
        > </textarea>
        <has-error :form="editSubData" field="description"></has-error>
        <div class="spacer"></div>

        <Select v-model="editSubData.parent_id" :class="{ 'has-error': editSubData.errors.has('parent_id') }">
            <Option
             v-for="item in categories"
              :key="item.id"
               :value="item.id"
                 :selected="item.id == editSubData.parent_id"
               > <img :src="item.icon" alt="item.name" width="20rem"> {{ item.name }} </Option>
        </Select>
        <has-error :form="editSubData" field="parent_id"></has-error>
        <div class="spacer"></div>

        <div slot="footer">
            <Button type="default" @click="TOGGLE_MODAL('sub-edit')"> {{$t('close') }} </Button>
            <Button
                type="primary"
                @click="editSubCategory"
                :disabled="editSubData.busy"
                :loading="editSubData.busy"
            >{{editSubData.busy ? $t('subcategories.adding')+'..' : $t('subcategories.add')}}</Button>
        </div>
    </Modal>
</template>


<script>
import {mapState, mapActions, mapMutations,mapGetters } from 'vuex'

export default {
    name: 'editSubCategory',
    computed:{
        ...mapState("categoriesStoreIndex", ['editSubData' , 'editSubMeta','errors' ,'categories'
       ])
    },
    methods:{
         ...mapActions("categoriesStoreIndex", ['editSubCategory']),
         ...mapMutations("categoriesStoreIndex" , ['TOGGLE_MODAL'])
    }
}
</script>

