import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['bankid'],

  nodeBankID: true,

  success: Ember.computed.equal('state', 'success'),
  denied: Ember.computed.equal('state', 'denied'),
  loading: Ember.computed.equal('state', 'loading'),

  mode: 'sign',//sign or auth
  requestURL: "https://appapi.bankid.com/rp/v4",


  /*UI properties*/
  chooseMethod: true,



  actions: {
    updatePersonalNumber(personalNumber){
      this.set('requestPersonalNumber', false);
      this.set("personalNumber", personalNumber);
      this.send('initRequest');
    },
    initRequest(){
      this.set('chooseMethod', false);
      console.log('initRequest');
      if(!this.get('personalNumber')){
        this.set('requestPersonalNumber', true);
        this.set('text', 'Fyll i ditt personnummer:');
        return;
      }

      this.set('state', 'loading');


//Makeexternal request here

      this.sendAction('callBankID');

      //TODO create request for node-bankid backend
    },


    setMethod(method){

      if(method ==='self'){
        console.log("BankID launched");
        location.assign("bankid:///");
        this.send('initRequest');
      }else if(method === 'api'){
        this.send('initRequest');
      }

    }
  }

});
