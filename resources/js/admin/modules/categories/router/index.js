/**
 * TEST MODULE ROUTES. THIS IS A CUSTOM ROUTES. 
 * A TEST SET UP... 
 * ALL TEAM MEMBERS SHOULD JUST COPY AND PASTE TO EXTENDS THE APP
 */
import categories from '../pages/categories.vue'
const routes = [
    {
        path: '/admin/categories',
        name: 'Categories',
        component: categories,
        title: 'This is a test page',
        meta: {
            guest : false,
            allowedUserType: ['Admin']
        }
        
    }
]

export default routes