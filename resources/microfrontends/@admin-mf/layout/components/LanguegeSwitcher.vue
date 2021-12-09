<template>
<span class="d-flex">
    <Avatar :src="'/storage/flags/'+current_languege+'.png'" class="w-75 mr-1" shape="square" />
    <Select v-model="current_languege">
        <Option
            v-for="(lang,i) in langArray"
            :key="`lang${i}`"
            :value="lang"
           > <Avatar :src="'/storage/flags/'+lang+'.png'" :alt="current_languege" size="small" shape="square"/>
           {{ $t(lang) | capitalize }} </Option>
    </Select>
</span>
</template>

<script>
import { languages } from '../../i18n'
export default {
  data() {
    return {
      langArray: languages
    }
  },
  filters:{
      capitalize(text){
        return text.toUpperCase()
      }
  },
  computed: {
    current_languege: {
      get: function() {
        return this.$store.state.settingsStoreIndex.locale
      },
      set: function(newVal) {
        this.$store.dispatch('settingsStoreIndex/changeLocale', newVal)
      }
    }
  }
}
</script>
