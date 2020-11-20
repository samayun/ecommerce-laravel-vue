<template>
    <div class="page-wrapper">
        <Header />
        <main class="main">
           <router-view></router-view>
        </main>
        <!-- <Footer /> -->
    </div>
</template>
<script>

export default {
    components:{
        Header: () => import(/* webpackChunkName: "Chunks/Main-App-Header" */ './Header' ),
        Footer: () => import(/* webpackChunkName: "Chunks/Main-App-Footer" */ './Footer' ),
    }
}
</script>
