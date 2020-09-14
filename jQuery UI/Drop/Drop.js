$(document).ready(function(){
	$('.friend,.b').draggable({containment:'document',revert:true});
	$('#drop').droppable({hoverClass:'border',tolerance:'pointer',accept:'.friend',
	over: function(){
		
		$(this).text('Something hovered over me');
	},
	out: function(){
		$(this).text('Something hovered out');
	},
	drop: function(){
		
		$(this).text("Dropped");
	}
	});
});