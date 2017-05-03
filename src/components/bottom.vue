<template>
  <mu-paper class="bottom-navigation">
    <mu-bottom-nav :value="bottomNav" shift @change="handleChange">
      <mu-bottom-nav-item value="热映" title="热映" icon="ondemand_video" to="/index"/>
      <mu-bottom-nav-item value="音乐" title="音乐" icon="music_note"/>
      <mu-bottom-nav-item value="添加" title="添加" icon="add_circle" />
      <mu-bottom-nav-item value="搜索" title="搜索" icon="search" to="/search"/>
      <mu-bottom-nav-item value="我的" title="我的" icon="account_circle" to="/user"/>
    </mu-bottom-nav>
  </mu-paper>
</template>

<script>
export default {
  name: 'buttom',
  data () {
    return {
      bottomNav: '热映',
      bottomNavColor: '热门电影'
    }
  },
  methods: {
    handleChange (val) {
      this.bottomNav = val
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.bottom-navigation
  position: fixed
  bottom: 0
  width: 100%
</style>
