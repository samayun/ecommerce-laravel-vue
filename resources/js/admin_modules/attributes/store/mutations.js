export default {
    CREATE_ATTRIBUTE(state , attribute){
        state.attributes.unshift(attribute)
    },
    CREATE_SUB_ATTRIBUTE(state , sub_category){
        let data = state.attributes.find(item => item.id === sub_category.parent_id)
        // state.attributes[index].values.unshift(sub_category);
        sub_category.attribute = data;
        state.values.unshift(sub_category); //added insubcategories list
    },
    FETCH_ATTRIBUTES(state , attributes){
        state.attributes = attributes
    },
    FETCH_VALUES(state,values){
        state.values = values
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
        let defaultSubEditData = {"id":"","name":"","slug":"",parent_id: null }
        for (const key in defaultSubEditData) {
            if (payload.hasOwnProperty(key)) {
                defaultSubEditData[key] = payload[key]
            }
        }
        state.editSubData =  new Form(defaultSubEditData)
    },
    UPDATE_ATTRIBUTE(state ){
        let index = state.attributes.findIndex(item => item.id === state.editData.id);
        // Automatically >>
        for( let key in state.editData){
            if (state.attributes[index].hasOwnProperty(key)) {
                state.attributes[index][key] = state.editData[key];
            }
        }
    },
    UPDATE_SUB_ATTRIBUTE(state ){
        // I will make mixin : getByIdAndUpdate(attributes = [] , keyId = id ) @return void;
        let index = state.values.findIndex(item => item.id === state.editSubData.id);
        // Automatically >>
        for( let key in state.editSubData){
            if (state.values[index].hasOwnProperty(key)) {
                state.values[index][key] = state.editSubData[key];
            }
        }
        let goalId = state.editSubData.parent_id;
        state.values[index]['attribute'] = state.attributes.find(i => i.id == goalId)
    },
    DELETE_SUB_ATTRIBUTE(state , attribute){
        let index= state.values.findIndex(item => item.id === attribute.id);
        state.values.splice(index , 1)
    },
    DELETE_ATTRIBUTE(state , attribute){
        let index= state.attributes.findIndex(item => item.id === attribute.id);
        state.attributes.splice(index , 1);
        // DELETE Foreign KEY

    },
    DELETE_MULTI_ATTRIBUTE(state , multiSelectedCat){
        state.attributes = state.attributes.filter( objectA => {
            return !multiSelectedCat.find(objectB => objectA.id === objectB.id)
        })
        state.multiSelected = [];
    },
    DELETE_MULTI_SUB_ATTRIBUTE(state , selectedItems){
        state.values = state.values.filter( objectA => {
            return !selectedItems.find(objectB => objectA.id === objectB.id)
        })

        state.subMeta.multiSelected = []
    },
    TOGGLE_MODAL(state, type = 'att-add'){
        if (type == 'att-add') {
            state.addMeta.showModal = !state.addMeta.showModal
        }
        else if (type == 'att-edit') {
            state.editMeta.showModal = !state.editMeta.showModal
        }
        else if (type == 'sub-add') {
            state.addSubMeta.showModal = !state.addSubMeta.showModal
        }
        else if (type == 'sub-edit') {
            state.editSubMeta.showModal = !state.editSubMeta.showModal
        }
    }
}
