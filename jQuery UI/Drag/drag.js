$(document).ready(function(){
	$('#drag1').draggable({containment: 'parent',cursor:'pointer',opacity:0.6, revert:true,revertDuration:1500,
	  start: function(){
		  $('#div').text('Dragging Start');
	  },
	  drag: function(){
		  $('#div').text('Dragging');
	  },
	  stop: function(){
		  $('#div').text('Dragging Stop');
	  }
	 });
	
});