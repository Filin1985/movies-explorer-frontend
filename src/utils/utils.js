import { CONVERT_TO_MINUTES, SHORT_MOVIES_TIME } from './constants'


export const convertTimeFromMinutes = (time) => {
  const hours = Math.floor(time / CONVERT_TO_MINUTES)
  const minutes = time - hours * CONVERT_TO_MINUTES
  return `${hours}ч${minutes}м`
}

export const filterShortMovies = (movies) => {
  return movies.filter(movie => movie.duration <= SHORT_MOVIES_TIME)
}