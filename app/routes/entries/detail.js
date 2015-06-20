import Ember from 'ember';

export default Ember.Route.extend({
        setupController:function(controller, params){            
            controller.set('model',controller.get('storage').getTagebuchEintrag(params.id));
        }
});
