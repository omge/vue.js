<template>
<div class="container">
  <mu-text-field hintText="书名" class="" :underlineShow="true" v-model="name" @change="search"/>
  <section>
    <div class="music-result-empty" v-if="searchBookResult.length == 0">
    </div>
    <div class="music-result-list" v-else>
      <div class="music-result-list-item" v-for="musics in searchBookResult">
        <div>
          <img :src="musics.image">
        </div>
        <div><p>{{ musics.author[0] }}</p></div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'hello',
  data () {
    return {
      name: '',
      src: ''
    }
  },
  created () {
    this.emptyMusic()
  },
  computed: {
    ...mapState(['searchBookResult'])
  },
  methods: {
    search () {
      this.$store.dispatch('get_book', {
        name: this.name
      })
    },
    ...mapMutations(['emptyMusic'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
</style>
