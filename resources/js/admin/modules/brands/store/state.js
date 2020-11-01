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
    editBrand: new Form({
        id: "",
        name:"",
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
    }
}
