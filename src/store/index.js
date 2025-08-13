import { createStore } from 'vuex'

export default createStore({
  state: {
    loginForm: {},
    amountForm: {},
    hash: {},
    convertedEth: {},
    selectedPaymentMethod: {},
    btcRate: {},
    ethRate: {},
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
    getSelectedPaymentMethod: (state) => {
      return state.selectedPaymentMethod;
    },
    getBtcRate: (state) => {
      return state.btcRate;
    },
    getEthRate: (state) => {
      return state.ethRate;
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
    updateSelectedPaymentMethod(state, payload){
      state.selectedPaymentMethod = payload
    },

    updateBtcRate(state, payload){
      state.btcRate = payload
    },
    updateEthRate(state, payload){
      state.ethRate = payload
    },
  },
  actions: {
  },
  modules: {
  }
})
