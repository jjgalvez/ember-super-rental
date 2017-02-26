import Ember from 'ember';

export default Ember.Component.extend({
  isWdie: false,
  actions: {
    toggleImageSize(){
      this.toggleProperty('isWide');
    }
  }
});
