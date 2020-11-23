<template>
 <div>Hello</div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
 computed:{
     ...mapActions("productsStoreIndex",["getProduct"])
 }
}
</script>
