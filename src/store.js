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

        const nameSubmitted = payload.form.target[3].value
        const emailSubmitted = payload.form.target[4].value
        const valueSubmitted = 2000
        const paymentSubmitted = payload.form.target[9].value
        const clientStreetSubmitted = payload.form.target[5].value
        const clientCitySubmitted = payload.form.target[6].value
        const clientPostSubmitted = payload.form.target[7].value
        const clientCountrySubmitted = payload.form.target[8].value
        const senderStreetSubmitted = payload.form.target[0].value
        const senderCitySubmitted = payload.form.target[1].value
        const senderPostSubmitted = payload.form.target[2].value
        const descriptionSubmitted = payload.form.target[11].value
        const termsSubmitted = payload.form.target[10].value
        const itemsSubmitted = state.itemsList


        axios.post('https://gabrielguerra-invoices-api.herokuapp.com/api/v1/invoices', {
          name: nameSubmitted,
          email: emailSubmitted,
          value: valueSubmitted,
          payment_date: paymentSubmitted,
          client_address: { street: clientStreetSubmitted, city: clientCitySubmitted, postCode: clientPostSubmitted, country: clientCountrySubmitted},
          sender_address: { street: senderStreetSubmitted, city: senderCitySubmitted, postCode: senderPostSubmitted  },
          items: itemsSubmitted,
          description: descriptionSubmitted,
          terms: termsSubmitted,
          paid: false
        })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log("ERROU FILHO", error);
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
