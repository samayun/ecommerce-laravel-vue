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
        path: "/login",
        name: "Login",
        title: "Login",
        component: () =>
            import(
                /* webpackChunkName: "Chunks/Site/Router/Login" */ "./layout/components/Login.vue"
            )
    },
    {
        path: "/",
        name: "Home",
        title: "Home",
        component: () =>
            import(
                /* webpackChunkName: "Chunks/Site/HomePageRouteContainer" */ "./layout/pages/HomePage.vue"
            ),
        children: [
            {
                path: "/",
                name: "Dashboard",
                component: () =>
                    import(
                        /* webpackChunkName: "Chunks/Site/Router/HomeDashboard" */ "./layout/pages/Dashboard.vue"
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
                /* webpackChunkName: "Chunks/Site/404" */ "./layout/pages/NotFound.vue"
            )
    }
];
// const routes = allRoutes.concat(defaultRoutes , importedRoutes)

export default new VueRouter({
    mode: "history",
    routes: defaultRoutes
});
