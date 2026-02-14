// FIXED: Each function now has a single responsibility
Guestbook.addEntry = function() {
  const name = document.getElementById("nameInput").value;
  const learn = document.getElementById("learnInput").value;

  if (!this.validateEntry(name, learn)) {
    return;
  }

  this.renderEntry(name, learn);
  this.saveToStorage(name, learn);
  this.clearForm();
};

Guestbook.validateEntry = function(name, learn) {
  if (name === "" || learn === "") {
    alert("Please fill in both fields!");
    return false;
  }
  return true;
};

Guestbook.clearForm = function() {
  document.getElementById("nameInput").value = "";
  document.getElementById("learnInput").value = "";
};