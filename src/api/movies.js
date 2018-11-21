import axios from 'axios';
import { moviesQuery } from '../../constants'

function getMovies(page){
  return axios(moviesQuery(page));
}

export { getMovies }
