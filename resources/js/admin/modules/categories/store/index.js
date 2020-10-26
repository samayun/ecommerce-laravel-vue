import mutations from "./mutations";
import { Form } from "vform";
export default {
    state:{
        categories : [],
        showModal: false,
        isAdding: false,
        isLoading: false ,
        addData : new Form({
            name:"",
            icon :""
        }),
        // addData:{ name: ""  ,  errors:{}},
        isEditing: false ,
        showEditModal: false,

        editData: new Form({
            id: '',
            name: "",
            icon:""
        }),
        errors: {},
        multiSelected: [],
        isIconImageNew: false,
        isEditingItem: false,
        isImageVisible: false,
        isEditImageVisible: false,

        filterString:{
            page: 1,
            perPage : 5,
            orderBy: 'created_at',
            sortBy: 'desc',
            q: "",
            total: 0
        }
    },
    getters : {
        getAllCategory       : state => state.categories,
        paginatedMetaData    : state => state.paginationData,
        isImageVisible       : state => state.isImageVisible,
        isEditImageVisible   : state => state.isEditImageVisible,
        filterString         : state => state.filterString,
        getFilteredURLString : state => {
            let {page,perPage,orderBy,sortBy,q} = state.filterString;
            let queryString = "";
            if (q != "") {
               queryString = `page=1&q=${q}`
            } else {
               queryString = `page=${page}`
            }
            (perPage !="") ? queryString += `&perPage=${perPage}` : null;
            (orderBy !="") ? queryString += `&orderBy=${orderBy}` : null;
            (sortBy !="") ? queryString += `&sortBy=${sortBy}` : null;

            return queryString;
        }
    },
    actions : {
        addCategory({commit , dispatch , state } ){
            commit('SET_IS_ADDING' , true)
            state.addData.post('/api/admin/categories')
            .then(res => {
                if (res.status == 201) {
                    commit('CREATE_CATEGORY' , res.data);
                    $Notice.info({
                        title: 'Category Added Successfully',
                        desc: `${state.addData.name} added`
                    });
                    state.addData = new Form({name:"",icon:""})
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
        async getCategories({commit ,state , getters}){
           try {
            commit('SET_IS_LOADING' , true)
            let res =   await axios.get(`/api/admin/categories?${getters.getFilteredURLString}`);
            if (res.status == 200) {
                let updatedFilterString = {
                    page: parseInt(res.data.current_page),
                    perPage :parseInt(res.data.per_page),
                    total: parseInt(res.data.total),
                    q: ""
                }
                commit('FILTER_DATA', updatedFilterString)
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
                console.log(category);

                let res =   await axios.delete(`/api/admin/categories/${category.id}`);
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
                    // state.multiSelected = [];
                    $Notice.success({
                        title: 'Selected Category Deleted Successfully',
                        desc: ` deleted`
                    });

                }
            } catch (error) {
                state.multiSelected = [];
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
        handleSuccess({state},res) {
            res = `/uploads/categories/${res}`;
            // this.$refs.upload.clearFiles()
            if (state.isEditingItem) {
                return (state.editData.icon = res);
            }
            return state.addData.icon = res;
        },
        handleError(res, file) {
            $Notice.warning({
                title: "The file format is incorrect",
                // desc: `${res.errors.file.length ? res.errors.file[0] : "Something went wrong!"}`
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
        async deleteImage({state}){
            let img = state.addData.icon
            state.addData.icon = ''
            $Bus.$emit('clearAddedFiles')

            let res = await axios.post('/api/admin/delete_category_image', {image : img});
            if (res.status != 200) {
                state.addData.icon = img
                $Notice.warning({
                    title: "Something Went Wrong"
                });
            }
        },
        async deleteEditImage({state}){
            state.isEditingItem = true
            let img = state.editData.icon
            state.editData.icon = ''
            $Bus.$emit('clearAddedFiles')

            let res = await axios.post('/api/admin/delete_category_image', {image : img});
            if (res.status != 200) {
                state.editData.icon = img
                $Notice.warning({
                    title: "Something Went Wrong"
                });
            }
        },
        HANDLE_VIEW({commit}, payload){
            commit('HANDLE_VIEW' , payload)
        },
        changePaginatedPage({state,commit ,dispatch } , page){
           commit('FILTER_DATA', {page})
           dispatch('getCategories')
        },
        changePaginatedPerPage({state,commit , dispatch} , perPage){
            commit('FILTER_DATA', {perPage})
            dispatch('getCategories')
        }
    } ,
    mutations
  }
