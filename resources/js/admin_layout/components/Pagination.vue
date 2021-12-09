<template>
    <Page
        :total="meta.total"
        :current="meta.page"
        :page-size="meta.perPage"
        @on-change="changePaginatedPage"
        @on-page-size-change="changePaginatedPerPage"
        show-total
        show-elevator
        show-sizer
        class="pagination"
        prev-text="Previous"
        next-text="NeXT"/>
</template>
<script>
    export default {
        props: {
            meta : {
                type: Object ,
                required : true
            },
            changePaginatedPage : {
                type: [Object , Function]
            },
            changePaginatedPerPage : {
                type: [Object , Function]
            },
        }
    }
</script>
