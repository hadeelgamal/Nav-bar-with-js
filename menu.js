$( document ).ready(function() {
  var nav = [
  	{
  		title: "Home",
  		url : "/"
  	},
  	{
  		title: "About",
  		url : "/"
  	},
  	{
  		title: "Shop",
   		url : "/"
  	},
  	{
  		title: "Blog",
  		url : "/"
  	},
  	{
  		title: "Contact Us",
  		url : "/"
  	}

 ];
 for (var i = 0; i < nav.length; i++) {
 	$("#menu").append('<li class="nav-item"><a class="nav-link" href="'+ nav[i].url+'">'+ nav[i].title+'</a></li>');

 }
 
});