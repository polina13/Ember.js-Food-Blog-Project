import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('entry', params.entry_id);
  },
  actions: {
   saveText(params) {
    var newText = this.store.createRecord('comment', params);
    var entry = params.entry;
    entry.get('comments').addObject(newText);
    newText.save().then(function () {
      return entry.save();
    });
    // this.transitionTo('/entry/:entry_id');
   }
  }
});
