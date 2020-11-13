import {Form} from 'vform'
export default {
    addCategory({commit , dispatch , state }){
        state.addData.post('/api/admin/categories')
        .then(res => {
            if (res.status == 201) {
                commit('CREATE_CATEGORY' , res.data);
                $Notice.info({
                    title: 'Category Added Successfully',
                    desc: `${state.addData.name} added`
                });
                state.addData = new Form({name:"",icon:""})
                commit('TOGGLE_MODAL','cat-add')

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
       })

    },
    createSubCategory({commit , dispatch , state }){
        //    Validate First
        state.addSubData.post('/api/admin/categories')
        .then(res => {
                if (res.status == 201) {
                    commit('CREATE_SUB_CATEGORY' , res.data);
                    $Notice.info({
                        title: 'Category Added Successfully',
                        desc: `${state.addSubData.name} added`
                    });
                    state.addSubData = new Form({name:"",slug:"",description:"",parent_id : ''})
                    commit('TOGGLE_MODAL','sub-add')

                }
        }).catch (error => {
            console.log(error.response);

            if(error.response.status == 422){
                $Notice.error({
                    title: 'Category Create Failed!',
                    desc: error.response.data.message
                });
                commit('SET_ERRORS' , error.response.data.errors)
            }
   })

    },
    async getCategories({commit ,state , getters}){
       try {
        let res = await axios.get(`/api/admin/categories?${getters.getFilteredURLString}`)
        if (res.status == 200) {
            // let updatedFilterString = {
            //     page: parseInt(res.data.current_page),
            //     perPage :parseInt(res.data.per_page),
            //     total: parseInt(res.data.total),
            //     q: ""
            // }
            // commit('FILTER_DATA', updatedFilterString)
            commit('FETCH_CATEGORIES' , res.data);
         }
       } catch (error) {
           console.log('error in fetch categories : reload device');
       }
    },
    async getMergedCategories({commit ,state , getters}){
        try {
         let res = await axios.get(`/api/admin/all_categories`)
         if (res.status == 200) {
             state.allcategories = res.data
          }
        } catch (error) {
            console.log('error in fetch allcategories : reload device');
        }
    },
    async getSubCategories({commit ,state , getters}){
        try {
         let res = await axios.get(`/api/admin/subcategories?${getters.getFilteredURLString}`)
         if (res.status == 200) {
             let updatedFilterString = {
                 page: parseInt(res.data.current_page),
                 perPage :parseInt(res.data.per_page),
                 total: parseInt(res.data.total),
                 q: ""
             }
             commit('FILTER_DATA', updatedFilterString)
             commit('FETCH_SUB_CATEGORIES' , res.data.data);
          }
        } catch (error) {
            console.log('error in fetch sub categories : reload device');
        }
     },
    editCategory({commit,dispatch , state } ){
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
                commit('TOGGLE_MODAL','cat-edit')
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
       })
    },
    editSubCategory({commit,dispatch , state } ){
        state.editSubData.put(`/api/admin/categories/${state.editSubData.id}`).then(res => {
            if (res.status == 200) {
                $Notice.info({
                    title: 'Sub Category Updated Successfully',
                    desc: `${state.editSubData.name} edited`
                });
                // dispatch get categories can make slow browsing - this is an old idea
                // dispatch('getCategories');
                // best practice is updating UI without making a new ajax request
                commit('UPDATE_SUB_CATEGORY')
                commit('TOGGLE_MODAL','sub-edit')
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
       })
    },
    async deleteCategory({commit} , category){
        try {

            let res =   await axios.delete(`/api/admin/categories/${category.id}`);
            if (res.status == 200) {
                $Notice.success({
                    title: 'Category Deleted Successfully',
                    desc: `${category.name} deleted`
                });
                commit('DELETE_CATEGORY' , category);
                commit('DELETE_MULTI_SUB_CATEGORY',category.subcategories)
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
    async deleteSubCategory({commit} , sub_category){
        try {

            let res =   await axios.delete(`/api/admin/categories/${sub_category.id}`);
            if (res.status == 200) {
                $Notice.success({
                    title: 'Category Deleted Successfully',
                    desc: `${sub_category.name} deleted`
                });
                commit('DELETE_SUB_CATEGORY' , sub_category);

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
    async multiDelete({state , commit}, categoryOrSubCategoryBeDeleted = true){
        try {
            let selectedItems = categoryOrSubCategoryBeDeleted ? state.multiSelected  : state.subMeta.multiSelected
            let res =   await axios.post(`/api/admin/categories/multi`,selectedItems);
            if (res.status == 200) {
               if (categoryOrSubCategoryBeDeleted) {
                    commit('DELETE_MULTI_CATEGORY' , selectedItems);
                    state.multiSelected = []
               } else {
                   console.log('DELETE_MULTI_SUB_CATEGORY : ', selectedItems);
                    commit('DELETE_MULTI_SUB_CATEGORY' , selectedItems);
                    state.subMeta.multiSelected = []
               }
                $Notice.success({
                    title: 'Selected Category Deleted Successfully',
                    desc: ` deleted`
                });

            }
        } catch (error) {
           categoryOrSubCategoryBeDeleted ? state.multiSelected = []  : state.subMeta.multiSelected = [];

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
    handleBeforeUpload({state},file){
        if (state.addMeta.showModal && state.addData.name == "" || state.editMeta.showModal && state.editData.name == "" ) {
            $Notice.warning({
                title: "Enter Category Name First",
                desc: "NAME REQUIRED"
            });
        } else {
            const reader = new FileReader();
            let _this = this

            reader.readAsDataURL(file);
            reader.onloadend = function(e){
                file.url = reader.result
                if (state.addMeta.showModal) {
                    state.addData.icon = file.url
                } else {
                    state.editData.icon = file.url
                }
            }
            return false;
        }
    },
    handleSuccess({state},res) {
        if (state.isEditingItem) {
            return (state.editData.icon = res);
        }
        return state.addData.icon = res;
    },
    handleError({state},res, file) {
        console.log('RESPONSE : handleError' , res.errors);

        $Notice.warning({
            title: "The file format is incorrect",
            // desc: `${res.errors.icon && res.errors.icon.length ? res.errors.icon[0] : "Something went wrong!"}`
        });
    },
    handleFormatError(file) {
        $Notice.warning({
            title: "The file format is incorrect",
            desc: "File format of " +file.name +" is incorrect, please select jpg or png."
        });
    },
    handleMaxSize(file) {
        $Notice.warning({
            title: "Exceeding file size limit",
            desc: "File  " + file.name + " is too large, no more than 2M."
        });
    },
    async deleteImage({state}, isAddImage = true){
        if (isAddImage) {
            state.addData.icon = ''
        } else {
            state.isEditingItem = true
            state.editData.icon = ''
        }
        $Bus.$emit('clearAddedFiles')

    },
    handleSelectionChange({state, dispatch} , val){
        state.multiSelected = val
        let selectedItems = [];
        state.multiSelected.forEach(e => {
            if (e.hasOwnProperty('subcategories')) {
                selectedItems.push(...e.subcategories)
            }
        });
        dispatch('handleSelectionChangeSubCategory' , selectedItems)
    },
    handleSelectionChangeSubCategory({state} , val){
        state.subMeta.multiSelected = val
    },
    handleImageView({commit}, payload){
        commit('HANDLE_VIEW' , payload)
    },
    changePaginatedPage({state,commit ,dispatch } , page){
       commit('FILTER_DATA', {page})
       dispatch('getCategories')
    },
    changePaginatedPerPage({state,commit , dispatch} , perPage){
        commit('FILTER_DATA', {perPage})
        dispatch('getCategories')
    },
    changeSubPaginatedPage({state,commit ,dispatch } , page){
        commit('FILTER_DATA', {page})
        dispatch('getSubCategories')
     },
    changeSubPaginatedPerPage({state,commit , dispatch} , perPage){
         commit('FILTER_DATA', {perPage})
         dispatch('getSubCategories')
    }
}
