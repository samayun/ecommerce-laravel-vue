const routes = [
    {
        path: '/wishlists',
        name: 'Wishlist',
        component: () => import(/* webpackChunkName: "Chunks/Site/Router/Wishlist"*/ '../pages/wishlists.vue'),
        title: 'This is wishlist page',
        meta: {
            guest : true,
            allowedUserType: ['User']
        }

    }
]

export default routes
