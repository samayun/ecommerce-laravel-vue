// import axios from "axios";
import { Form } from "vform";
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
        editModal: false,
        
        editData: {
            name:""
        },
       
    },
    getters: {
        getAllCategory(state){
           return state.categories
       }
    },
    actions: {

        addCategory({commit , dispatch , state} ){
            commit('SET_IS_LOADING' , true)
            commit('SET_IS_ADDING' , true)

            state.addData.post('/api/admin/categories')
            .then(res => {
                if (res.status == 201) {
                    commit('CREATE_CATEGORY' , res.data);
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
                commit('SET_IS_LOADING' , false)
                commit('SET_IS_ADDING' , false)
           })
           
       },
       async getCategories({commit }){
           try {

            commit('SET_IS_ADDING' , true)
            let res =   await axios.get('/api/admin/categories');

            if (res.status == 200) {
                commit('FETCH_CATEGORIES' , res.data);
                commit('SET_IS_ADDING' , false)
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
        async editCategory({commit , state } , editData){
        //     if(editData.name.trim()=='') return this.e('Category name is required');
        //     this.swr('RUN !')
			// const res = await callApi('post', 'api/edit_tag', editData)
			// if(res.status === 200){
			// 	state.categories[this.index].name = editData.name
			// 	this.s('Category has been edited successfully!')
			// 	state.editModal = false
				
			// }else{
			// 	if(res.status == 422){
			// 		if(res.data.errors.name){
			// 			this.e(res.data.errors.name[0])
			// 		}
					
			// 	}else{
			// 		this.swr()
			// 	}
				
		}
    },
    mutations: {
        CREATE_CATEGORY(state , category){
            state.categories.unshift(category)
        },
        FETCH_CATEGORIES(state , categories){
            state.categories = categories
        },
        DELETE_CATEGORY(state , category){
            let index= state.categories.findIndex(item => item.id === category.id);
            state.posts.splice(index , 1)
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