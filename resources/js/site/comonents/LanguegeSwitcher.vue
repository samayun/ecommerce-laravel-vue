<template>
<li>
<div class="header-dropdown d-flex">
       <a href="">  <img :src="'/storage/flags/'+locale+'.png'" width="25px" class="mr-2" /> {{ locale | showable | capitalize }} </a>
        <div class="header-menu">
            <ul>
                <!-- <select v-model="current_languege"> </select> -->
                <li
                    v-for="(lang,i) in langArray"
                    :key="`lang${i}`"
                    :value="lang"
                    class="d-flex"
                    @click="changeLocale(lang)"
                >
                <img :src="'/storage/flags/'+lang+'.png'" :alt="locale" class="w-25 p-2" />
                {{ $t(lang) | capitalize }} </li>

            </ul>
        </div>
    </div>
</li>
</template>


<script>
import { mapActions, mapState } from 'vuex'
import { languages } from '../../i18n'
export default {
  data() {
    return {
      langArray: languages
    }
  },
  filters:{
      showable(text){
        return text == "bn" ? "বাংলা" : "English"
      },
      capitalize(text){
        return text.toUpperCase()
      }
  },
  methods:{
      ...mapActions("settingsStoreIndex",["changeLocale"])
  },
  computed: {
    ...mapState("settingsStoreIndex",["locale"])
  }
}
</script>
