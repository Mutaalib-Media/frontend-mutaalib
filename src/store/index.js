import { createStore } from 'vuex'

export default createStore({
  state: {
    isLoading: false,
  },
  mutations: {
    setIsloading(state, status) {
      return state.isLoading = status;
    }
  },
  actions: {
  },
  modules: {
  }
})
