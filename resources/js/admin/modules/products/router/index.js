/**
 * TEST MODULE ROUTES. THIS IS A CUSTOM ROUTES.
 * A TEST SET UP...
 * ALL TEAM MEMBERS SHOULD JUST COPY AND PASTE TO EXTENDS THE APP
 */

const routes = [
    {
        path: 'products',
        name: 'Products',
        component: () => import('../pages/products.vue'),
        title: 'This is admijn product page',
        meta: {
            guest : false,
            allowedUserType: ['Admin']
        }
    },
    {
        path: 'products/create',
        name: 'Create Products',
        component: () => import('../pages/create.vue'),
        title: 'This is create product page'
    },
    {
        path: 'products/edit/:id',
        name: 'Edit Products',
        component: () => import('../pages/edit.vue'),
        title: 'This is Edit product page'
    }
]

export default routes
