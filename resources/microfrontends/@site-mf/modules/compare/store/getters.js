export default {
   comparesArray : state => {
    //    Object to Array Conversion
    let comparesArray = [];
    let compares = state.compareData.compares;

    for (const key in compares) {
        if (compares.hasOwnProperty(key)) {
            comparesArray.push(compares[key]);
        }
    }
    return comparesArray
   }
}
