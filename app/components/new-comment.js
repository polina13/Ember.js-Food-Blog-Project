import Ember from 'ember';

export default Ember.Component.extend({
  addNewText: false,
  actions: {
    textFormShow() {
      this.set('addNewText', true);
    },
    textFormHide() {
      this.set('addNewText', false);
    },
    saveText() {
      var params = {
        text: this.get('text'),
        entry: this.get('entry')
      };

      this.set('addNewText', false);
      this.sendAction('saveText', params);
    }
  }
});
