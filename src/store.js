//import axios from "axios";
import axios from 'axios';
import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      logo: require('@/assets/logo.svg'),
      moonswitcher: require('@/assets/icon-moon.svg'),
      avatar: require('@/assets/image-avatar.jpg'),
      plus: require('@/assets/icon-plus.svg'),
      invoices: []
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
    },
    plus(state) {
      return state.plus
    },
    invoices(state) {
      return state.invoices
    }
  },
  mutations: {
    fetchTheInvoices(state) {
      axios.get("https://gabrielguerra-invoices-api.herokuapp.com/api/v1/invoices").then(res => {
        state.invoices = res.data
        console.log(state.invoices)
      }).catch(error => {
        console.log(error)
      })
    }

  },
  actions: {

    fetchingInvoices(context, payload) {
      context.commit('fetchTheInvoices', payload)
    }

  }
})

export default store
