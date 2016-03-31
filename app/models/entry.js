import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  date: DS.attr(),
  post: DS.attr(),
  comments: DS.hasMany('comment', { async: true })
});
