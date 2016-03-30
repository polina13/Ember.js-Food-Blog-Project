import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    savePost() {
      var params = {
        author: this.get('author'),
        date: this.get('date'),
        post: this.get('post'),
        title: this.get('title')
      };
      this.sendAction('savePost', params);
    }
  }
});
