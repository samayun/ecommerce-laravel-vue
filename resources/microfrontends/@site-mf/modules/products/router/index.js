const routes = [
    {
        path: '/products',
        name: 'Products',
        component: () => import(/* webpackChunkName: "Chunks/Site/Router/Products"*/ '../pages/products.vue'),
        title: 'This is  products page',
        meta: {
            guest : true,
            allowedUserType: ['User']
        }

    },
    {
        path: '/product/:slug',
        name: 'Single Product',
        component: () => import(/* webpackChunkName: "Chunks/Site/Router/Product-slug"*/ '../pages/single.vue'),
        title: 'This is single product page',
        meta: {
            guest : true,
            allowedUserType: ['User']
        }

    }
]
export default routes
