<template>
<div>
  <PopularCategories/>
</div>
</template>
<script>

export default {
    components: {
        PopularCategories: () => import(/* webpackChunkName: "Chunks/Site-PopularCategories" */ '../comonents/Category/PopularCategories')
    }
}
</script>
