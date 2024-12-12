import { createStore } from 'vuex'

export default createStore({
  state: {
    loginForm: {},
    amountForm: {},
    hash: {},
    convertedEth: {},
  },
  getters: {
    getLoginForm: (state) => {
      return state.loginForm;
    },
    getAmountForm: (state) => {
      return state.amountForm;
    },
    getHash: (state) => {
      return state.hash;
    },
    getConvertedEth: (state) => {
      return state.convertedEth;
    },
  },
  mutations: {
    updateLoginForm(state, payload){
      state.loginForm = payload
    },
    updateAmountForm(state, payload){
      state.amountForm = payload
    },
    updateHash(state, payload){
      state.hash = payload
    },
    updateConvertedEth(state, payload){
      state.convertedEth = payload
    },
  },
  actions: {
  },
  modules: {
  }
})
