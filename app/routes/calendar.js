import Ember from 'ember';
//import moment from 'moment';

export default Ember.Route.extend({
    setupController:function(controller) {
        var title, date, url, desc;
        var events = []; 
        var fixevents = controller.get('storage').getAllTagebuchEintraege();
        fixevents.then(function(){
            fixevents.forEach(function(event){
                title = event.get('title');
                date = event.get('date');
                url = event.get('url');
                desc = event.get('description');
                events.push({
                    date: date,
                    title: title,
                    url: url,
                    description: desc                
                });
            });
        });
        controller.set('eventData', events);
        controller.set('today', moment().local("de").format("dddd, DD.MM.YYYY"));
    }
});