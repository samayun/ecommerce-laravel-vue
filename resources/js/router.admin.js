import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import AdminHomePage from './admin/pages/AdminHomePage.vue'

const defaultRoutes = [
    {
        path: '/admin',
        name: 'AdminHome',
        title: 'Home',
        component: AdminHomePage
    }
]


/**
 * IMPORT ALL ROUTES DYNAMICALLY FROM THE MODULES FOLDERS....
*/

var allRoutes = []
import camelCase from 'lodash/camelCase'
const requireModule = require.context('./admin/modules', true, /\.js$/)
const importedRoutes = []

requireModule.keys().forEach(fileName => {
    let str = fileName.split('/')
    str = str[1]
    if (fileName === `./${str}/router/index.js`){
        const moduleName = camelCase(
            fileName.replace(/(\.\/|\.js)/g, '')
        )
        importedRoutes.push(...requireModule(fileName).default)
    }
})

/**
 * CONCAT ALL THE IMPORTED ROUTES WITH MAIN ROUTES...
 */
allRoutes = allRoutes.concat(defaultRoutes , importedRoutes)
const routes = allRoutes

export default new VueRouter({
    mode: 'history',
    routes
})