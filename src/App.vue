<template>
  <div id="app">
    <login-layout v-if="!this.$store.getters['auth/auth']"></login-layout>
    <default-layout v-else></default-layout>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import LoginLayout from '@/components/layout/LoginLayout.vue'
import DefaultLayout from '@/components/layout/DefaultLayout.vue'

@Component({
  components: {
    LoginLayout,
    DefaultLayout
  }
})
export default class App extends Vue {
}
</script>

<style lang="scss">
</style>
