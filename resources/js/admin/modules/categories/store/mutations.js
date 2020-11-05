import {Form} from 'vform'
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
    TOGGLE_MODAL(state, type = 'cat-add'){
        if (type == 'cat-add') {
            state.addMeta.showModal = !state.addMeta.showModal
        }
        else if (type == 'cat-edit') {
            state.editMeta.showModal = !state.editMeta.showModal
        }
        else if (type == 'sub-add') {
            state.addSubMeta.showModal = !state.addSubMeta.showModal
        }
        else if (type == 'sub-edit') {
            state.editSubMeta.showModal = !state.editSubMeta.showModal
        }
    },

    SET_ERRORS(state , errors){
        state.errors = errors
    },
    HANDLE_VIEW(state, addHandleView = true){
        if (addHandleView) {
            state.addMeta.isImageVisible = !state.addMeta.isImageVisible
        } else {
            state.editMeta.isImageVisible = !state.editMeta.isImageVisible
        }
    }
}
