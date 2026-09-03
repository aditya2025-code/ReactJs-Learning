# Media Search

A media search app built with React and Vite — created as a hands-on project to learn **Redux Toolkit** and state management in React. It lets users search for photos across multiple stock media APIs (Unsplash and Pexels) from a single interface.

## Link : [Media Search](https://media-search-project67.vercel.app/)

## Why this project

This isn't a from-scratch idea — it's a learning-by-building project. The goal was to get comfortable with:

- Setting up and structuring a **Redux Toolkit** store (slices, reducers, async thunks)
- Connecting React components to Redux state with `react-redux`
- Handling async API calls (search requests, loading/error states) the "Redux way"
- Client-side routing with `react-router-dom`
- Styling with **Tailwind CSS v4** via the Vite plugin

## Tech Stack

| Category         | Tool/Library                          |
|-------------------|----------------------------------------|
| Framework         | React 19                              |
| Build tool        | Vite                                  |
| State management  | Redux Toolkit + React Redux           |
| Routing           | React Router DOM                      |
| HTTP client       | Axios                                 |
| Styling           | Tailwind CSS                          |
| Notifications     | React Toastify                        |
| Linting           | ESLint                                |

## Media APIs used

- [Unsplash API](https://unsplash.com/developers)
- [Pexels API](https://www.pexels.com/api/)

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- API keys from [Unsplash](https://unsplash.com/developers) and [Pexels](https://www.pexels.com/api/)

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd media-search

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the project root and add your API keys:

```
VITE_UNSPLASH_KEY="your-unsplash-access-key"
VITE_PEXELS_KEY="your-pexels-api-key"
```

> ⚠️ Never commit your `.env` file — it's already excluded via `.gitignore`.

### Running the app

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (default Vite port).

### Other scripts

| Command           | Description                          |
|--------------------|---------------------------------------|
| `npm run dev`      | Start the development server          |
| `npm run build`    | Build the app for production          |
| `npm run preview`  | Preview the production build locally  |
| `npm run lint`     | Run ESLint checks                     |

## Project Status

🚧 **Work in progress / learning project** — features and structure may change as new Redux and React concepts are explored and applied.

## Learnings & Notes

This section is a running log of concepts picked up while building:

- [ ] Redux Toolkit `createSlice` and `configureStore`
- [ ] Async data fetching with `createAsyncThunk`
- [ ] Managing loading/error/success states in the store
- [ ] Combining multiple API sources into one search experience
- [ ] Routing between search and detail views

## License

This project is for personal learning purposes.