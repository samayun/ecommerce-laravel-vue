import { data } from 'jquery';
import { Modal } from 'view-design'
export default {
    async getProducts({commit ,state , getters}){
        try {
            let res =   await axios.get(`/api/admin/products`);
            if (res.status == 200) {
                // let updatedFilterString = {
                //     page: parseInt(res.data.current_page),
                //     perPage : parseInt(res.data.per_page) || 5,
                //     total: parseInt(res.data.total),
                //     q: ""
                // }
                // commit('FILTER_DATA', updatedFilterString)
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
                commit('CREATE_PRODUCT' , res.data);
                $Notice.info({
                    title: 'Product Added Successfully',
                    desc: `${state.addProductData.name} added`
                });
                state.addProductData = new Form({
                    name: " ",
                    slug: "",
                    sku:"",
                    product_id: '',
                    price: '',
                    description: ""
                });
                commit('TOGGLE_MODAL','add')

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
    updateProduct({commit,dispatch , state } ){
        state.editProductData.put(`/api/admin/products/${state.editProductData.id}`).then(res => {
            if (res.status == 200) {
                $Notice.info({
                    title: 'Product Updated Successfully',
                    desc: `${state.editProductData.name} edited`
                });
                // dispatch get categories can make slow browsing - this is an old idea
                // dispatch('getCategories');
                // best practice is updating UI without making a new ajax request
                commit('UPDATE_PRODUCT', res.data.data)
                commit('TOGGLE_MODAL',"edit")
             }
        }).catch (error => {
            console.log(error);

            // if (/403|422/.test(error.response.status)){
                // $Notice.error({
                //     title: 'Product Update Failed!',
                //     desc: error.response.data.message
                // });
            // }
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
        if (state.addMeta.showModal && state.addProductData.name == "" || state.editMeta.showModal && state.editProductData.name == "" ) {
            $Notice.warning({
                title: "Enter Product Name First",
                desc: "NAME REQUIRED"
            });
        } else {
            const reader = new FileReader();
            let _this = this

            reader.readAsDataURL(file);
            reader.onloadend = function(e){
                file.url = reader.result
                if (state.addMeta.showModal) {
                    state.addProductData.logo = file.url
                } else {
                    state.editProductData.logo = file.url
                }
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
        return state.addProductData.logo = res;
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
            let img = state.addProductData.logo
            state.addProductData.logo = ''
        } else {
            let img = state.editProductData.logo
            state.editProductData.logo = ''
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