$(function(){
	if ('ontouchstart' in window || !!(navigator.msMaxTouchPoints))
		return;

        var str = $('#project_quick_jump_box option:first').text();
	$('#project_quick_jump_box option:first').text("").val("");
	
	$('#project_quick_jump_box').select2({
	    placeholder: "Select a Project",
	    allowClear: true,
	    width: function() {
			return ($('#project_quick_jump_box').width() + 32).toString() + 'px';
	}
	});

//	$('#project_quick_jump_box').attr("data-placeholder", str).select2({ width: function() {
//		return ($('#project_quick_jump_box').width() + 32).toString() + 'px';
//	}});

});
