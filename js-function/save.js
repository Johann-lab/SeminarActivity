 const list = document.getElementById('guest-list');

        // Load data on startup
        window.onload = function() {
            const savedData = localStorage.getItem('guestbook_entries');
            if (savedData) {
                const entries = JSON.parse(savedData);
                entries.forEach(entry => renderEntry(entry.name, entry.learn));
            }
        };