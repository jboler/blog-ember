/* global seedData:true */

import Ember from 'ember';

export default Ember.Controller.extend({
  init: function() {
    this._super();

    var store = this.store;

    if(!store.all('post').get('length')) {
      Ember.$.each(seedData, function(i, e) {
        store.createRecord('post', e).save();
      });
    }
  }
});
