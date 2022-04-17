import Cookies from 'universal-cookie'
const cookies = new Cookies()

export const getToken = () => {
    return cookies.get('jwt') && JSON.parse(atob(cookies.get('jwt').split('.')[1]))
}

export const removeToken = () => {
    return cookies.remove('jwt', { path: '/' })
}

