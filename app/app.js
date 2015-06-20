import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';
import DS from 'ember-data';

var App, Adapter;

Ember.MODEL_FACTORY_INJECTIONS = true;

Adapter = DS.FixtureAdapter.extend();

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver,
  ApplicationAdapter: Adapter
});

loadInitializers(App, config.modulePrefix);

export default App;
