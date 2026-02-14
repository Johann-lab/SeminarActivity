// FIXED: Encapsulated namespace to avoid global variable pollution
const Guestbook = {
  list: null,

  init: function() {
    this.list = document.getElementById("guest-list");
    this.loadEntries();
  },

  loadEntries: function() {
    const savedData = localStorage.getItem("guestbook_entries");
    if (savedData) {
      const entries = JSON.parse(savedData);
      entries.forEach((entry) => this.renderEntry(entry.name, entry.learn));
    }
  },

  getList: function() {
    return this.list;
  }
};

// Load data on startup
window.onload = function () {
  Guestbook.init();
};