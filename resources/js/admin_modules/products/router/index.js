/**
 * TEST MODULE ROUTES. THIS IS A CUSTOM ROUTES.
 * A TEST SET UP...
 * ALL TEAM MEMBERS SHOULD JUST COPY AND PASTE TO EXTENDS THE APP
 */

const routes = [
    {
        path: 'products',
        name: 'Products',
        component: () => import(/* webpackChunkName: "Chunks/Admin-Products" */'../pages/products.vue'),
        title: 'This is admijn product page',
        meta: {
            guest : false,
            allowedUserType: ['Admin']
        }
    },
    {
        path: 'products/create',
        name: 'CreateProducts',
        component: () => import(/* webpackChunkName: "Chunks/Admin-Products-Create" */'../pages/create.vue'),
        title: 'This is create product page'
    },
    {
        path: 'products/edit/:id',
        name: 'EditProducts',
        component: () => import(/* webpackChunkName: "Chunks/Admin-Products-Edit-:id" */ '../pages/edit.vue'),
        title: 'This is Edit product page'
    },
    {
        path: 'products/view/:id',
        name: 'EditProducts',
        component: () => import(/* webpackChunkName: "Chunks/Admin-Products-View-:id" */ '../pages/view.vue'),
        title: 'This is View product page'
    }
]

export default routes
