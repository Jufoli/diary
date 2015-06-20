import Ember from 'ember';

export default Ember.Controller.extend({
	
    needs : 'storage',
    storage : Ember.computed.alias("controllers.storage"),

    name: '',
	isLoggedIn: false,
	
	// observe route changes
	currentPathDidChange: function(){
		if(!this.get('isLoggedIn')) {
			this.transitionToRoute('login');
		}
	}.observes('currentPath'),

	actions: {
		login: function(_name, _password) {
			// TODO: login logic
			if(this.get('storage').login(_name,_password)) {
				this.set('name', _name);
				this.set('isLoggedIn', true);
				this.transitionToRoute('calendar');
			}
		},
		logout: function() {
			// TODO: logout logic
            if(this.get('storage').logout()){
                this.set('name', '');
                this.set('isLoggedIn', false);
                this.transitionToRoute('login');
            }

		}
	}
});