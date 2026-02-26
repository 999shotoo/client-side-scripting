# Program 4: Angular Development Environment Setup

## Part 1: Installation Steps

### Step 1: Install Node.js and npm

1. **Download Node.js:**
   - Visit https://nodejs.org/
   - Download the LTS (Long Term Support) version
   - Run the installer

2. **Verify Installation:**
   ```bash
   node --version
   npm --version
   ```

### Step 2: Install Angular CLI

1. **Install Angular CLI globally:**
   ```bash
   npm install -g @angular/cli
   ```

2. **Verify Angular CLI installation:**
   ```bash
   ng version
   ```

### Step 3: Create a New Angular Project

```bash
ng new good-morning-app
cd good-morning-app
```

### Step 4: Run the Development Server

```bash
ng serve
```

Open browser at `http://localhost:4200/`

---

## Part 2: Good Morning Program

### Create the Component Files

See the following files in the `04-angular-good-morning/` folder:
- `app.component.ts` - Component logic
- `app.component.html` - Template
- `app.component.css` - Styles

### To Use This Program:

1. Create a new Angular project or use existing one
2. Replace the contents of `src/app/app.component.ts` with the provided TypeScript file
3. Replace the contents of `src/app/app.component.html` with the provided HTML file
4. Replace the contents of `src/app/app.component.css` with the provided CSS file
5. Run `ng serve` to view the application
