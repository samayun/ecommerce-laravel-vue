import { Modal } from 'view-design'
export default {
    async getBrands({commit ,state , getters}){
        try {
            commit('SET_IS_LOADING' , true)
            let res =   await axios.get(`/api/admin/brands?${getters.getFilteredURLString}`);
            if (res.status == 200) {
                let updatedFilterString = {
                    page: parseInt(res.data.current_page),
                    perPage : parseInt(res.data.per_page) || 5,
                    total: parseInt(res.data.total),
                    q: ""
                }
                commit('FILTER_DATA', updatedFilterString)
                commit('FETCH_BRANDS' , res.data.data);
                commit('SET_IS_LOADING' , false)

            }
        } catch (error) {
                commit('SET_IS_LOADING' , false)
            if (error.response.status == 403) {
                $Notice.error({
                        title: 'Brand FETCH Failed!',
                        desc: error.response.data.message
                    });
            }

        }
    },
    createBrand({commit , dispatch , state }){
        state.addBrandData.post('/api/admin/brands')
        .then(res => {
            if (res.status == 201) {
                commit('CREATE_BRAND' , res.data);
                $Notice.info({
                    title: 'Brand Added Successfully',
                    desc: `${state.addBrandData.name} added`
                });
                state.addBrandData = new Form({name:"",logo:""})
                commit('TOGGLE_MODAL','add')

             }
        }).catch (error => {
            $Notice.error({
                    title: 'Brand Create Failed!',
                    desc: error.response.data.message
                });
       })

   },

    updateBrand({commit,dispatch , state } ){
        state.editBrandData.put(`/api/admin/brand/${state.editBrandData.id}`).then(res => {
            if (res.status == 200) {
                $Notice.info({
                    title: 'Brand Updated Successfully',
                    desc: `${state.editBrandData.name} edited`
                });
                // dispatch get categories can make slow browsing - this is an old idea
                // dispatch('getCategories');
                // best practice is updating UI without making a new ajax request
                commit('UPDATE_BRAND')
                commit('TOGGLE_MODAL',"edit")
             }
        }).catch (error => {
            if (error.response.status == 403){
                $Notice.error({
                    title: 'Brand Update Failed!',
                    desc: error.response.data.message
                });
            }
            if (error.response.status == 422) {

                $Notice.error({
                    title: 'Brand Update Failed!',
                    desc: error.response.data.message
                });
                commit('SET_ERRORS' , error.response.data.errors)
              }
       })
    },
    deleteConfirmation({dispatch} , brand){
        Modal.confirm({
            title: `<Icon type="ios-information-circle"></Icon> Are you sure to delete`,
            content: "Click OK to proceed",
            onOk: () => {
                dispatch('deleteBrand' , brand)
            }
        })
    },
    async deleteBrand({commit} , brand){
        try {
            let res =   await axios.delete(`/api/admin/brands/${brand.id}`,{
               brand: brand
            });
            if (res.status == 202) {

                $Notice.success({
                    title: 'Brand Deleted Successfully',
                    desc: `${brand.name} deleted`
                });
                commit('DELETE_BRAND' , brand);
            }
        } catch (error) {
           if (error.response.status == 403) {
              $Notice.error({
                    title: 'Brand Delete Failed!',
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
                    title: 'Selected Brand Deleted Successfully',
                    desc: ` deleted`
                });

            }
        } catch (error) {
            state.multiSelected = [];
           if (error.response.status == 403) {
              $Notice.error({
                    title: 'Brand Delete Failed!',
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
        if (state.addBrandData.name == "") {
            $Notice.warning({
                title: "Enter Brand Name First",
                desc: "NAME REQUIRED"
            });
        } else {
            const reader = new FileReader();
            let _this = this

            reader.readAsDataURL(file);
            reader.onloadend = function(e){
                file.url = reader.result
                state.addBrandData.logo = file.url
            }
            return false;
        }
    },
    handleSuccess({state},res) {
        // res = `/uploads/${res}`;
        // this.$refs.upload.clearFiles()
        if (state.isEditingItem) {
            return (state.editData.logo = res);
        }
        return state.addBrandData.logo = res;
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
        let img = state.addBrandData.logo
        state.addBrandData.logo = ''
        $Bus.$emit('clearAddedFiles')
    },
    async deleteEditImage({state}){
        state.isEditingItem = true
        let img = state.editData.logo
        state.editData.logo = ''
        $Bus.$emit('clearAddedFiles')

    },
    HANDLE_VIEW({commit}, payload){
        commit('HANDLE_VIEW' , payload)
    },
    changePaginatedPage({state,commit ,dispatch } , page){
        commit('FILTER_DATA', {page})
        dispatch('getBrands')
    },
    changePaginatedPerPage({state,commit , dispatch} , perPage){
            commit('FILTER_DATA', {perPage})
            dispatch('getBrands')
    }
}
