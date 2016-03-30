import Ember from 'ember';

export default Ember.Component.extend({
  updateEntry: false,
  actions: {
    updateEntryForm() {
      this.set('updateEntry', true);
    },
    updatePost(entry) {
      var params = {
        author: this.get('author1'),
        date: this.get('date1'),
        post: this.get('post1'),
        title: this.get('title1')
      };
      console.log(entry);
      this.set('updateEntry', false);
      this.sendAction('updatePost', entry, params);
  }
}
});
