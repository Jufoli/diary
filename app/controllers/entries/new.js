import Ember from 'ember';
export default Ember.Controller.extend({
    needs: "storage",
	storage: Ember.computed.alias("controllers.storage"),
    date: null,
    time: null,
	actions: {
		save: function() {
        var completeDate = this.get('date')+" "+this.get('time')+":00";
        var title = this.get('title');
        var content = this.get('desc');
            this.get('storage').saveTagebuchEintrag(completeDate,title,content);
            this.transitionToRoute('calendar');
		}
	}
});