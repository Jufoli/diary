import DS from 'ember-data';
 
var entry = DS.Model.extend({
  date: DS.attr('string'),
    title: DS.attr('string'),
    url: DS.attr('string'),
    description:DS.attr('string')
});
 
export default entry;