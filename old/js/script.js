function displayMenu() {
    document.getElementById("menuChoices").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbutton')) {
    var myDropdown = document.getElementById("menuChoices");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
  }
}
