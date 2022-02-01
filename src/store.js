//import axios from "axios";
import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      logo: require('@/assets/logo.svg'),
      moonswitcher: require('@/assets/icon-moon.svg'),
      avatar: require('@/assets/image-avatar.jpg'),
    }
  },
  getters: {
    logo(state) {
      return state.logo
    },
    moonswitcher(state) {
      return state.moonswitcher
    },
    avatar(state) {
      return state.avatar
    }
  },
  mutations: {

  },
  actions: {

  }
})

export default store
