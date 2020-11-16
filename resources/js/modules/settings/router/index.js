/**
 * TEST MODULE ROUTES. THIS IS A CUSTOM ROUTES.
 * A TEST SET UP...
 * ALL TEAM MEMBERS SHOULD JUST COPY AND PASTE TO EXTENDS THE APP
 */

const routes = [
    {
        path: 'settings',
        name: 'Settings',
        component: () => import(/* webpackChunkName: "Chunks/Admin-Settings" */ '../pages/settings.vue'),
        title: 'This is settings page',
        meta: {
            guest : false,
            allowedUserType: ['Admin']
        }

    }
]

export default routes
