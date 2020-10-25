<template>
    <Page
        :total="filterString.total"
        :current="filterString.page"
        :page-size="filterString.perPage"
        @on-change="changePaginatedPage"
        @on-page-size-change="changePerPaginatedPage"
        show-total
        show-elevator
        show-sizer
        prev-text="Previous"
        next-text="NeXT"/>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    computed: {
       ...mapGetters("categoriesStoreIndex",['filterString']),
   },
   methods:{
       ...mapActions("categoriesStoreIndex" , ['changePaginatedPage','changePerPaginatedPage'])
   }
}
</script>
