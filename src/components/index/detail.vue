<template>
<section v-if="!filmDetails && filmDetails.length == 0">
  <div v-for="item in filmDetails">
    <p>{{item.genres}}</p>
    <!--<p>{{item}}</p>-->
  </div>
</section>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'detail',
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['filmDetails'])
  },
  mounted () {
    var _id = this.$route.params.id
    this.$store.dispatch('getFilmDetail', {
      id: _id
    })
  }
}

</script>
<style lang="sass" scoped>    
</style>
