import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login', { path: '/login' });
  this.route('calendar', { path: '/calendar' });
  this.resource('entries', { path: '/entries' }, function() {
      this.route('detail',{path:'/:id'});
      this.route('edit/:id');
      this.route('new');
    });
});


export default Router;
