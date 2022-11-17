import { createStore } from 'vuex'
import auth from './auth/auth.module'

const store = createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
  },
})

export default store
