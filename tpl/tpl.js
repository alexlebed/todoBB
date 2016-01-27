var template = _.template([
	'<div class="view">',
	    '<input class="toggle" type="checkbox">',
	    '<label><%- title %></label>',
	    ' <button class="delItem">Dell</button>',
	    ' <button class="show">Show</button>',
	'</div>'
].join(''));
