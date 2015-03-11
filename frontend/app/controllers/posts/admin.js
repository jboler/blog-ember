import Ember from 'ember';

export default Ember.ArrayController.extend({
  sortProperties: ['date'],
  sortAscending: false,

  postsFilter: '',

  posts: function() {
    var filter = this.get('postsFilter').toLowerCase();

    return this.get('arrangedContent').filter(function(post) {
      return !post.get('isNew') && ((post.get('title') || '').toLowerCase().indexOf(filter) >= 0);
    });
  }.property('@each', 'postsFilter'),

  actions: {
    togglePublished: function(post) {
      post.set('published', !post.get('published'));
      post.save();
    },
    delete: function(post) {
      post.destroyRecord();
    }
  }
});
