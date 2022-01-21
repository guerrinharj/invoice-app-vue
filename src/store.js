//import axios from "axios";
import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      logo: require('@/assets/logo.svg')
    }
  },
  getters: {
    logo(state) {
      return state.logo
    }
  },
  mutations: {

  },
  actions: {

  }
})

export default store
