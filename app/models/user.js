import DS from 'ember-data';
 
var user = DS.Model.extend({
     
    username: DS.attr('string'),
    password: DS.attr('string'),
    entries : DS.hasMany('entries')
});
 
 
export default user;