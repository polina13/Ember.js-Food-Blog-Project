import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('entry');
  },
  actions: {
    savePost(params) {
      var newEntry = this.store.createRecord('entry', params);
      newEntry.save();
      this.transitionTo('index');
    },
    updatePost(entry, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          entry.set(key, params[key]);
        }
      });
      entry.save();
      this.transitionTo('index');
    },
    deletePost(entry) {
      entry.destroyRecord();
      this.transitionTo('index');
    }    
  }
});
