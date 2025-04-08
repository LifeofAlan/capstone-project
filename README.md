# capstone-project
Architecture
StyleSage follows a standard component-based architecture facilitated by React.

• Frontend Framework: React (v18.3.1) with Vite for the build tooling and development server.

• Routing: react-router-dom (v7.1.0) is used for client-side routing, enabling navigation between different pages (Home, Recommendations, Profile, Outfit of the Day) without full page reloads. HashRouter is employed, likely for simpler deployment scenarios (e.g., GitHub Pages) where server-side configuration for history routing might be complex.

• State Management: React Context API (StylePreferencesContext) is used for managing global state related to user's style preferences. This allows various components across the application to access and update these preferences without prop drilling.

• Styling: Tailwind CSS (v3.4.17) provides utility-first CSS classes for rapid UI development. A custom theme (colors) is defined in tailwind.config.js. PostCSS with Autoprefixer ensures CSS compatibility across browsers.

• Animation: framer-motion (v11.0.8) is used for adding animations and transitions, enhancing the user interface's visual appeal and interactivity.

• Icons: react-icons (v5.4.0) provides a library of commonly used icons.


PROJECT SETUP AND RUNNING

1. Prerequisites: Node.js and npm (or yarn/pnpm) installed.

2. Clone the repository: (Assuming the code is in a Git repository)

bash
git clone <repository-url>
    cd capstone-project/project-files
    
3. Install dependencies:

bash
npm install

4. Run the development server:

bash
npm run dev
This will start the Vite development server, typically available at http://localhost:5173.

5. Build for production:

bash
npm run build
This command first runs ESLint (npm run lint) and then creates an optimized production build in the dist directory.

6. Linting:

• npm run lint: Run ESLint to check for code quality issues.

• npm run lint:error: Run ESLint and only report errors (quieter output).

7. Preview Production Build:

bash
npm run preview
This command serves the contents of the dist directory locally, allowing you to test the production build.


