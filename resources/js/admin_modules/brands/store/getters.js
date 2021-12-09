export default {
    getAllBrand          : state => state.brands ,
    filterString         : state => state.filterString,
    getFilteredURLString : state => {
        let {page , perPage, orderBy, sortBy, q} = state.filterString;
        let queryString = "";
        if (q != "") {
           queryString = `page=1&q=${q}`
        } else {
           queryString = `page=${page}`
        }
        perPage !="" || perPage == undefined ? queryString += `&perPage=${perPage}` : 10;
        orderBy !="" ? queryString += `&orderBy=${orderBy}` : null;
        sortBy !="" ? queryString += `&sortBy=${sortBy}` : null;

        return queryString;
    }
}
