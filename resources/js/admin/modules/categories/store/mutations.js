export default {
    CREATE_CATEGORY(state , category){
        state.categories.unshift(category)
    },
    FETCH_CATEGORIES(state , categories){
        state.categories = categories
    },
    FILTER_DATA(state , payload){
        // state.filterString = payload
        for(let obj in payload){
            state.filterString[obj] = payload[obj]
        }
    },
    GET_EDIT_DATA(state , payload){
        state.editData =  new Form(payload)
    },
    UPDATE_CATEGORY(state ){
        let index = state.categories.findIndex(item => item.id === state.editData.id);
        state.categories[index].name = state.editData.name
        state.categories[index].icon = state.editData.icon
    },
    DELETE_CATEGORY(state , category){
        let index= state.categories.findIndex(item => item.id === category.id);
        state.categories.splice(index , 1)
    },
    DELETE_MULTI_CATEGORY(state , multiSelectedCat){
        state.categories = state.categories.filter( objectA => {
            return !multiSelectedCat.find(objectB => objectA.id === objectB.id)
        })
        // state.categories = arr;
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
    },
    HANDLE_VIEW(state, addHandleView = true){
        if (addHandleView) {
            state.isImageVisible = !state.isImageVisible
        } else {
            state.isEditImageVisible = !state.isEditImageVisible
        }
    }
}
