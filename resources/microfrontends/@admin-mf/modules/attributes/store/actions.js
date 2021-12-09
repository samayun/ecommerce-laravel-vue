import {Form} from 'vform'
export default {
    createAttribute({commit , dispatch , state }){
        let API = state.addMeta.showModal ? state.addData : state.addSubData ;
        API.post('/api/admin/attributes')
        .then(res => {
            if (res.status == 201) {
                if (state.addMeta.showModal) {
                    commit('CREATE_ATTRIBUTE' , res.data.data);
                    $Notice.info({
                        title: 'Attribute Added Successfully',
                        desc: `${state.addData.name} added`
                    });
                    commit('TOGGLE_MODAL','att-add');
                    state.addData = new Form({name:""})
                } else{
                    $Notice.info({
                        title: 'Attribute Added Successfully',
                        desc: `${state.addSubData.name} added`
                    });
                    commit('CREATE_SUB_ATTRIBUTE' , res.data.data);
                    let index = state.attributes.findIndex(i => i.id == res.data.data.type.id)
                    state.attributes[index]['values'].push(res.data.data)
                    state.addSubData = new Form({name:"",slug:"",parent_id:""});
                    commit('TOGGLE_MODAL','sub-add');
                }
           }
        }).catch (error => {
            if (error.response.status == 403){
                $Notice.error({
                    title: 'Attribute Create Failed!',
                    desc: error.response.data.message
                });
            }
       })
    },
    async getAttributes({commit ,state , getters}){
       try {
        let res = await axios.get(`/api/admin/attributes`)
        if (res.status == 200) {
            commit('FETCH_ATTRIBUTES' , res.data.data);
         }
       } catch (error) {
           console.log('error in fetch attributes : reload device');
       }
    },
    async getSubAttributes({commit ,state , getters}){
        try {
         let res = await axios.get(`/api/admin/values`)
         if (res.status == 200) {
             commit('FETCH_VALUES' , res.data.data);
          }
        } catch (error) {
            console.log('error in fetch sub attributes : reload device');
        }
     },
    editAttribute({commit,dispatch , state } ){
        let API = state.editMeta.showModal ? state.editData: state.editSubData ;
        let id = state.editMeta.showModal ? state.editData.id: state.editSubData.id;

        API.put(`/api/admin/attributes/${id}`).then(res => {
            if (res.status == 200) {
                if (state.addMeta.showModal) {
                    $Notice.info({
                        title: 'Attribute Updated Successfully',
                        desc: `${state.editData.name} edited`
                    });
                    commit('UPDATE_ATTRIBUTE')
                    commit('TOGGLE_MODAL','att-edit')
                } else{
                    $Notice.info({
                        title: 'Attribute Updated Successfully',
                        desc: `${state.editSubData.name} edited`
                    });
                    commit('UPDATE_SUB_ATTRIBUTE' , res.data.data);
                    state.addSubData = new Form({name:"",slug:"",parent_id:""});
                    commit('TOGGLE_MODAL','sub-edit');
                }
             }
        }).catch (error => {
            if (error.response.status == 403 || error.response.status == 422){
                $Notice.error({
                    title: 'Attribute Update Failed!',
                    desc: error.response.data.message
                });
            }
       })
    },
    async deleteAttribute({commit} , attegory){
        try {
            let res =   await axios.delete(`/api/admin/attributes/${attegory.id}`);
            if (res.status == 200) {
                $Notice.success({
                    title: 'Attribute Deleted Successfully',
                    desc: `${attegory.name} deleted`
                });
                commit('DELETE_ATTRIBUTE' , attegory);
                commit('DELETE_MULTI_SUB_ATTRIBUTE',attegory.values)
            }
        } catch (error) {
           if (error.response.status == 403) {
              $Notice.error({
                    title: 'Attribute Delete Failed!',
                    desc: error.response.data.message
                });
           }
            $Notice.error({
                title: 'Something went wrong',
                desc: error.response.data.message
            });
        }

    },
    async deleteSubAttribute({commit} , sub_attegory){
        try {
            let res =   await axios.delete(`/api/admin/attributes/${sub_attegory.id}`);
            if (res.status == 200) {
                $Notice.success({
                    title: 'Attribute Deleted Successfully',
                    desc: `${sub_attegory.name} deleted`
                });
                commit('DELETE_SUB_ATTRIBUTE' , sub_attegory);
                let index = state.attributes.findIndex(i => i.id == sub_attegory.type.id)
                state.attributes[index]['values'].splice(sub_attegory,1)
            }
        } catch (error) {
           if (error.response.status == 403) {
              $Notice.error({
                    title: 'Attribute Delete Failed!',
                    desc: error.response.data.message
                });
           }
            $Notice.error({
                title: 'Something went wrong',
                desc: error.response.data.message
            });
        }

    },
    async multiDelete({state , commit}, attegoryOrSubAttributeBeDeleted = true){
        try {
            let selectedItems = attegoryOrSubAttributeBeDeleted ? state.multiSelected  : state.subMeta.multiSelected
            let res =   await axios.post(`/api/admin/attributes/multi`,selectedItems);
            if (res.status == 200) {
               if (attegoryOrSubAttributeBeDeleted) {
                    commit('DELETE_MULTI_ATTRIBUTE' , selectedItems);
                    state.multiSelected = []
               } else {
                   console.log('DELETE_MULTI_SUB_ATTRIBUTE : ', selectedItems);
                    commit('DELETE_MULTI_SUB_ATTRIBUTE' , selectedItems);
                    state.subMeta.multiSelected = []
               }
                $Notice.success({
                    title: 'Selected Attribute Deleted Successfully',
                    desc: ` deleted`
                });

            }
        } catch (error) {
           attegoryOrSubAttributeBeDeleted ? state.multiSelected = []  : state.subMeta.multiSelected = [];

           if (error.response.status == 403) {
              $Notice.error({
                    title: 'Attribute Delete Failed!',
                    desc: error.response.data.message
                });

           }
            $Notice.error({
                title: 'Something went wrong',
                desc: error.response.data.message
            });
        }

    },
    handleSelectionChange({state, dispatch} , val){
        state.multiSelected = val
    },
    handleSelectionChangeSubAttribute({state, dispatch} , val){
        state.subMeta.multiSelected = val
    }
}
