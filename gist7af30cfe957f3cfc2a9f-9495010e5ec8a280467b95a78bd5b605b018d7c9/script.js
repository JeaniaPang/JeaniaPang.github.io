// github user finder example
var url = "https://api.github.com/users/";
	function getGithubInfo(user){
		var xmlhttp = new XMLHttpRequest();
		url += user; 
 		xmlhttp.open("GET", url, false);
 		xmlhttp.send();
 		return xmlhttp;
	};

$(document).ready(function(){
	$(document).on('keypress', '#username', function(e){
		if (e.which == 13) {
			var userName = $("#username").val();
			var response = getGithubInfo(userName);
			console.log(userName, response);
			if (response.status == 200) {
				function showUser(user){
					var gitHubUser = " is Github user #";
					$("#profile h2").html(user.login + gitHubUser + user.id);  
					var userURL = user.url;
					$("#profile .information").html("<a href = " + user.html_url + " class='profile'></a>");
					$("#profile .avatar").html("<img src= https://gravatar.com/avatar/" + user.gravatar_id + "?s=220/>");
				}
			
			var info = JSON.parse(response.responseText);
			showUser(info);
		}
		else {
			$("#profile h2").html("No such user: " + userName);

		}
		}}); 
	 }
	)
