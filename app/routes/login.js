export default Ember.Route.extend({
	setupController: function(controller) {
		
		controller.set('username', null);
		controller.set('password', null);
		controller.set('showLoginFailed', false);
	}
});