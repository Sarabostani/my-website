function get(str){
	var elements = document.querySelectorAll(str);
	if(elements.length == 1)
		return elements[0];
	
	return elements;
}
$(".menu-btn").click(function(){
	$(this).toggleClass('cross');
	$("#main-menu").fadeToggle(400);
});

$(".opj-container").each(function(){
	$(this).load($(this).attr("data-default-content"));
});

/*qstr = (window.location.search).substring(1);
dest = qstr.split('=');
if(qstr == ""){
	$("#contents").load('home.html');
}
else{
	$("#contents").load(dest[0]+'/'+ (dest[1] || "index.html") );
}*/

$(".opj-link").click(function(){
	console.log("loading "+$(this).attr("data-source") + " to "+ $(this).attr("data-container"));
	$("#"+$(this).attr("data-container")).load($(this).attr("data-source"));
});