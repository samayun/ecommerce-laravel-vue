export default {
    CREATE_CATEGORY(state , category){
        state.categories.unshift(category)
    },
    CREATE_SUB_CATEGORY(state , sub_category){
        let data = state.categories.find(item => item.id === sub_category.parent_id)
        // state.categories[index].subcategories.unshift(sub_category);
        sub_category.category = data;
        state.subcategories.unshift(sub_category); //added insubcategories list
    },
    FETCH_CATEGORIES(state , categories){
        state.categories = categories
    },
    FETCH_SUB_CATEGORIES(state,subcategories){
        state.subcategories = subcategories
    },
    FILTER_DATA(state , payload){
        // state.filterString = payload
        for(let obj in payload){
            state.filterString[obj] = payload[obj]
        }
    },
    GET_EDIT_DATA(state , payload){
        let defaultEditData = state.editData ;
        for (const key in state.editData) {
            if (payload.hasOwnProperty(key)) {
                defaultEditData[key] = payload[key]
            }
        }
        state.editData =  new Form(defaultEditData)
    },
    GET_SUB_EDIT_DATA(state , payload){
        // payload.category = {}
        let defaultSubEditData = {"id":"","name":"","slug":"","description":"","parent_id": null }
        for (const key in defaultSubEditData) {
            if (payload.hasOwnProperty(key)) {
                defaultSubEditData[key] = payload[key]
            }
        }
        state.editSubData =  new Form(defaultSubEditData)
    },
    UPDATE_CATEGORY(state ){
        let index = state.categories.findIndex(item => item.id === state.editData.id);
        // Automatically >>
        for( let key in state.editData){
            if (state.categories[index].hasOwnProperty(key)) {
                state.categories[index][key] = state.editData[key];
            }
        }
    },
    UPDATE_SUB_CATEGORY(state ){
        // I will make mixin : getByIdAndUpdate(categories = [] , keyId = id ) @return void;
        let index = state.subcategories.findIndex(item => item.id === state.editSubData.id);
        // Automatically >>
        for( let key in state.editSubData){
            if (state.subcategories[index].hasOwnProperty(key)) {
                state.subcategories[index][key] = state.editSubData[key];
            }
        }
        let goalId = state.editSubData.parent_id;
        state.subcategories[index]['category'] = state.categories.find(i => i.id == goalId)
    },
    DELETE_SUB_CATEGORY(state , category){
        let index= state.subcategories.findIndex(item => item.id === category.id);
        state.subcategories.splice(index , 1)
    },
    DELETE_CATEGORY(state , category){
        let index= state.categories.findIndex(item => item.id === category.id);
        state.categories.splice(index , 1);
        // DELETE Foreign KEY

    },
    DELETE_MULTI_CATEGORY(state , multiSelectedCat){
        state.categories = state.categories.filter( objectA => {
            return !multiSelectedCat.find(objectB => objectA.id === objectB.id)
        })
        state.multiSelected = [];
    },
    DELETE_MULTI_SUB_CATEGORY(state , selectedItems){
        state.subcategories = state.subcategories.filter( objectA => {
            return !selectedItems.find(objectB => objectA.id === objectB.id)
        })

        state.subMeta.multiSelected = []
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
