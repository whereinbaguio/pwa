function myFunction() {
    var x = document.getElementById("top_nav");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}

function showOptions() {
	var y = document.getElementById("options");
	
	if (y.className == "hide") {
		y.className = "";
	} else {
		y.className ="hide";
	}
}