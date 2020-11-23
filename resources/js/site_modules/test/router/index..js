const routes = [
    {
        path: 'product/:slug',
        name: 'Product',
        component: () => import(/* webpackChunkName: "Chunks/Site-Product-slug"*/ '../pages/main.vue'),
        title: 'This is single product page',
        meta: {
            guest : true,
            allowedUserType: ['User']
        }

    }
]
export default routes
