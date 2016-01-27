
    // renders individual todo items list (li)
    app.TodoView = Backbone.View.extend({
      tagName: 'li',
      template: template,
      events: {
        'click .delItem': 'delItem',
        'click .show' : 'showTasks'
      },

      render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this; // enable chained calls
      },

      delItem: function() {
        this.model.destroy();
      },

      showTasks: function() {
        app.tasksView = new app.TasksView(this.model); 
      }
    });
 