import { IUser } from './IUser'

export default function authHeader() {
  let user: IUser = JSON.parse(localStorage.getItem('user') || '')

  if (user && user.accessToken) {
    return { 'x-access-token': user.accessToken }
  } else {
    return {}
  }
}
