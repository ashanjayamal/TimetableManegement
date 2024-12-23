document.getElementById('lastUpdated').textContent = new Date().toLocaleDateString();

// Load CSV data
Papa.parse('Book2.csv', {
    download: true,
    header: true,
    complete: function(results) {
        const data = results.data;
        populateDropdowns(data);
        renderTimetable(data);
    }
});

function populateDropdowns(data) {
    const years = [...new Set(data.map(row => row.Year))];
    const subjects = [...new Set(data.map(row => row.Subject))];
    
    const yearSelect = document.getElementById('yearInput');
    const subjectSelect = document.getElementById('subjectInput');

    years.forEach(year => {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearSelect.appendChild(option);
    });

    subjects.forEach(subject => {
        const option = document.createElement('option');
        option.value = subject;
        option.textContent = subject;
        subjectSelect.appendChild(option);
    });
}

function renderTimetable(data) {
    const tbody = document.getElementById('timetable-body');
    tbody.innerHTML = '';
    
    data.forEach(row => {
        const tr = document.createElement('tr');
        ['Year', 'Time', 'Subject', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].forEach(key => {
            const td = document.createElement('td');
            td.textContent = row[key] || '';
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });
}
