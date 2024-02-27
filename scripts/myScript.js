function OpenModal(){
    var modal= document.getElementById("myModal");
    modal.style.display="block";
}
function CloseModal(event) {
    var modal = document.getElementById("myModal");
    // Check if the clicked element is outside the modal content
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Attach a click event listener to the modal content
var modal = document.getElementById("myModal");
modal.addEventListener("click", CloseModal);
