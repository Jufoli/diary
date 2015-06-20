import Ember from 'ember';
export default Ember.Controller.extend({
    needs: "storage",
	storage: Ember.computed.alias("controllers.storage"),
	queryParams: ['date'],		// read query parameter in format yyyy-mm-dd
	date: null,
    model:null
    
});

/*
userView = Diary.Entry.create({
	date: "2015-05-31",
    author: "Test",
    headline: "Test-Eintrag",
    content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet." +
		"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
});
*/