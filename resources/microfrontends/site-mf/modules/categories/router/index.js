const routes = [
    {
        path: 'category/:slug',
        name: 'Product By Category',
        component: () => import(/* webpackChunkName: "Chunks/Site/Router/Category-slug"*/ '../pages/ProductByCategory.vue'),
        title: 'This is settings page',
        meta: {
            guest : true,
            allowedUserType: ['User']
        }

    }
]

export default routes
