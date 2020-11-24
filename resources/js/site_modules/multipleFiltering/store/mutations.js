export default {
    select(state, option) {
        if (state.brand && state.brand != "") {
            state.filter['brand'] = option
        }else{
            state.filter['category'] = option
        }
    }
}
