import Ember from 'ember';

export default Ember.Component.extend({
  addNewEntry: false,
  actions: {
    entryFormShow() {
      this.set('addNewEntry', true);
    },
    entryFormHide() {
      this.set('addNewEntry', false);
    },
    savePost() {
      var params = {
        author: this.get('author'),
        // date: this.get('date'),
        date: new Date(),

        post: this.get('post'),
        title: this.get('title')
      };
      this.set('addNewEntry', false);

      this.sendAction('savePost', params);
    }
  }
});
