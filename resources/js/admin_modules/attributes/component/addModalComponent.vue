<template>
<span class="mr-3">
<Button
    type="success"
    @click="TOGGLE_MODAL('att-add')"
    :disabled="addData.busy"
    :loading="addData.busy"><Icon type="ios-add" /> {{$t('attributes.add')}}</Button>

    <Modal v-model="addMeta.showModal" role="form" :title="$t('attributes.add')" :mask-closable="false" :closable="false" @keyup.enter="createAttribute">
        <Loading :show="addData.busy"/>

        <Input v-model="addData.name" placeholder="Add Attribute name"
        :class="{ 'is-invalid': addData.errors.has('name') }"
        autofocus
        />
        <has-error :form="addData" field="name"></has-error>

        <div slot="footer">
            <Button type="default" @click="TOGGLE_MODAL('att-add')"> {{$t('close') }} </Button>
            <Button
                type="primary"
                @click="createAttribute"
                :disabled="addData.busy"
                :loading="addData.busy"
            >{{addData.busy ? $t('attributes.adding')+'..' : $t('attributes.add')}}</Button>
        </div>
    </Modal>
    </span>
</template>


<script>
import {mapState, mapActions, mapMutations, mapGetters } from 'vuex'

export default {
    name: "addModalComponent",

    computed:{
        ...mapState("attributesStoreIndex", [
          'addMeta' ,'addData'
       ]),
    },
    methods:{
         ...mapActions("attributesStoreIndex", ['createAttribute'] ),
         ...mapMutations("attributesStoreIndex" , ['TOGGLE_MODAL'])
    },
     created(){
        if(this.addMeta.showModal){
            document.title = "Create Attribute";
        }
    }

}
</script>
