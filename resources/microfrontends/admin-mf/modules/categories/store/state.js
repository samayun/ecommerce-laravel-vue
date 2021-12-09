import {Form} from 'vform'

export default {
    categories : [],
    allcategories:[],
    subcategories : [],
    addMeta: {
        showModal: false,
        isImageVisible: false
    },
    addData: new Form({
        name: "",
        icon:""
    }),

    editMeta: {
        isImageVisible: false,
        showModal: false,
        isEditing: false
    },
    editData: new Form({
        id: '',
        name: "",
        icon:""
    }),
    errors: {},
    multiSelected: [],

    isEditingItem: false,

    filterString:{
        page: 1,
        perPage : 10,
        orderBy: 'created_at',
        sortBy: 'desc',
        q: "",
        total: 0
    },
    subMeta:{
        multiSelected: []
    },
    addSubMeta:{
        showModal: false,
    },
    addSubData:new Form({
        name:"",
        slug:"",
        description:"",
        parent_id : ""
     }),
    editSubMeta:{
        showModal: false,
    },
    editSubData:new Form({
        id:"",
        name:"",
        slug:"",
        description:"",
        parent_id : ""
     })
}
