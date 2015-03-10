import Ember from 'ember';

export default Ember.Controller.extend({
  postsFilter: '',

  posts: function() {
    var filter = this.get('postsFilter').toLowerCase();

    return this.store.filter('post', function(post) {
      return !post.get('isNew') && post.get('published') && (post.get('title').toLowerCase().indexOf(filter) >= 0);
    });
  }.property('@each', 'postsFilter')
});
