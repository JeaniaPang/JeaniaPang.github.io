/* Exercise 2: Color picker */
	 /*$(document).on('keydown keyup keypress', '#color', function() {
	 	//$("#color").value();
	 	
	 	var color = $("#color").val();
	 	setPreviewColor(color);
	 	$("#color").focus();

 });*/

function setPreviewColor(color) {
  // set background color
  $(".preview").css('background-color', color);
  $(".color-code").text($(".preview").css('background-color'));
}

var previewColor;
$(document).on('mouseenter', '.preview',  function(){
 	 previewColor = $('.preview').css("background-color");
 	 setPreviewColor($("#color").val());
}).on('mouseleave', '.preview', function() {
 previewColor = $('.preview').css("background-color", previewColor);
});

function addBox(color) {
  // add a box to the beginning of #colors
  $("#colors").prepend("<div class='item' style='background-color: " + color + ";'><div>");
}

$(document).on('click', '#add-to-favorite', function(){
	var color = $("#color").val();
	var numOfBoxes = $("#colors .item").length;
	if (numOfBoxes >= 16){
		$("#colors .item:last-child").remove();
	};
	addBox(color);
	$("#color").val("");
});
	
var colors = [ "22ac5e", "d68236", "red", "blue", "purple", "yellow", "pink", "green", "orange", "brown" ];
	

$(document).ready(function(){
	$.each(colors, function(index, element) {
  	// do something
  		addBox(element);
	});

random_position = Math.floor( Math.random() * colors.length )
	setPreviewColor(colors[random_position]);

});
		