

     // renders the full list of todo items calling TodoView for each one.
    app.AppView = Backbone.View.extend({
      el: '#todoapp',

      events: {
        'keypress #new-todo': 'createTodoOnEnter'
      },

      initialize: function () {
 		// instance of the Collection
   		 app.todoList = new app.TodoList();

        this.input = this.$('#new-todo');
        app.todoList.on('add', this.addAll, this);
        app.todoList.on('reset', this.addAll, this);
        app.todoList.on('destroy', this.addAll, this);
        app.todoList.fetch(); // Loads list from local storage
      },

      createTodoOnEnter: function(e){
        if ( e.which !== 13 || !this.input.val().trim() ) { // ENTER_KEY = 13
          return;
        }
        app.todoList.create(this.newAttributes());
        this.input.val(''); // clean input box
      },

      addOne: function(todo){
        var view = new app.TodoView({model: todo});
        $('#todo-list').append(view.render().el);
      },

      addAll: function(){
        this.$('#todo-list').html(''); // clean the todo list
        app.todoList.each(this.addOne, this);
      },

      newAttributes: function(){
        return {
          title: this.input.val().trim(),
          completed: false
        }
      }
    });