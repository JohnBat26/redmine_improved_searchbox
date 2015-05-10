$(document).ready(function(){
	
	$('#project_quick_jump_box').select2({
	    allowClear: true,
	    width: function() {
			return ($('#project_quick_jump_box').width() + 32).toString() + 'px';
	    }
	});

});
