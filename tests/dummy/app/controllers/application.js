import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    testCallAction(params){
      //Execute request to server
      this.set('responseText', 'A custom action was called with ' + params + '! You can create your own requests here!');

      //Failed request
      this.set('requestState', 'failed');

      //Successful request
      this.set('requestState', 'success');
    }
  }
});
