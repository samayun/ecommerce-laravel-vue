export default {
    CREATE_BRAND(state,brand){
        state.brands.unshift(brand)
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
