import camelCase from "lodash/camelCase";
const requireModule = require.context("./", true, /\.js$/);
const modules = {};

requireModule.keys().forEach(fileName => {
    let str = fileName.split("/");
    str = str[1];

    if (fileName === `./${str}/store/index.js`) {
        // filter fullstops and extension
        // and return a camel-case name for the file
        const moduleName = camelCase(fileName.replace(/(\.\/|\.js)/g, ""));
        console.log(moduleName);

        // create a dynamic object with all modules
        modules[moduleName] = {
            // add namespace here
            namespaced: true,
            ...requireModule(fileName).default
            // if you have exported the object with name in the module `js` file
            // e.g., export const name = {};
            // uncomment this line and comment the above
            // ...requireModule(fileName)[moduleName]
        };
    }
});
export default modules;
