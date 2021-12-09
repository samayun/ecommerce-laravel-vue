<template>
<span class=" mr-3">
<Button
    type="success"
    @click="TOGGLE_MODAL('sub-add')"
    :disabled="addSubData.busy"
    :loading="addSubData.busy"><Icon type="ios-add" /> {{$t('subcategories.add')}}</Button>

    <Modal v-model="addSubMeta.showModal" role="form" :title="$t('subcategories.add')" :mask-closable="false" :closable="false" @keyup.enter="createSubCategory">
        <Loading :show="addSubData.busy"/>
        <label for="name" > Name </label>
        <Input v-model="addSubData.name" placeholder="Add Sub Category name"
        :class="{ 'has-error': addSubData.errors.has('name') }"
        autofocus
        />
        <has-error :form="addSubData" field="name"></has-error>
        <div class="spacer"></div>

        <Input v-model="addSubData.slug" placeholder="Add Sub Category slug"
        :class="{ 'has-error': addSubData.errors.has('slug') }"
        />
        <has-error :form="addSubData" field="slug"></has-error>
        <div class="spacer"></div>

        <textarea v-model="addSubData.description" placeholder="Add Sub Category description"
        :class="{ 'has-error': addSubData.errors.has('description') }"
        > </textarea>
        <has-error :form="addSubData" field="description"></has-error>
        <div class="spacer"></div>

        <Select v-model="addSubData.parent_id" :class="{ 'has-error': addSubData.errors.has('parent_id') }">
            <Option v-for="item in categories" :key="item.id" :value="item.id"> <img :src="item.icon" alt="item.name" width="20rem"> {{ item.name }} </Option>
        </Select>
        <has-error :form="addSubData" field="parent_id"></has-error>
        <div class="spacer"></div>

        <div slot="footer">
            <Button type="default" @click="TOGGLE_MODAL('sub-add')"> {{$t('close') }} </Button>
            <Button
                type="primary"
                @click="createSubCategory"
                :disabled="addSubData.busy"
                :loading="addSubData.busy"
            >{{addSubData.busy ? $t('subcategories.adding')+'..' : $t('subcategories.add')}}</Button>
        </div>
    </Modal>
    </span>
</template>


<script>
import {mapState, mapActions, mapMutations, mapGetters } from 'vuex'

export default {
    name: "createSubCategory",
    computed:{
        ...mapState("categoriesStoreIndex", [
          'addSubMeta' ,'addSubData','errors' ,'categories'
       ])
    },
    methods:{
         ...mapActions("categoriesStoreIndex", ['createSubCategory' ]),
         ...mapMutations("categoriesStoreIndex" , ['TOGGLE_MODAL'])
    }

}
</script>
