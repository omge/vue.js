// import api from '../api/api'
import axios from 'axios'

const API = {
  hitMovies: '/api/movie/in_theaters',    // 院线热映的电影列表
  filmDetails: '/api/movie/subject/',   // 电影详情页
  searchFilm: '/api/movie/search?q='   // 搜索电影
}

export default {
  getHitMoviesList (context, state) {
    axios.get(API.hitMovies)
      .then(response => {
        context.commit('HIT_MOVIES_LIST', response.data.subjects)
      })
      .catch(err => {
        console.log(err)
      })
  },
  getFilmDetail (context, param) {
    axios.get(API.filmDetails + param.id)
      .then(response => {
        context.commit('FILM_DETAILS', response.data)
      })
      .catch(err => {
        console.log(err)
      })
  }
}
