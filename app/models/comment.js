import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr(),
  entry: DS.belongsTo('entry', { async: true })
});
