<template>
  <div>
    <section v-if="hitMoviesList.length == 0" class="circle">
      <mu-circular-progress :size="90" color="red"/>
    </section>
    <section v-else>
      <div v-for="movie in hitMoviesList">
        <router-link :to="{name:'detail', params:{id: movie.id}}">
        <mu-card >
          <mu-card-media :title="movie.title">
            <img :src="movie.images.large" />
          </mu-card-media>
        </mu-card>
        </router-link>
      </div>
    </section>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'index',
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['hitMoviesList'])
  },
  created () {
    this.$store.dispatch('getHitMoviesList')
  }
}

</script>
<style scoped lang="sass">
.circle
  position: fixed
  top: 25%
.mu-circular-progress
  margin-left: 150px
section
  div
    height: 200px
    overflow: hidden
</style>
