// FIXED: Now uses Guestbook namespace instead of global variable
Guestbook.renderEntry = function(name, learn) {
  const li = document.createElement("li");
  li.className = "guest-entry";
  li.innerHTML = `<div class="guest-info"><strong>${name}</strong><span>Learned: ${learn}</span></div>`;
  this.getList().appendChild(li);
};