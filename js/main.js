
var dirtyText = "";
var cleanText = "";


$(".clean-up").on("click", function(){
	dirtyText = $(".input").val();
	cleanText = s(dirtyText).stripTags().clean().value();
	$(".output").val(cleanText);
});


