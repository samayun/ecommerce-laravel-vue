<template>
    <Page
        :total="paginatedMetaData.total"
        :current="paginatedMetaData.current_page"
        @on-change="changePage"
        show-total
        show-elevator
        show-sizer 
        prev-text="Previous" 
        next-text="NeXT"/>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
       ...mapGetters("categoriesStoreIndex",['paginatedMetaData'])
   },
   
}
</script>