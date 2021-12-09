<style>
 .demo-spin-icon-load{
     animation: ani-demo-spin 1s linear infinite;
 }

 @keyframes ani-demo-spin {
     from{transform: rotate(0deg);}
     50%{transform: rotate(180deg);}
     to{transform: rotate(360deg);}
 }
 .demo-spin-col{
     height: 100px;
     position: absolute;
     border: 1px solid #eeeeee;
 }

</style>

<template>
    <Spin v-if="show">
        <Icon type="ios-loading" size="50" class="demo-spin-icon-load"></Icon>
        <h2 > Loading.....</h2>
    </Spin>
</template>

<script>
export default {
    name:"Loading",
    props: [ 'show' ]
}
</script>