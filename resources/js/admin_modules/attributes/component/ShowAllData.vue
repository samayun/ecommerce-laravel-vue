<template>
    <div>
         <span v-if="isPermitted('delete','attribute') && multiSelected.length > 0">
             <Button type="error" @click="multiDelete"> Multiple {{ $t('delete') }} </Button> {{multiSelected.length }} selected
         </span>
         <!-- <Loading show="getAllAttribute.length < 1"/> -->
        <Table border
           @on-selection-change="handleSelectionChange"
            ref="selection"
            :columns="dataStructureTable"
            v-if="getAllAttribute.length"
            :loading="getAllAttribute.length == 0"
            :data="getAllAttribute">
            </Table>
            <br/>

    </div>
</template>
<script>
import {mapState, mapActions, mapMutations, mapGetters } from 'vuex'
export default {
   name : "ShowAllData",
   data(){
         let deleteMultiple = {}
                if (this.isPermitted('delete','attribute')){
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
                        title: 'Slug',
                        key: 'slug',
                        sortable: true,
                        tooltip:true
                    },
                     {
                        title: 'Values',
                        key: 'values',
                        sortable: true,
                        tooltip:true,
                        render: (h,params) => {
                            return params.row.values.map(element => {
                                return h('Tag',{props: { color: 'success'}}, element.name)
                            });
                        }
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        width: 100,
                        align: 'center',
                        render: (h, params) => {
                            let deleteButton = h('')
                            if (this.isPermitted('delete','attribute')) {
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
                            let edit = h('')
                            if(this.isPermitted('update','attribute')){
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
                                            this.TOGGLE_MODAL('att-edit')
                                            this.GET_EDIT_DATA(params.row);
                                        }
                                    }
                                }, 'Edit');
                            }
                            return h('div', [
                                edit, deleteButton
                            ]);
                        }
                    }
                ],
       }
   },
   computed: {
       ...mapState("attributesStoreIndex", [ 'editMeta' , 'editData','errors' ,'multiSelected' ]),
       ...mapGetters("attributesStoreIndex",['getAllAttribute' ])
   },
   methods:{
         ...mapActions("attributesStoreIndex", ['getAttributes','editAttribute' ,'deleteAttribute' ,'multiDelete','handleSelectionChange']),
         ...mapMutations("attributesStoreIndex" , ['TOGGLE_MODAL' ,'GET_EDIT_DATA' ]),
         deleteConfirmation(attribute){
             this.$Modal.confirm({
                 title: '<Icon type="ios-information-circle"></Icon> Are you sure to delete',
                 content: "Click OK to proceed",
                 onOk: () => {
                     this.deleteAttribute(attribute)
                 }
             })
         }
   },
    created(){
        if (this.getAllAttribute.length == 0) {
             this.getAttributes();
        }
    }
}
</script>
