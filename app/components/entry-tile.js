import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deletePost(entry) {
      this.sendAction('deletePost', entry);
    },
    updatePost(entry, params) {
      console.log(entry.title);
      this.sendAction('updatePost', entry, params);
    }
  }
});
