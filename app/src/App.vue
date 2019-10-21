<template>
  <div id="app">
    <app-header>
    </app-header>
    <router-view/>
  </div>
</template>

<script>

import AppHeader from '@/views/AppHeader'

export default {
  name: 'App',
  components: {
    AppHeader
  },
  data () {
    return {
    }
  },
  created () {
    this.$store.commit('init')
  },
  mounted () {
  },
}
</script>

<style>
@import './assets/style/layout.css';
@import './assets/style/text.css';
@import './assets/style/form.css';
</style>
