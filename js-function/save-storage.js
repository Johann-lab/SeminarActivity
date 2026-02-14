function saveToStorage(name, learn) {
            let entries = [];
            const savedData = localStorage.getItem('guestbook_entries');
            if (savedData) {
                entries = JSON.parse(savedData);
            }
            entries.push({ name: name, learn: learn });
            localStorage.setItem('guestbook_entries', JSON.stringify(entries));
        }