import {Form} from 'vform';

export default {
    CREATE_BRAND(state,brand){
        state.brands.unshift(brand)
    },
    DELETE_BRAND(state,brand){
        let index= state.brands.findIndex(item => item.id === brand.id);
        state.brands.splice(index , 1)
    },
    GET_EDIT_DATA(state , payload){
        state.editMeta.showModal = !state.editMeta.showModal
        state.editBrandData =  new Form(payload);
    },
    UPDATE_BRAND(state ){
        let index = state.brands.findIndex(item => item.id === state.editBrandData.id);
        // Automatically >>
        for( let key in state.editBrandData){
            if (state.brands[index].hasOwnProperty(key)) {
                state.brands[index][key] = state.editBrandData[key];
            }
        }
        // Manually >
        // state.brands[index].name = state.editBrandData.name
        // state.brands[index].slug = state.editBrandData.slug
        // state.brands[index].logo = state.editBrandData.logo
    },
    DELETE_MULTI_BRAND(state,selectedBrands){
        state.brands = state.brands.filter( objectA => {
            return !selectedBrands.find(objectB => objectA.id === objectB.id)
        })
        state.multiSelected = [];
    },
    SET_IS_LOADING(state, payload){
        state.isLoading = payload
    },
    FETCH_BRANDS(state , brands){
        state.brands = brands
    },
    SET_ERRORS(state , errors){
        state.errors = errors
    },
    FILTER_DATA(state , payload){
        // state.filterString = payload
        for(let obj in payload){
            state.filterString[obj] = payload[obj]
        }
    },
    TOGGLE_MODAL(state, addModal = 'add'){
        if (addModal == "add") {
            state.addMeta.showModal = !state.addMeta.showModal
        } else {
            state.editMeta.showModal = !state.editMeta.showModal
        }
    } ,
    HANDLE_VIEW(state, addHandleView = true){
        if (addHandleView) {
            state.addMeta.isImageVisible = !state.addMeta.isImageVisible
        } else {
            state.editMeta.isImageVisible = !state.editMeta.isImageVisible
        }
    }
}
