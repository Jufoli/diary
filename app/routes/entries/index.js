import Ember from 'ember';

export default Ember.Route.extend({
        setupController:function(controller){
            controller.set('date', moment().locale('de').format("DDDD, DD.MM.YYYY"));
            controller.set('model',controller.get('storage').getAllTagebuchEintraege());
        }
});
