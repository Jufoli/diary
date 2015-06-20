import Ember from 'ember';
export default Ember.Controller.extend({
    needs: "storage",
	storage: Ember.computed.alias("controllers.storage"),
	model:null
});
