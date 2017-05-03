<template>
  <div id="app">
    <router-view></router-view>
    <bottom-navbar></bottom-navbar>
  </div>
</template>

<script>
import bottom from './components/bottom'
export default {
  name: 'app',
  components: {
    'bottom-navbar': bottom
  }
}
</script>
<style>
body{
  padding: 0;
  margin: 0;
}
</style>
