/**
 * TEST MODULE ROUTES. THIS IS A CUSTOM ROUTES.
 * A TEST SET UP...
 * ALL TEAM MEMBERS SHOULD JUST COPY AND PASTE TO EXTENDS THE APP
 */

const routes = [
    {
        path: 'brands',
        name: 'Brands',
        component: () => import(/* webpackChunkName: "Chunks/Admin-Brands" */'../pages/brands.vue'),
        title: 'This is brand page',
        meta: {
            guest : false,
            allowedUserType: ['Admin']
        }

    }
]

export default routes
