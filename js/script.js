// Descrizione:
// Genera 10 mail tramite API e stampale in una lista

new Vue({
  el: '#app',
  data: {
  mailingList: []
  },

// Generazione email con mounted function
  mounted: function () {
    for( var i=0; i<10; i++)
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then(emailRand => {
       let email = emailRand.data.response;
       if (!this.mailingList.includes(email))
         this.mailingList.push(email);
     });
    console.log(this.mailingList);
  },

// Generazione email tramite bottone
  // methods: {
  //   emailGen: function () {
  //    for (var i = 0; i < 10; i++) {
  //    axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(emailRand => {
  //     let email = emailRand.data.response;
  //     if (!this.mailingList.includes(email)) this.mailingList.push(email)
  //     });
  //     }
  //     console.log(this.mailingList);
  //     }
  //     },
});
