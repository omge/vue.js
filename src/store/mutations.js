import { HIT_MOVIES_LIST, FILM_DETAILS } from './mutation-type'

export default {
  [HIT_MOVIES_LIST] (state, data) {
    state.hitMoviesList = data
  },
  [FILM_DETAILS] (state, data) {
    state.filmDetails = data
  }
}
