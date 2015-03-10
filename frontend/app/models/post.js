import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  date: DS.attr('time'),
  body: DS.attr('string'),
  published: DS.attr('boolean')
});
