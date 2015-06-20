import Ember from 'ember';

export default Ember.Route.extend({
        setupController:function(controller){
            controller.set('date', moment().local("de").format("dddd, DD.MM.YYYY"));
            controller.set('model',controller.get('storage').getAllTagebuchEintraege());
        }
});
