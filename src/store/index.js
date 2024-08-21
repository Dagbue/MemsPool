import { createStore } from 'vuex'

export default createStore({
  state: {
    loginForm: {},
  },
  getters: {
    getLoginForm: (state) => {
      return state.loginForm;
    },
  },
  mutations: {
    updateLoginForm(state, payload){
      state.loginForm = payload
    },
  },
  actions: {
  },
  modules: {
  }
})
