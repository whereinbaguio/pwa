function myFunction() {
    var x = document.getElementById("top_nav");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}