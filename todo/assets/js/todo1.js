/*$('li').on('click', function(){
	if($(this).css("color") == "rgb(128, 128, 128)"){//ne mozes usporedit s gray vec bas rgb
		$(this).css({
			color:"black",
			textDecoration: "none"});
	}else{
		$(this).css({
			color:"gray",
			textDecoration: "line-through"
		});
	}
})*/

$("ul").on('click', 'li', function(){//listeneri moraju biti na necemu sto postoji pri loadanju jer mu se kasnije ne mogu pridruzit
	$(this).toggleClass("completed");
});

//deleting
$("ul").on('click', 'span', function(event){
	$(this).parent().fadeOut(800, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//input

$('button').on('click', function(){
	var todoText = $("input[type='text']").val();
	$("input[type='text']").val("");
	var dat = $("input[type='date']").val();
	$("ul").append("<li> <span>X</span> " + todoText + " " + dat + "</li>");
});
