import Ember from 'ember';

export default Ember.Route.extend({
  model : function(){
    return this.store.find('todo');
  },
  actions : {
    createTodo: function(newTitle) {
      // Create the new Todo model
      var todo = this.store.createRecord('todo', {
        title: newTitle,
        isCompleted: false
      });

      // Clear the "New Todo" text field
      this.controllerFor('todos').set('newTitle', '');

      // Save the new model
      todo.save();
    },
    acceptChanges: function(todo) {
      console.log('todo : ' + todo.get('title'));
      if (Ember.isEmpty(todo.get('title'))) {
        console.log('todo title was empty');
        this.send('deleteTodo', todo);
      } else {
        todo.save();
      }
    },
    deleteTodo: function(todo) {
      todo.deleteRecord();
    }
  }
});
