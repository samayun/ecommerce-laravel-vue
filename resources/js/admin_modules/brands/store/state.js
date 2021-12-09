import { Form } from "vform";

export default {
    brands: [],
    addBrandData : new Form({
        name: "",
        logo:""
    }),
    addMeta: {
        showModal: false,
        isImageVisible: false
    },
    editBrandData: new Form({
        id: "",
        name:"",
        slug:"",
        logo:""
    }),
    editMeta: {
        isImageVisible: false,
        showModal: false
    },
    isLoading: false,
    filterString:{
        page: 1,
        perPage : 10,
        orderBy: 'created_at',
        sortBy: 'desc',
        q: "",
        total: 0
    },
    multiSelected: []
}
