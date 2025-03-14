var cmodal = document.getElementById("cardModal");

// Get the button that opens the modal
var btn = document.getElementById("cmyBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("cclose")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  cmodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  cmodal.style.display = "none";
}

      
