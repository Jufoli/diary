import Ember from 'ember';
export default Ember.Controller.extend({
	needs: "application",
	application: Ember.computed.alias("controllers.application"),
	username: null,
	password: null,
	showLoginFailed: false,
	
	actions: {
		login: function() {
			this.set('showLoginFailed', false);
			this.get('application').send('login', this.get('username'), this.get('password'));
			this.set('showLoginFailed', true);
		}
	}
});