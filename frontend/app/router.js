import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('posts', {path: '/posts'}, function() {
    this.route('admin');
    this.route('new');
    this.route('edit', {path: '/:post_id/edit'});
  });

  this.resource('post', { path: '/post/:post_id' }, function() {
    this.route('edit');
  });
});

export default Router;