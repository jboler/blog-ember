import Ember from 'ember';

export default Ember.Controller.extend({
  post: Ember.computed.alias('model')
});