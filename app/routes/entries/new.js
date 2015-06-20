import Ember from 'ember';
import moment from 'moment';

export default Ember.Route.extend({
    setupController:function(controller) {
        controller.set('date', moment().locale("de").format('DD-MM-YYYY'));
        controller.set('time', moment().locale("de").format('HH:mm'));
    }
});
