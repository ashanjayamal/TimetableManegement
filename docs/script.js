<div class="main-content">
    <section id="master-timetable">
        <h1 class="text-center">Timetable - Semester II</h1>
        <h2 class="text-center">2024</h2>
        <h3 class="text-center">Department of Mathematics</h3>
        <h4 class="text-center">University of Sri Jayewardenepura</h4>
        <div class="row">
            <div class="col-md-6">
                <label for="yearInput" class="form-label">Choose a Year:</label>
                <select id="yearInput" class="form-select"></select>
            </div>
            <div class="col-md-6">
                <label for="subjectInput" class="form-label">Choose a Subject:</label>
                <select id="subjectInput" class="form-select"></select>
            </div>
        </div>
        <table class="table table-bordered mt-4">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Time</th>
                    <th>Subject</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                </tr>
            </thead>
            <tbody id="timetable-body"></tbody>
        </table>
    </section>

    <section id="table2">
        <h4>Table 2: Course Titles, Lecturers, and Venues</h4>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Course Code</th>
                    <th>Title</th>
                    <th>Lecturer</th>
                    <th>Hall</th>
                </tr>
            </thead>
            <tbody id="table2-body"></tbody>
        </table>
    </section>

    <section id="hall-timetable">
        <h4>Table 3: Hall Timetable</h4>
        <label for="hallInput" class="form-label">Choose the Hall:</label>
        <select id="hallInput" class="form-select">
            <option value="M1">Mathematics Lecture Theatre 1</option>
            <option value="M2">Mathematics Lecture Theatre 2</option>
            <!-- Add other hall options here -->
        </select>
        <table class="table table-bordered mt-4">
            <thead>
                <tr>
                    <th>Time</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                </tr>
            </thead>
            <tbody id="table3-body"></tbody>
        </table>
    </section>
</div>
