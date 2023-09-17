export const EMAIL_REGEXP = '.+@.+\\..+'
export const USERNAME_REGEXP = '^(?!\s)[A-Za-zА-Яа-я\-\s]+$';
export const FOOTER_ROUTES = ['/', '/movies', '/saved-movies']
export const HEADER_ROUTES = ['/', '/movies', '/saved-movies', '/profile']
export const CARD_ROUTES = ['/saved-movies']
export const MOVIES_PATH = '/movies'
export const SAVED_MOVIES_PATH = '/saved-movies'
export const MOVIES_API_BASE_URL = 'https://api.nomoreparties.co/'
export const SHORT_MOVIES_TIME = 40
export const CONVERT_TO_MINUTES = 60
export const MOVIES_PER_PAGE_SIZE = {
  1280: 16,
  990: 12,
  480: 8,
  320: 5
}

export const MOVIES_TO_ADD = {
  1280: 4,
  990: 3,
  320: 2
}

export const VALIDATION_MESSAGES_BACKEND = {
  401: 'Неверный логин или пароль',
  409: 'Пользователь с таким email уже существует',
  500: 'Ошибка сервера. Повторите попытку позже',
  200: 'Ваш запрос успешно выполнен',
  201: 'Все прошло отлично!',
}

export const CUSTOM_ERROR_MESSAGE = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'

export const MOVIE_NOT_FOUND_MESSAGE = 'Ничего не найдено'