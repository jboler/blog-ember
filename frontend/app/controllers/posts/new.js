import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    create: function () {
      var post = this.get('model');
      post.save();

      this.transitionTo('posts.admin');
    }
  }
});
