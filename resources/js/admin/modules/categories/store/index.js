import axios from "axios";

export default {   
    state: {
        categories : [],
        getCategory: null ,
        showModal: false,
        isAdding: false,
        isLoading: false ,
        errors: {}
    },
    getters: {
       getAllCategory(state){
           return state.categories
       },
       showModal(state){
           return state.showModal
       },
       isAdding(state){
          return state.isAdding
        },
        isLoading(state){
            return state.isLoading
        },
        errors(state){
            return state.errors
        },
    },
    actions: {
       async addCategory({commit , dispatch} , data){
           try {
            commit('SET_IS_LOADING' , true)
            commit('SET_IS_ADDING' , true)
            // if (data.name.trim().length <= 3 || data.name.trim().length == 0) {
            //     commit('SET_IS_LOADING' , false)
            //     commit('SET_IS_ADDING' , false)
            //     commit('SET_ERRORS' , {
            //         name: "Name feild is required"
            //     })
            // }
            let res =   await axios.post('/api/admin/categories' , data);
            if (res.status == 201) {
                dispatch('getCategoriesAction')
                commit('TOGGLE_MODAL')
                commit('SET_IS_LOADING' , false)
                commit('SET_IS_ADDING' , false)
             }
           } catch (error) {
               
               if (error.response.status = 422) {
                commit('SET_IS_LOADING' , false)
                commit('SET_IS_ADDING' , false)
                commit('SET_ERRORS' , error.response.data.errors)
               }
           }
       },
       async getCategoriesAction({commit }){
           try {
            commit('SET_IS_LOADING' , true)
            commit('SET_IS_ADDING' , true)
            let res =   await axios.get('/api/admin/categories');
            if (res.status == 200) {
                console.log('STATE' , res.data);
                
                commit('GET_CATEGORIES' , res.data);
                commit('SET_IS_LOADING' , false)
                commit('SET_IS_ADDING' , false)
             }
           } catch (error) {
               
           }
        }
    },
    mutations: {
        UPDATE_CATEGORIES(state , categories){
            state.categories = categories
        },
        GET_CATEGORIES(state , categories){
            state.categories = categories
        },
        TOGGLE_MODAL(state){
            state.showModal = !state.showModal
        },
        SET_IS_LOADING(state, data){
            state.isLoading =  data
        },
        SET_IS_ADDING(state , data){
            state.isAdding = data
        },
        SET_ERRORS(state , errors){
            state.errors = errors
        }
    }
  }