# React and Redux Learning

A hands-on learning repository for building a strong foundation in React and
working toward React-Redux. Each numbered folder is a small, independent Vite
application focused on one concept or project. The examples are intentionally
simple so that the component structure, state updates, and data flow are easy
to inspect.

## Learning path

Work through the folders in order. The later projects build on the React
fundamentals introduced earlier.

| Folder | Focus |
| --- | --- |
| `01_folder` | React and Vite basics |
| `02_components` | Creating and composing components |
| `03_props` | Passing data and callbacks with props |
| `04_card_project` | Reusable card components |
| `06_tailwind_css` | Styling React interfaces with Tailwind CSS |
| `07_ui_project` | Building a larger multi-component UI |
| `09_useState` | Local state with `useState` |
| `11_form_Handiling` | Form events and controlled inputs |
| `12_two_way_binding` | Keeping form values and state in sync |
| `13_notes_app` | Adding and deleting items from a list |
| `14_localStorage` | Persisting client-side data |
| `15_API_calling` | Fetching and rendering API data |
| `16_useEffect` | Side effects and component lifecycle behavior |
| `17_gallary_project` | Rendering a gallery from data |
| `18_react_router_DOM` | Client-side routing with React Router |
| `19_routing_advanced` | More advanced routing patterns |
| `00_Projects/01_Login_Form` | Login form project |
| `00_Projects/02_BMI_Calculator` | BMI calculator project |
| `00_Projects/03_Counter_App` | Counter app with state and events |

The gaps in the numbering are reserved for future lessons.

## What this repository teaches

- JSX, components, props, and component composition
- State management with `useState`
- Controlled forms and event handling
- Lists, conditional rendering, and reusable UI
- Browser persistence with `localStorage`
- API requests and asynchronous data
- Side effects with `useEffect`
- Navigation and nested application structure with React Router
- Patterns that prepare the codebase for centralized state with Redux

## Running a lesson

Each folder is its own Vite project with its own `package.json`. Change into
the folder you want to study, install its dependencies, and start the
development server:

```bash
cd 09_useState
npm install
npm run dev
```

Vite will print a local URL, usually `http://localhost:5173`. Stop the server
with `Ctrl+C`.

To use one of the project exercises:

```bash
cd 00_Projects/03_Counter_App
npm install
npm run dev
```

## Available scripts

The lesson projects use the standard Vite scripts below:

```bash
npm run dev      # Start the development server
npm run build    # Create a production build
npm run preview  # Preview the production build locally
npm run lint     # Check the project with ESLint
```

Run commands from inside the specific lesson directory. Dependencies are not
shared at the repository root.

## Suggested React-Redux next steps

After completing the React lessons, continue by adding Redux Toolkit to a new
practice project:

1. Learn the store, slices, actions, and reducers.
2. Wrap the application with `Provider`.
3. Read state with `useSelector`.
4. Update state with `useDispatch`.
5. Practice async requests with `createAsyncThunk` or RTK Query.
6. Refactor one of the existing projects, such as the notes app, to use a
   Redux store instead of local component state.

## Repository conventions

- Keep each lesson self-contained.
- Prefer small components that demonstrate one idea.
- Read the source and experiment with it rather than treating the projects as
  production templates.
- Add a short README or notes to a lesson when introducing a new concept.

## License

This repository is intended for personal learning and experimentation.
