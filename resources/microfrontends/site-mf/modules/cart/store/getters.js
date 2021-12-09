export default {
   cartsArray : state => {
    //    Object to Array Conversion
    let cartsArray = [];
    let carts = state.cartData.carts;

    for (const key in carts) {
        if (carts.hasOwnProperty(key)) {
            cartsArray.push(carts[key]);
        }
    }
    return cartsArray
   }
}
