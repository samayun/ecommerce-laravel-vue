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

    }
]

export default routes
