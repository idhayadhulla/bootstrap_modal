// function myFunction() {
// document.getElementById("User").style.display  = "block";
//   document.getElementById("User").innerHTML = form;

// }

 
// function hideForm() {
// document.getElementById("User").style.display  = "none";
  

// }




// var myModal = document.getElementById('myModal')
// var myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', function () {
//   myInput.focus()
// })


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


function myFunction(){
	modal.style.display = "block";
}


// When the user clicks the button, open the modal 

// btn.onclick = function() {
//   modal.style.display = "block";
// }



// function myFunction() {
// document.getElementById("myBtn").style.display  = "block";
// document.getElementById("myBtn").innerHTML = form;
// }




// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function hideForm() {
document.getElementByClassName("btn").style.display  = "none";
  

}
