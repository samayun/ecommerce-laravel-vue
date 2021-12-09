export default {
   wishlistsArray : state => {
    //    Object to Array Conversion
    let wishlistsArray = [];
    let wishlists = state.wishlistData.wishlists;

    for (const key in wishlists) {
        if (wishlists.hasOwnProperty(key)) {
            wishlistsArray.push(wishlists[key]);
        }
    }
    return wishlistsArray
   }
}
