    app.Task = Backbone.Model.extend({
      defaults : function() {
        return { 
	        title: '',
	        completed: false
        }
      }  
    });