<template>
    <Select v-model="current_languege">
        <Option
            v-for="(lang,i) in langArray"
            :key="`lang${i}`"
            :value="lang"
           > {{lang}} </Option>
    </Select>
</template>

<script>
import { languages } from '../../i18n'
export default {
  data() {
    return {
      langArray: languages
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
