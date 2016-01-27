

     // renders the full list of todo items calling TodoView for each one.
    app.TasksView = Backbone.View.extend({
      el: '#todo',

      modelTask: '',

      events: {
        'keypress #new-task': 'createTodoOnEnter'
      },

      initialize: function (model) {

        modelTask = model;

                console.log(model);
 		// instance of the Collection
   		// app.todoList = new app.TaskList();

        this.input = this.$('#new-task');
        app.todoList.on('add', this.addAll, this);
        app.todoList.on('reset', this.addAll, this);
        app.todoList.on('destroy', this.addAll, this);
        app.todoList.fetch(); // Loads list from local storage
      },

      createTodoOnEnter: function(e){
        if ( e.which !== 13 || !this.input.val().trim() ) { // ENTER_KEY = 13
          return;
        }

        modelTask.push(this.newAttributes());

        app.todoList.create(this.newAttributes());
        this.input.val(''); // clean input box
      },

      addOne: function(todo){
        var view = new app.TodoView({model: todo});
        $('#todo-list').append(view.render().el);
      },

      addAll: function(){
        this.$('#task-list').html(''); // clean the todo list
        app.todoList.each(this.addOne, this);
      },
      
      newAttributes: function(){
        return {
          title: this.input.val().trim(),
          completed: false
        }
      }
    });