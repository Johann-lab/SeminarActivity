function addEntry() {
            const name = document.getElementById('nameInput').value;
            const learn = document.getElementById('learnInput').value;

            if (name === '' || learn === '') {
                alert("Please fill in both fields!");
                return;
            }

            // 1. UI Logic
            renderEntry(name, learn);

            // 2. Data Persistence Logic
            saveToStorage(name, learn);

            // 3. Cleanup Logic
            document.getElementById('nameInput').value = '';
            document.getElementById('learnInput').value = '';
        }