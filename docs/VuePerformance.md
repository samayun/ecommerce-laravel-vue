# Performance 

Vue.config.performance = process.env.NODE_ENV !== "production";

# Disabling reactivity Object.freeze():

data: function () {
      return {
        items: Object.freeze(messagesService.getMessages())
      }
    },
# Lazy Loading
  `item : () => import(/* webpackChunkName: "Chunks/Items" */  './Items.vue)`;


 # Async & Dynamic Component Loading
`const items = {
    components: () => import(/* webpackChunkName: "Chunks/Items" */  './Items.vue),
    loading,
    error
}

`

https://github.com/sitepoint-editors/shopping-cart-async
