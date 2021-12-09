import {Form} from 'vform'
export default {
    getAllCategory       : state => state.categories,
    getAllSubCategory    : state => state.subcategories,
    paginatedMetaData    : state => state.paginationData,
    isImageVisible       : state => state.addMeta.isImageVisible,
    isEditImageVisible   : state => state.editMeta.isImageVisible,
    filterString         : state => state.filterString,
    getFilteredURLString : state => {
        let {page,perPage,orderBy,sortBy,q} = state.filterString;
        let queryString = "";
        if (q != "") {
           queryString = `page=1&q=${q}`
        } else {
           queryString = `page=${page}`
        }
        (perPage !="") ? queryString += `&perPage=${perPage}` : null;
        (orderBy !="") ? queryString += `&orderBy=${orderBy}` : null;
        (sortBy !="") ? queryString += `&sortBy=${sortBy}` : null;

        return queryString;
    }
}
