const routes = [
    {
        path: '/compare',
        name: 'Compare',
        component: () => import(/* webpackChunkName: "Chunks/Site/Router/Compare"*/ '../pages/compare.vue'),
        title: 'This is compare page',
        meta: {
            guest : true,
            allowedUserType: ['User']
        }

    }
]

export default routes
