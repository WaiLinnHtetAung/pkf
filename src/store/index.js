import { createStore } from 'vuex'

export default createStore({
  state: {
    currentRoute: '',
  },
  getters: {
    getCurrentRoute : (state) => state.currentRoute
  },
  mutations: {
    setCurrentRoute : (state, route) => {
      state.currentRoute = route;
    }
  },
  actions: {
    getRoute : (context, route) => {
      context.commit('setCurrentRoute', route)
    }

  },
  modules: {
  }
})
