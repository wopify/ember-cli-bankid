/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-bankid',
  included(app){
    app.import('app/styles/style.css');

    this._super.included.call(this, app);
  }
};
