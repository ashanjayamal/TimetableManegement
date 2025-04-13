# Departmental Timetable Organizer

![Application Screenshot](https://github.com/user-attachments/assets/5d9a75d9-be31-4816-a477-2b9b8fd27443)

A web-based application for managing and viewing university department timetables, including master schedules, hall allocations, and lecturer timetables.

## Features

- **Three View Modes**:
  - Master Timetable (by year and subject)
  - Hall Timetable (by lecture hall)
  - Lecturer Timetable (by faculty member)

- **Interactive Tables**:
  - Clean default states with helpful placeholders
  - Responsive design for all screen sizes
  - Hover effects for better readability

- **Additional Information**:
  - Course details with venues and lecturers
  - Special notations for courses (optional/restricted)
  - Tutorial sessions displayed separately

Here's a comprehensive `README.md` file for your Timetable Application:

```markdown
# Departmental Timetable Organizer

![Application Screenshot](./screenshot.png)

A web-based application for managing and viewing university department timetables, including master schedules, hall allocations, and lecturer timetables.

## Features

- **Three View Modes**:
  - Master Timetable (by year and subject)
  - Hall Timetable (by lecture hall)
  - Lecturer Timetable (by faculty member)

- **Interactive Tables**:
  - Clean default states with helpful placeholders
  - Responsive design for all screen sizes
  - Hover effects for better readability

- **Additional Information**:
  - Course details with venues and lecturers
  - Special notations for courses (optional/restricted)
  - Tutorial sessions displayed separately

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/timetable-organizer.git
   ```

2. Navigate to the project directory:
   ```bash
   cd timetable-organizer
   ```

3. Open `index.html` in your browser (no server required)

## Data Structure

The application uses a JSON-like data structure:

```javascript
const data = [
  {
    Year: "First Year",
    Day: "Monday",
    Time: "08.00 - 08.50",
    Subject: "Mathematics",
    "Course Code": "MAT 001 2.0",
    Course: "Calculus I",
    Hall: "M1",
    Lecturer: "Mr. T. M. D. Jayasinghe",
    Notation: "O" // Optional field for special notations
  },
  // ... more entries
];
```

## Customization

### Adding Data
1. Edit the `data` array in `index.html`
2. Add venue mappings in the `data_venue` object
3. Add notation definitions in `notationDefinitions`

### Styling
Modify the CSS variables in the `:root` selector to match your institution's colors:

```css
:root {
  --primary-dark: #0f2536;     /* Dark blue */
  --primary-light: #f2ead9;    /* Cream */
  --accent-gold: #d4a95b;      /* Gold */
  --text-dark: #333333;        /* Dark gray */
}
```

## Usage Instructions

1. **Master Timetable**:
   - Select year and subject from dropdowns
   - View weekly schedule and course details

2. **Hall Timetable**:
   - Select a lecture hall
   - View hall schedule and courses

3. **Lecturer Timetable**:
   - Select a lecturer
   - View their schedule and courses

## Dependencies

- [Bootstrap 5](https://getbootstrap.com/)
- [Font Awesome](https://fontawesome.com/)
- [jQuery](https://jquery.com/)

## Browser Support

The application works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## Screenshots


![Master Timetable View](./screenshots/master-view.png)
*Master timetable showing weekly schedule*

![Hall Timetable View](https://github.com/user-attachments/assets/834d5b3d-c828-4ebb-847e-8be7acf21126)
*Hall timetable showing room allocations*





