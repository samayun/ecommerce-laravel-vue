/**
 * TEST MODULE ROUTES. THIS IS A CUSTOM ROUTES. 
 * A TEST SET UP... 
 * ALL TEAM MEMBERS SHOULD JUST COPY AND PASTE TO EXTENDS THE APP
 */
import tags from '../pages/tags.vue'
const routes = [
    {
        path: '/tags',
        name: 'Tag',
        component: tags,
        title: 'This is a test page',
        meta: {
            guest : true,
            allowedUserType: ['All']
        }
        
    }
]

export default routes