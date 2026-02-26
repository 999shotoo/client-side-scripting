# Programming Assignment - All Programs Completed ✓

This folder contains all 10 programming assignments with complete implementations.

## 📋 Table of Contents

### Program 1: JavaScript Hello World
**File:** `01-hello-world.html`
- Displays "Hello World" using three methods:
  - `console.log()` - Output in browser console
  - `document.write()` - Output in the webpage
  - `alert()` - Output in a popup dialog

**How to run:** Open the HTML file in any web browser (Chrome, Firefox, Edge, etc.)

---

### Program 2: Python Welcome Script
**File:** `02-welcome.py`
- Displays "Welcome" message using Python
- Shows multiple ways to print in Python

**How to run:** 
```bash
python 02-welcome.py
```
Or in PowerShell:
```powershell
python 02-welcome.py
```

---

### Program 3: JSON Objects
**Files:** 
- `03-objects.json` - Pure JSON data file
- `03-json-objects.html` - Interactive HTML demonstration

**Content:**
- Student object with grades and courses
- Employee array with details
- Product catalog
- Library book records

**How to run:** Open `03-json-objects.html` in a web browser

---

### Program 4: Angular Development Environment
**Files:**
- `04-ANGULAR-SETUP.md` - Complete installation instructions
- `04-angular-good-morning/` folder containing:
  - `app.component.ts` - Component logic
  - `app.component.html` - Template
  - `app.component.css` - Styling

**Setup Instructions:**
1. Install Node.js from https://nodejs.org/
2. Install Angular CLI: `npm install -g @angular/cli`
3. Create project: `ng new my-app`
4. Copy the component files to your project
5. Run: `ng serve`
6. Open: http://localhost:4200

---

### Program 5: AngularJS Form with Validations
**File:** `05-angularjs-form-validation.html`

**Features:**
- Full Name validation (required, min/max length)
- Email validation
- Password validation with confirmation
- Age validation (18-100)
- Phone number validation (10 digits)
- Gender radio buttons
- Country dropdown
- Interest checkboxes
- Comments textarea
- Terms and conditions checkbox
- Real-time validation feedback
- Form submission with data display

**How to run:** Open in a web browser

---

### Program 6: AngularJS Data Model View
**File:** `06-angularjs-data-model-view.html`

**Features:**
- User Profile data model
- Company information display
- Project statistics dashboard
- Product inventory with search
- Employee records table
- Task list with status badges
- Multiple data structures (objects, arrays, nested data)

**How to run:** Open in a web browser

---

### Program 7: AngularJS Two-Way Data Binding
**File:** `07-angularjs-two-way-binding.html`

**Demonstrates:**
1. Simple text input binding
2. Multiple input binding (user profile)
3. Textarea binding with character count
4. Dropdown selection binding
5. Checkbox binding
6. Radio button binding
7. Range slider binding
8. Color picker binding
9. Shopping cart calculator
10. Reset and load sample data functions

**How to run:** Open in a web browser

---

### Program 8: AngularJS Filters
**File:** `08-angularjs-filters.html`

**Filters Implemented:**
1. **uppercase** - Convert text to uppercase
2. **lowercase** - Convert text to lowercase
3. **currency** - Format numbers as currency
4. **number** - Format numbers with decimals
5. **date** - Format dates in various styles
6. **limitTo** - Limit array/string length
7. **orderBy** - Sort arrays
8. **filter** - Search/filter arrays
9. **json** - Convert objects to JSON
10. **Custom filter** - Reverse text (custom implementation)
11. **Filter chaining** - Combine multiple filters
12. **Controller filters** - Use filters in JavaScript

**How to run:** Open in a web browser

---

### Program 9: AngularJS Events
**File:** `09-angularjs-events.html`

**Events Implemented:**
1. **ng-click** - Click events with counter
2. **ng-dblclick** - Double-click events
3. **ng-mouseenter/ng-mouseleave** - Mouse hover events
4. **ng-mousemove** - Mouse movement tracking
5. **ng-keydown/ng-keyup/ng-keypress** - Keyboard events
6. **ng-change** - Input change detection
7. **ng-focus/ng-blur** - Focus events
8. **ng-submit** - Form submission
9. **ng-copy/ng-cut/ng-paste** - Clipboard events
10. **$event object** - Access event details
11. **Event logging** - Real-time event tracker
12. **Multiple events** - Single element with multiple handlers

**How to run:** Open in a web browser

---

### Program 10: AngularJS Data Table Display
**File:** `10-angularjs-data-table.html`

**Features:**
- **Employee Management Table**
  - Search and filter functionality
  - Department and status filters
  - Sortable columns
  - Action buttons (View, Edit, Delete)
  
- **Product Inventory Table**
  - Category filtering
  - Stock status badges
  - Product ratings
  - Add/refresh functionality

- **Order History Table**
  - Status filtering
  - Order tracking
  - Pagination (5, 10, 20 items per page)
  - Date sorting

- **Student Records Table**
  - Simple display with grades
  - Attendance percentage
  - Sortable fields

- **Dashboard Statistics**
  - Total counts
  - Active user counts
  - Visual stat cards

**How to run:** Open in a web browser

---

## 🚀 Quick Start Guide

### For HTML/JavaScript files (Programs 1, 3, 5-10):
1. Navigate to the folder in File Explorer
2. Double-click any `.html` file
3. It will open in your default web browser

### For Python files (Program 2):
1. Make sure Python is installed: `python --version`
2. Open terminal/PowerShell in the folder
3. Run: `python 02-welcome.py`

### For Angular (Program 4):
1. Install Node.js and npm
2. Run: `npm install -g @angular/cli`
3. Follow instructions in `04-ANGULAR-SETUP.md`

---

## 📁 File Structure

```
New folder/
│
├── 01-hello-world.html                 (Program 1)
├── 02-welcome.py                       (Program 2)
├── 03-objects.json                     (Program 3 - Data)
├── 03-json-objects.html                (Program 3 - Demo)
├── 04-ANGULAR-SETUP.md                 (Program 4 - Instructions)
├── 04-angular-good-morning/            (Program 4 - Angular files)
│   ├── app.component.ts
│   ├── app.component.html
│   └── app.component.css
├── 05-angularjs-form-validation.html   (Program 5)
├── 06-angularjs-data-model-view.html   (Program 6)
├── 07-angularjs-two-way-binding.html   (Program 7)
├── 08-angularjs-filters.html           (Program 8)
├── 09-angularjs-events.html            (Program 9)
├── 10-angularjs-data-table.html        (Program 10)
└── README.md                           (This file)
```

---

## 💡 Tips

- All AngularJS programs use AngularJS 1.8.2 from CDN (no installation needed)
- Programs work offline once loaded (except initial CDN download)
- Use Chrome DevTools (F12) to see console.log() outputs
- All forms include validation and real-time feedback
- Programs are fully commented and styled

---

## 🔧 Troubleshooting

**If HTML files don't open:**
- Right-click → Open With → Choose your browser (Chrome/Firefox/Edge)

**If Python script doesn't run:**
- Install Python from https://www.python.org/downloads/
- Make sure to check "Add Python to PATH" during installation

**If AngularJS features don't work:**
- Check internet connection (for CDN)
- Try a different browser
- Open browser console (F12) to check for errors

---

## ✅ All Programs Completed

All 10 programming assignments have been successfully implemented with:
- ✓ Full functionality
- ✓ Clean, modern UI
- ✓ Comprehensive examples
- ✓ Ready to run
- ✓ Well-documented code

---

**Created:** February 27, 2026
**Status:** All programs complete and tested ✓
