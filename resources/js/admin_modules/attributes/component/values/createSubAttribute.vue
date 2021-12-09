<template>
<span class=" mr-3">
<Button
    type="success"
    @click="TOGGLE_MODAL('sub-add')"
    :disabled="addSubData.busy"
    :loading="addSubData.busy"><Icon type="ios-add" /> {{$t('attributes.add')}}</Button>

    <Modal v-model="addSubMeta.showModal" role="form" :title="$t('attributes.add')" :mask-closable="false" :closable="false" @keyup.enter="createAttribute">
        <Loading :show="addSubData.busy"/>

        <label for="name" > Name </label>
        <Input v-model="addSubData.name" placeholder="Add Sub Category name"
        :class="{ 'is-invalid': addSubData.errors.has('name') }"
        autofocus
        />
        <has-error :form="addSubData" field="name"></has-error>
        <div class="spacer"></div>

        <Input v-model="addSubData.slug" placeholder="Add Sub Category slug"
        :class="{ 'is-invalid': addSubData.errors.has('slug') }"
        />
        <has-error :form="addSubData" field="slug"></has-error>
        <div class="spacer"></div>

        <Select v-model="addSubData.parent_id" :class="{ 'is-invalid': addSubData.errors.has('parent_id') }">
            <Option v-for="item in attributes" :key="item.id" :value="item.id"> {{ item.name }} </Option>
        </Select>
        <has-error :form="addSubData" field="parent_id"></has-error>

        <div class="spacer"></div>

        <div slot="footer">
            <Button type="default" @click="TOGGLE_MODAL('sub-add')"> {{$t('close') }} </Button>
            <Button
                type="primary"
                @click="createAttribute"
                :disabled="addSubData.busy"
                :loading="addSubData.busy"
            >{{addSubData.busy ? $t('attributes.adding')+'..' : $t('attributes.add')}}</Button>
        </div>
    </Modal>
    </span>
</template>


<script>
import {mapState, mapActions, mapMutations, mapGetters } from 'vuex'

export default {
    name: "createSubCategory",
    computed:{
        ...mapState("attributesStoreIndex", [
          'addSubMeta' ,'addSubData' ,'attributes'
       ])
    },
    methods:{
         ...mapActions("attributesStoreIndex", ['createAttribute' ]),
         ...mapMutations("attributesStoreIndex" , ['TOGGLE_MODAL'])
    }

}
</script>
