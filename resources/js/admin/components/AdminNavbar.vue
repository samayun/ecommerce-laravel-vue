<template>
        <!-- Navbar -->
    <nav class="main-header navbar navbar-expand border-bottom mb-0"
    :class="getIsDark ? 'navbar-dark' : 'navbar-custom' ">
      <!-- Left navbar links -->
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" data-widget="pushmenu" to="/"><i class="fas fa-bars"></i></router-link>
        </li>
      </ul>
      <ul class="app-nav">
        <li class="app-search">
            <input class="app-search__input" type="search" placeholder="Search">
            <button class="app-search__button">
                <i class="fa fa-search"></i>
            </button>
        </li>
        <li class="app-search">
            <LanguegeSwitcher ></LanguegeSwitcher>
        </li>
        <!-- <li class="app-search">
            <router-link :to="{name:'Home'}" class="text-white">Visit Site</router-link>
        </li> -->
        <!-- User Menu-->
        <li class="dropdown list-unstyled">
            <router-link class="app-nav__item" to="#" data-toggle="dropdown" aria-label="Open Profile Menu"><i class="fa fa-globe fa-lg"></i></router-link>
            <ul class="dropdown-menu settings-menu dropdown-menu-right">
                <li>
                    <router-link class="dropdown-item" to="/admin/settings"><i class="fa fa-cog fa-lg"></i> Settings</router-link>
                </li>
                <li>
                     <label for="theme"> {{ getTheme == "dark" ? "Dark" : "Light" }} </label>
                     <i-switch @on-change="TOGGLE_THEME" name="theme" v-model="IsDark"> </i-switch>
                </li>
                <li>
                    <router-link class="dropdown-item" to="/admin/logout"><i class="fa fa-sign-out fa-lg"></i> Logout</router-link>
                </li>
            </ul>
        </li>

    </ul>
    </nav>
    <!-- /.navbar -->
</template>
<script>
import { mapGetters, mapMutations, mapState } from 'vuex'
import  LanguegeSwitcher from './LanguegeSwitcher'

export default {
    components: { LanguegeSwitcher},
    computed:{
        ...mapGetters('settingsStoreIndex',['getTheme', 'getIsDark']),
        IsDark: {
            get(){
                return this.getIsDark
            },
            set(value){
                this.TOGGLE_THEME
            }
        }
    },
    methods:{
        ...mapMutations('settingsStoreIndex',['TOGGLE_THEME'])
    },
    watch:{
        getIsDark(value){
            if (value) {
                console.log('DARK APPILED');

            }
        }
    }
}
</script>

<style >
.app-nav {
    -webkit-box-flex: 1;
    -ms-flex: 1 0 auto;
    flex: 1 0 auto;
}
.app-nav {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 0;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
}
.app-search {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-item-align: center;
    align-self: center;
    margin-right: 15px;
    padding: 10px 0;
}
.app-search__input {
    border: 0;
    padding: 5px 10px;
        padding-right: 10px;
    padding-right: 30px;
    border-radius: 2px;
    background-color: rgba(255, 255, 255, 0.8);
    -webkit-transition: background-color 0.3s ease;
    -o-transition: background-color 0.3s ease;
    transition: background-color 0.3s ease;
}
[type="search"] {
    outline-offset: -2px;
    -webkit-appearance: none;
}
button, input {
    overflow: visible;
}
input, button, select, optgroup, textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}
.app-search__button {
    position: absolute;
    right: 0;
    top: 10px;
    bottom: 10px;
    padding: 0 10px;
    border: 0;
    color: rgba(0, 0, 0, 0.8);
    background: none;
    cursor: pointer;
}
button, html [type="button"], [type="reset"], [type="submit"] {
    -webkit-appearance: button;
}
button, select {
    text-transform: none;
}
.app-nav__item {
    display: block;
    padding: 15px;
    line-height: 20px;
    color: #fff;
    -webkit-transition: background-color 0.3s ease;
    -o-transition: background-color 0.3s ease;
    transition: background-color 0.3s ease;
}
.main-header {
    border-bottom: 1px solid #dee2e6;
    z-index: 10;
}

/* Inside Content */

.app-content {
    margin-left: 2px;
}
.app-content {
    min-height: calc(100vh - 50px);
    /* margin-top: 50px; */
    padding: 30px;
    background-color: #E5E5E5;
    -webkit-transition: margin-left 0.3s ease;
    -o-transition: margin-left 0.3s ease;
    transition: margin-left 0.3s ease;
}

.app-title {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    background-color: #FFF;
    margin: -30px -30px 30px;
    padding: 20px 30px;
    -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}
.app-title h1 {
    margin: 0;
    font-size: 24px;
    font-weight: 400;
}

.tile {
    position: relative;
    background: #ffffff;
    border-radius: 3px;
    padding: 20px;
    -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
    margin-bottom: 30px;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}
.user .user-tabs {
    margin-top: 20px;
}
.flex-column {
    -webkit-box-orient: vertical !important;
    -webkit-box-direction: normal !important;
    -ms-flex-direction: column !important;
    flex-direction: column !important;
}
.nav-tabs {
    border-bottom: 1px solid #dee2e6;
}
.user .user-tabs .nav-link.active {
    border-left-color: #009688;
    border-bottom: 0;
}
.user .user-tabs .nav-link {
    border-left: 3px solid transparent;
        border-left-color: transparent;
    padding: 12px 15px;
    border-bottom: 0;
    font-size: 15px;
    border-radius: 0;
}
.nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link {
    color: #495057;
    background-color: #FFF;
    border-color: #dee2e6 #dee2e6 #FFF;
        border-bottom-color: rgb(255, 255, 255);
        border-left-color: rgb(222, 226, 230);
}
.tile .tile-title {
    margin-top: 0;
    margin-bottom: 20px;
    font-size: 1.5rem;
}


</style>
