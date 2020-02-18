function openLink(evt, linkName) {
    var a, x, tablinks;
    x = document.getElementsByClassName("myLink");
    for (a = 0; a < x.length; a++) {
      x[a].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (a = 0; a < x.length; a++) {
      tablinks[a].className = tablinks[a].className.replace(" w3-red", "");
    }
    document.getElementById(linkName).style.display = "block";
    evt.currentTarget.className += " w3-red";
  }
  
  // Click on the first tablink on load
  document.getElementsByClassName("tablink")[0].click();
  //Coolapsible coding
  var coll = document.getElementsByClassName("collapsible");
  var i;
  
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }
  