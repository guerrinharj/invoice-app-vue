//import axios from "axios";
import axios from 'axios';
import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      loading: 'Loading...',
      logo: require('@/assets/logo.svg'),
      moonswitcher: require('@/assets/icon-moon.svg'),
      sunswitcher: require('@/assets/icon-sun.svg'),
      isSwitch: false,
      isFormOn: false,
      avatar: require('@/assets/image-avatar.jpg'),
      plus: require('@/assets/icon-plus.svg'),
      arrowdown: require('@/assets/icon-arrow-down.svg'),
      invoices: [],
      isMenuOpen: false,
      invoicesStatus: ["Paid", "Pending", "All"],
      paymentTerms: ['Net 1 Day', 'Net 7 Days', 'Net 15 Days', 'Net 30 Days'],
      itemsCount: 1,
      itemsList: []
    }
  },
  getters: {
    loading(state) {
      return state.loading
    },
    logo(state) {
      return state.logo
    },
    moonswitcher(state) {
      return state.moonswitcher
    },
    sunswitcher(state) {
      return state.sunswitcher
    },
    isSwitch(state) {
      return state.isSwitch
    },
    avatar(state) {
      return state.avatar
    },
    plus(state) {
      return state.plus
    },
    arrowdown(state) {
      return state.arrowdown
    },
    invoices(state) {
      return state.invoices
    },
    invoicesStatus(state) {
      return state.invoicesStatus
    },
    isMenuOpen(state) {
      return state.isMenuOpen
    },
    isFormOn(state) {
      return state.isFormOn
    },
    paymentTerms(state) {
      return state.paymentTerms
    },
    itemsList(state) {
      return state.itemsList
    }

  },
  mutations: {
    fetchTheInvoices(state) {
      axios.get("https://gabrielguerra-invoices-api.herokuapp.com/api/v1/invoices").then(res => {
        state.invoices = res.data
      }).catch(error => {
        console.log(error)
      })
    },
    switchTheTheme(state) {
      state.isSwitch = !state.isSwitch
      if (state.isSwitch == true) {
        document.body.style.backgroundColor = "#141625"
      } else {
        document.body.style.backgroundColor = "#F8F8FB"
      }
    },
    filterTheMenu(state) {
      state.isMenuOpen = !state.isMenuOpen
    },
    filterTheList(state, payload) {

      if (payload.item == "Paid") {
      axios.get(`https://gabrielguerra-invoices-api.herokuapp.com/api/v1/invoices?paid=true`).then(res => {
        state.invoices = res.data
      }).catch(error => {
        console.log(error)
      })
      } else if (payload.item == "Pending") {
        axios.get(`https://gabrielguerra-invoices-api.herokuapp.com/api/v1/invoices?paid=false`).then(res => {
          state.invoices = res.data
        }).catch(error => {
          console.log(error)
        })
      } else {
        axios.get(`https://gabrielguerra-invoices-api.herokuapp.com/api/v1/invoices?paid=nil`).then(res => {
          state.invoices = res.data
        }).catch(error => {
          console.log(error)
        })
      }
  },
      openTheForm(state) {
        state.isFormOn = !state.isFormOn
      },
      submitTheForm(state, payload) {
        console.log(state)

        axios.post('/https://gabrielguerra-invoices-api.herokuapp.com/api/v1/invoices', {
          name: payload.form.target[3].value,
          email: payload.form.target[4].value,
          value: "teste",
          code: "teste",
          invoice_date: "teste",
          payment_date: payload.form.target[9].value,
          paid: false,
          client_address: payload.form.target[0].value,
          sender_address: "teste",
          items: "teste",
          description: "teste",
          terms: "teste",
        })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });



      },
      addTheItems(state) {
        state.itemsCount++
        const newItem = `item ${state.itemsCount}`
        state.itemsList.push(newItem)
      },
      expandTheItem(state, payload) {
        console.log(state, payload.invoice)


        const expandedAreas = document.querySelectorAll('.expanded-area')
        const listItems = document.querySelectorAll('.item-wrapper')

        expandedAreas.forEach(area => {
          area.classList.add('expanded-area-none')
          listItems.forEach(item => {
            console.log(item)
            if (item.id == payload.invoice.id) {
              const expandedArea = item.querySelector('.expanded-area')
              expandedArea.classList.remove('expanded-area-none')
            }
          })
        })





      }
  },
  actions: {

    fetchingInvoices(context, payload) {
      context.commit('fetchTheInvoices', payload)
    },

    switchingThemes(context, payload) {
      context.commit('switchTheTheme', payload)
    },

    filteringMenu(context, payload) {
      context.commit('filterTheMenu', payload)
    },

    filteringList(context, payload) {
      context.commit('filterTheList', payload)
    },
    openingForm(context, payload) {
      context.commit('openTheForm', payload)
    },
    submitingForm(context, payload) {
      context.commit('submitTheForm', payload);
      context.commit('fetchTheInvoices', payload)
    },
    addingItems(context, payload) {
      context.commit('addTheItems', payload)
    },
    expandingItem(context, payload) {
      context.commit('expandTheItem', payload)
    }

  }
})

export default store
