/**
 * TEST MODULE ROUTES. THIS IS A CUSTOM ROUTES.
 * A TEST SET UP...
 * ALL TEAM MEMBERS SHOULD JUST COPY AND PASTE TO EXTENDS THE APP
 */

const routes = [
    {
        path: 'categories',
        name: 'Categories',
        component: () => import(/* webpackChunkName: "Chunks/Admin-Categories" */'../pages/categories.vue'),
        title: 'This is a test page',
        meta: {
            guest : false,
            allowedUserType: ['Admin']
        }

    }
]

export default routes
