const axios = "lala"

axios.post('/https://gabrielguerra-invoices-api.herokuapp.com/api/v1/invoices', {
  name: "teste",
  email: 'Flintstone',
  value: "teste",
  code: "teste",
  invoice_date: "teste",
  payment_date: "teste",
  paid: "teste",
  client_address: "teste",
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
