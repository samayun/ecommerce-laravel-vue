<template>
    <div>
         <span v-if="isPermitted('delete','category') && subMeta.multiSelected.length > 0">
             <Button type="error" @click="multiDelete(false)"> Multiple {{ $t('delete') }} </Button> {{subMeta.multiSelected.length }} selected
         </span>
         <!-- <Loading show="getAllSubAttribute.length < 1"/> -->

        <Table border
             @on-selection-change="handleSelectionChangeSubAttribute"
            ref="selection"
            :columns="dataStructureTable"
            v-if="getAllValue.length"
            :loading="getAllValue.length == 0"
            :color="orange"
            :data="getAllValue">
        </Table>
    </div>
</template>
<script>
import {mapState, mapActions, mapMutations, mapGetters } from 'vuex'
export default {
   name : "showSubAttributes",
   data(){
         let deleteMultiple = {}
                if (this.isPermitted('delete','category')){
                    deleteMultiple =  {
                        type: 'selection',
                        align: 'center',
                        width: 40
                        }
                    }else{
                        deleteMultiple = {
                            title: 'ID',
                            key: 'id',
                            sortable: true,
                            tooltip:true,
                    }
            }
       return {
                 dataStructureTable: [
                     deleteMultiple ,
                    {
                        title: 'Name',
                        key: 'name',
                        sortable: true,
                        tooltip:true
                    },
                    {
                        title: 'Attribute Value',
                        key: 'parent_id',
                        render: (h,params) => {
                            name = params.row.type ? params.row.type.name : ""
                            return h('Tag', {props: {
                                color: 'black'
                            }}, name )
                        }
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        width: 100,
                        align: 'center',
                        render: (h, params) => {
                            let edit = h('')
                            if(this.isPermitted('update','category')){
                             edit = h('Icon', {
                                    props: {
                                        type: 'ios-download',
                                        size: 'large'
                                    },
                                    style: {
                                        marginRight: '5px',
                                        fontSize: '25px',
                                        cursor: 'pointer',
                                        color: "#f11"
                                    },
                                    on: {
                                        click: () => {
                                            this.TOGGLE_MODAL('sub-edit')
                                            this.GET_SUB_EDIT_DATA(params.row);
                                        }
                                    }
                                }, 'Edit');
                            }
                            let deleteButton = h('')
                            if (this.isPermitted('delete','category')) {
                               deleteButton =   h('Icon', {
                                                    props: {
                                                        type: 'ios-trash',
                                                        size: 'large'
                                                    },
                                                    style: {
                                                        fontSize: '25px',
                                                        cursor: 'pointer',
                                                        color: "#f55"
                                                    },
                                                    on: {
                                                        click: () => {
                                                            this.deleteConfirmation(params.row)
                                                        }
                                                    }
                                            }, 'Delete')
                                 };
                            return h('div', [
                                edit, deleteButton
                            ]);
                        }
                    }
                ],
       }
   },
   computed: {
       ...mapState("attributesStoreIndex", [ 'editMeta' , 'editData' ,'subMeta' ]),
       ...mapGetters("attributesStoreIndex",['getAllValue','getAllAttribute' ])
   },
   methods:{
         ...mapActions("attributesStoreIndex", ['getSubAttributes','editAttribute' ,'deleteSubAttribute' ,'multiDelete','handleSelectionChangeSubAttribute']),
         ...mapMutations("attributesStoreIndex" , ['TOGGLE_MODAL','GET_SUB_EDIT_DATA' ]),
         deleteConfirmation(sub_category){
             this.$Modal.confirm({
                 title: '<Icon type="ios-information-circle"></Icon> Are you sure to delete',
                 content: "Click OK to proceed",
                 onOk: () => {
                     this.deleteSubAttribute(sub_category)
                 }
             })
         }
   },
    created(){
        if (this.getAllValue.length == 0) {
             this.getSubAttributes();
        }
    }
}
</script>
