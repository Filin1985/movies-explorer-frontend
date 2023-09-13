export const convertTimeFromMinutes = (time) => {
  const hours = Math.floor(time / 60)
  const minutes = time - hours * 60
  return `${hours}ч${minutes}м`
}

export const filterShortMovies = (movies) => {
  return movies.filter(movie => movie.duration <= 40)
}