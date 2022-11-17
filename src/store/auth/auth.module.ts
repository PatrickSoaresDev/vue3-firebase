import { Module } from 'vuex'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { IUser } from '../../services/IUser'

const userInfo = (() => localStorage.getItem('user'))()

interface InitialState {
  status: { loggedIn: boolean }
  user: string | null
}

const initialState: InitialState = userInfo
  ? {
      status: { loggedIn: true },
      user: userInfo,
    }
  : {
      status: { loggedIn: false },
      user: null,
    }

const auth: Module<InitialState, any> = {
  namespaced: true,
  state: initialState,
  actions: {
    async login({ commit }, user: IUser) {
      const auth = getAuth()
      console.log(user)
      // service 사용해 api 요청
      const retorno = signInWithEmailAndPassword(
        auth,
        user.email,
        user.password
      )
        .then((res) => {
          console.log(res)
          localStorage.setItem('user', JSON.stringify(res.user))
          commit('loginSuccess', res.user)
          return 'ok'
        })
        .catch((error) => {
          commit('loginFailure')
          console.log(error.message)
          console.log(error.code)
          return 'error'
        })
      return retorno
    },
    logout({ commit }) {
      commit('logout')
    },
  },
  mutations: {
    loginSuccess(state, user) {
      state.status.loggedIn = true
      state.user = user
    },
    loginFailure(state) {
      state.status.loggedIn = false
      state.user = null
    },
    logout(state) {
      console.log('entrou')
      state.status.loggedIn = false
      state.user = null
    },
    registerSuccess(state) {
      state.status.loggedIn = false
    },
    registerFailure(state) {
      state.status.loggedIn = false
    },
  },
}

export default auth
