const routes = [
    {
        path: '/cart',
        name: 'Cart',
        component: () => import(/* webpackChunkName: "Chunks/Site/Router/Carts"*/ '../pages/cart.vue'),
        title: 'This is cart page',
        meta: {
            guest : true,
            allowedUserType: ['User']
        }

    }
]

export default routes
