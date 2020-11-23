const routes = [
    {
        path: 'brand/:slug',
        name: 'Brand',
        component: () => import(/* webpackChunkName: "Chunks/Site-ProductsByBrand-slug"*/ '../pages/ProductsByBrand.vue'),
        title: 'This is single Brand page',
        meta: {
            guest : true,
            allowedUserType: ['User']
        }

    }
]
export default routes
