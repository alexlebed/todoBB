    app.Todo = Backbone.Model.extend({
      defaults : function() {
        return { 
          title: '',
          completed: false,
          tasks: new app.TaskList
        }
      } 
    });