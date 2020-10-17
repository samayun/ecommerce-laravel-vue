import axios from "axios";

export default {
    methods:{
        async callApi(method , url , data){
            try {
                return await axios({method , url , data});

            } catch (error) {
                return error.response
            }
        }
    }
}