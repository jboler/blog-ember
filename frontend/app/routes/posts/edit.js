import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('post', params.post_id);
  },
  controllerName: 'PostsNew',
  templateName: 'posts/new'
});
