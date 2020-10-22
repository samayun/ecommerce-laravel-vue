// import axios from "axios";
import { Form } from "vform";
import { Modal } from "view-design";
import { object } from "vue-types";
export default {   
    state: {
        categories : [],
        getCategory: null ,

        showModal: false,
        isAdding: false,
        isLoading: false ,

        addData : new Form({
            name:""
        }),
        // addData:{ name: ""  ,  errors:{}},
        isEditing: false ,
        showEditModal: false,
        
        editData: new Form({
            id: '',
            name: ""
        }),
        errors: {},
        multiSelected: [],
        paginationData: {}
       
    },
    getters: {
        getAllCategory(state){
           return state.categories
       },
       paginatedMetaData(state){
          return state.paginationData
       }
    },
    actions: {
        addCategory({commit , dispatch , state} ){
            commit('SET_IS_ADDING' , true)
            state.addData.post('/api/admin/categories')
            .then(res => {
                if (res.status == 201) {
                    commit('CREATE_CATEGORY' , res.data);
                    $Notice.info({
                        title: 'Category Added Successfully',
                        desc: `${state.addData.name} added`
                    });
                    state.addData = new Form({name:""})
                    commit('TOGGLE_MODAL')

                 }
            }).catch (error => {
                if (error.response.status == 403){
                    $Notice.error({
                        title: 'Category Create Failed!',
                        desc: error.response.data.message
                    });
                }
               if (error.response.status == 422) {
                 commit('SET_ERRORS' , error.response.data.errors)
               }
           }).finally( () => {
                commit('SET_IS_ADDING' , false)
           })
           
       },
       async getCategories({commit ,state }){
           try {

            commit('SET_IS_LOADING' , true)
            let res =   await axios.get('/api/admin/categories');
            // let res = this.callApi('get', '/api/admin/categories')
            if (res.status == 200) {
                console.log(res.data);
                state.paginationData = res.data
                commit('FETCH_CATEGORIES' , res.data.data);
                commit('SET_IS_LOADING' , false)
             }
           } catch (error) {
                commit('SET_IS_LOADING' , false)
               if (error.response.status == 403) {
                  $Notice.error({
                        title: 'Category FETCH Failed!',
                        desc: error.response.data.message
                    });
               }
               
           }
        },

     editCategory({commit,dispatch , state } ){
            commit('SET_IS_EDITING' , true);
            state.editData.put(`/api/admin/categories/${state.editData.id}`).then(res => {
                if (res.status == 200) {
                    $Notice.info({
                        title: 'Category Updated Successfully',
                        desc: `${state.editData.name} edited`
                    });
                    // dispatch get categories can make slow browsing - this is an old idea
                    // dispatch('getCategories');
                    // best practice is updating UI without making a new ajax request
                    commit('UPDATE_CATEGORY')
                    commit('TOGGLE_EDIT_MODAL')
                 }
            }).catch (error => {
                if (error.response.status == 403){
                    $Notice.error({
                        title: 'Category Update Failed!',
                        desc: error.response.data.message
                    });
                }
                if (error.response.status == 422) {
                    
                    $Notice.error({
                        title: 'Category Update Failed!',
                        desc: error.response.data.message
                    });
                    commit('SET_ERRORS' , error.response.data.errors)
                  }
           }).finally( () => {
                commit('SET_IS_EDITING' , false)
           })	
        },
        async deleteCategory({commit} , category){
            try {
                let res =   await axios.delete('/api/admin/categories/'+ category.id);
                if (res.status == 200) {
                    
                    $Notice.success({
                        title: 'Category Deleted Successfully',
                        desc: `${category.name} deleted`
                    });
                    commit('DELETE_CATEGORY' , category);
                }
            } catch (error) {
               if (error.response.status == 403) {
                  $Notice.error({
                        title: 'Category Delete Failed!',
                        desc: error.response.data.message
                    });
               }
                $Notice.error({
                    title: 'Something went wrong',
                    desc: error.response.data.message
                });
            }
           
        },
        async multiDelete({state , commit}){
            try {
                let res =   await axios.post(`/api/admin/categories/multi`,state.multiSelected);
                if (res.status == 200) {
                    commit('DELETE_MULTI_CATEGORY' , state.multiSelected);
                    $Notice.success({
                        title: 'Selected Category Deleted Successfully',
                        desc: ` deleted`
                    });
 
                }
            } catch (error) {
               if (error.response.status == 403) {
                  this.$Notice.error({
                        title: 'Category Delete Failed!',
                        desc: error.response.data.message
                    });
               }
                $Notice.error({
                    title: 'Something went wrong',
                    desc: error.response.data.message
                });
            }
           
        }
    },
    mutations: {
        CREATE_CATEGORY(state , category){
            state.categories.unshift(category)
        },
        FETCH_CATEGORIES(state , categories){
            state.categories = categories
        },
        GET_EDIT_DATA(state , payload){
            state.editData =  new Form(payload)
        },
        UPDATE_CATEGORY(state ){
            let index = state.categories.findIndex(item => item.id === state.editData.id);
            state.categories[index].name = state.editData.name
        },
        DELETE_CATEGORY(state , category){
            let index= state.categories.findIndex(item => item.id === category.id);
            state.categories.splice(index , 1)
        },
        DELETE_MULTI_CATEGORY(state , multiSelectedCat){
            let arr = state.categories.filter( objectA => {
                return !multiSelectedCat.find(objectB => objectA.id === objectB.id)
            })
            state.categories = arr;
            state.multiSelected = [];
        },
        TOGGLE_MODAL(state){
            state.showModal = !state.showModal
        },
        TOGGLE_EDIT_MODAL(state){
            state.showEditModal = !state.showEditModal
        },
        handleSelectionChange(state , val){
            state.multiSelected = val
        }, 
        SET_IS_LOADING(state, data){
            state.isLoading =  data
        },
        SET_IS_ADDING(state , data){
            state.isAdding = data
        },
        SET_IS_EDITING(state , data){
            state.isEditing = data
        },
        SET_ERRORS(state , errors){
            state.errors = errors
        }
    }
  }