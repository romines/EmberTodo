import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editTodo : function() {
      console.log('editing todo');
      this.set('isEditing', true);
    },
    acceptChanges : function() {
      this.set('isEditing', false);
      console.log('acceptChanges fired')
      this.sendAction('action', this.get("todo"));
    }
  }
});
