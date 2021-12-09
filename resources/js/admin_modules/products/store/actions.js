import {  Modal } from 'view-design'
import {  Form } from 'vform'

export default {
    async getProducts({commit ,state , getters}){
        try {
            let res =   await axios.get(`/api/admin/products?${getters.getFilteredURLString}`);
            if (res.status == 200) {
                let updatedFilterString = {
                    page: parseInt(res.data.meta.current_page),
                    perPage : parseInt(res.data.meta.per_page) || 5,
                    total: parseInt(res.data.meta.total),
                    q: ""
                }
                commit('FILTER_DATA', updatedFilterString)
                commit('FETCH_PRODUCTS' , res.data.data);
            }
        } catch (error) {
            console.log(error.response.data);
        }
    },
    createProduct({commit , dispatch , state }){
        state.addProductData.post('/api/admin/products')
        .then(res => {
            if (res.status == 201) {
                state.addProductData.modal ? commit('TOGGLE_MODAL',"add"): "";
                commit('CREATE_PRODUCT' , res.data.data);
                $Notice.success({
                    title: 'Product Added Successfully',
                    desc: `${state.addProductData.name} added`
                });
                state.addProductData = new Form({
                    name: "",
                    sku:"",
                    brand_id: "",
                    price:"",
                    description: "",
                    image:"",
                    featured: false,
                    status: true
                });
                $Bus.$emit('redirectToProducts');

             }
        }).catch (error => {
            if (error.response.status == 403) {
                $Notice.error({
                        title: 'you have no persmission',
                        desc: error.response.data.message
                    });
            }
            if ([500].includes(error.response.status)) {
                $Notice.error({
                        title: 'SERVER ERROR',
                        desc: error.response.data.message
                    });
            }
       })

   },
   async getToViewSingleProduct({state , commit}, id){
        try {
            let res = await axios.get(`/api/admin/products/${id}`);
            commit('VIEW_DATA', res.data.data);
        } catch (error) {}

    },
   async getSingleProduct({state , commit}, id){
       try {
           let res = await axios.get(`/api/admin/products/${id}`);
           commit('GET_EDIT_DATA', res.data.data)
       } catch (error) {}
   },
    updateProduct({commit,dispatch , state } ){
        state.editProductData.put(`/api/admin/products/${state.editProductData.id}`).then(res => {
            if (res.status == 200) {
                $Notice.success({
                    title: 'Product Updated Successfully',
                    desc: `${state.editProductData.name} edited`
                });
                // dispatch get categories can make slow browsing - this is an old idea
                // dispatch('getCategories');
                // best practice is updating UI without making a new ajax request
                commit('UPDATE_PRODUCT', res.data.data);
                $Bus.$emit('redirectToProducts');

                // state.editProductMeta.modal ? commit('TOGGLE_MODAL',"edit"): "";

                // state.editProductData = new Form({
                //     id: '',
                //     brand_id:'',
                //     name: "",
                //     slug:"",
                //     sku:"",
                //     price: "",
                //     quantity:"",
                //     image:"",
                //     featured: false,
                //     status: false ,
                //     description: ""
                // });

             }
        }).catch (error => {
                $Notice.info({
                    title: 'Product Update Failed!'
                    // desc: error.response.data.message
                });
                console.log(error);

       })
    },
    deleteConfirmation({dispatch} , product){
        Modal.confirm({
            title: `<Icon type="ios-information-circle"></Icon> Are you sure to delete`,
            content: "Click OK to proceed",
            onOk: () => {
                dispatch('deleteProduct' , product)
            }
        })
    },
    async deleteProduct({commit} , product){
        try {
            let res =   await axios.delete(`/api/admin/products/${product.id}`);
            if (res.status == 200) {
                $Notice.success({
                    title: 'Product Deleted Successfully',
                    desc: `${product.name} deleted`
                });
                commit('DELETE_PRODUCT' , product);
            }
        } catch (error) {
           if (error.response.status == 403) {
              $Notice.error({
                    title: 'Product Delete Failed!',
                    desc: error.response.data.message
                });
           }
            $Notice.error({
                title: 'Something went wrong',
                desc: error.response.data.message
            });
        }

    },
    handleSelectionChange({state} , val){
        state.multiSelected = val
    },
    async bulk_delete({state , commit}){
        try {
            let res =   await axios.post(`/api/admin/products/bulk_delete`,{
                selected_data  : state.multiSelected
            });
            if (res.status == 200) {
                commit('DELETE_MULTI_PRODUCT' , state.multiSelected);
                // state.multiSelected = [];
                $Notice.success({
                    title: 'Selected Product Deleted Successfully',
                    desc: ` deleted`
                });

            }
        } catch (error) {
            state.multiSelected = [];
           if (error.response.status == 403) {
              $Notice.error({
                    title: 'Product Delete Failed!',
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
            const reader     = new FileReader();
            let _this        = this
            reader.readAsDataURL(file);
            reader.onloadend    = function(e){
                file.url        = reader.result
                let existProId  = state.editProductData.id
               if (existProId) {
                 state.editProductData.image  = file.url
               }
                state.addProductData.image  = file.url
            }
            return false;
    },
    handleSuccess({state},res) {
        // if (state.isEditingItem) {
        //     return (state.editProductData.image = res);
        // }
        return state.addProductData.image = res;
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
    async deleteImage({state},whichImage = 'add'){
        if (whichImage == 'add') {
            let img = state.addProductData.image
            state.addProductData.image = ''
        } else {
            let img = state.editProductData.image
            state.editProductData.image = ''
        }
        $Bus.$emit('clearAddedFiles')
    },
    HANDLE_VIEW({commit}, payload){
        commit('HANDLE_VIEW' , payload)
    },
    changePaginatedPage({state,commit ,dispatch } , page){
        commit('FILTER_DATA', {page})
        dispatch('getProducts')
    },
    changePaginatedPerPage({state,commit , dispatch} , perPage){
            commit('FILTER_DATA', {perPage})
            dispatch('getProducts')
    }
}
