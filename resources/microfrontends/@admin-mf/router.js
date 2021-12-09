import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

/**
 * IMPORT ALL ROUTES DYNAMICALLY FROM THE MODULES FOLDERS....
 */

var allRoutes = [];
import camelCase from "lodash/camelCase";
const requireModule = require.context("./modules", true, /\.js$/);
const importedRoutes = [];

requireModule.keys().forEach(fileName => {
    let str = fileName.split("/");
    str = str[1];
    if (fileName === `./${str}/router/index.js`) {
        const moduleName = camelCase(fileName.replace(/(\.\/|\.js)/g, ""));
        importedRoutes.push(...requireModule(fileName).default);
    }
});

/**
 * CONCAT ALL THE IMPORTED ROUTES WITH MAIN ROUTES...
 */

const defaultRoutes = [
    {
        path: "/admin/login",
        name: "AdminLogin",
        title: "Admin Login",
        component: () =>
            import(
                /* webpackChunkName: "Chunks/Admin/Login" */ "./layout/pages/AdminLogin.vue"
            )
    },
    {
        path: "/admin",
        name: "AdminHome",
        title: "Home",
        component: () =>
            import(
                /* webpackChunkName: "Chunks/Admin/Home" */ "./layout/pages/AdminHomePage.vue"
            ),
        children: [
            {
                path: "/",
                name: "AdminHomeDashboard",
                component: () =>
                    import(
                        /* webpackChunkName: "Chunks/Admin/Dashboard" */ "./layout/pages/AdminHomeDashboard.vue"
                    ),
                title: "This is a test page"
            },
            ...importedRoutes
        ]
    },
    {
        path: "*",
        name: "404",
        component: () =>
            import(
                /* webpackChunkName: "Chunks/Admin/404" */ "./layout/pages/NotFound.vue"
            )
    }
];
// const routes = allRoutes.concat(defaultRoutes , importedRoutes)

export default new VueRouter({
    mode: "history",
    routes: defaultRoutes
});
