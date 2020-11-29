const routes = [
    {
        path: 'brand/:slug',
        name: 'Brand',
        component: () => import(/* webpackChunkName: "Chunks/Site/Router/ProductsByBrand-slug"*/ '../pages/ProductsByBrand.vue'),
        title: 'This is single Brand page',
        meta: {
            guest : true,
            allowedUserType: ['User']
        }

    }
]
export default routes
