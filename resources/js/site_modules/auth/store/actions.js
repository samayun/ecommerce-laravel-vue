export default {
    async doLogout({commit}){
        try {
            let res = await axios.post('/logout',{},{
                headers : {
                    Authorization :  window.Laravel.csrfToken
                }
            });
            if (res.status == 200 || res.status == 204) {
                window.Laravel.csrfToken = res.data.csrfToken;
                window.axios.defaults.headers.common['X-CSRF-TOKEN']  = res.data.csrfToken
                commit('changeState',{ user : false });
                // window.location.reload();
                $awn.info(res.data.message)
            }
        } catch (error) {
            console.log(error.response.data);
        }
    }
}
