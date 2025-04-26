# CRUD Posts App

A stylish, smooth CRUD application powered by Redux Toolkit and Next.js 14.  
Built with a modern tech stack and a love for clean code.

## 🛠 Tech Stack

- **Next.js 14** (App Router)
- **React 18** (Hooks)
- **Redux Toolkit** (store, slices, actions, selectors, async thunks)
- **Material UI v5**
- **JavaScript (ES6+)**
- **Fake API:** [JSONPlaceholder](https://jsonplaceholder.typicode.com)

## 🚀 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/your-username/crud-posts-app.git
```

2. Navigate into the project directory:

```bash
cd posts
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```plaintext
/src
 ├── app/
 │    ├── layout.js       # Main layout
 │    └── page.js         # Home page
 │
 ├── features/
 │    └── posts/
 │         ├── postsSlice.js       # Redux slice for posts
 │         ├── postsThunks.js      # Async thunks for API calls
 │         ├── postsSelectors.js   # Selectors for posts state
 │         └── PostsList.jsx       # Component to list all posts
 │
 ├── components/
 │    ├── AppBar.jsx       # Top navigation bar with theme switch
 │    ├── Drawer.jsx       # Left side navigation menu
 │    ├── Hero.jsx         # Hero section for home page
 │    ├── PostCard.jsx     # Card component for individual posts
 │    ├── Header.jsx
 │    └── Providers.js     # Theme and Redux providers
 │    
 ├── store/
 │    └── store.js         # Redux store setup
 │
 ├── theme/
 │    └── theme.js         # Light and dark Material UI themes
 │
 └── utils/
      └── api.js           # API functions for fetching posts
```

## 🧭 Pages Overview

### Home `/`
- Hero section with a big title and two buttons:
  - **View Posts** → `/posts`
  - **Create Post** → `/posts/create`
- AppBar with:
  - Theme switcher (Light/Dark mode)
  - Menu button to open Drawer
- Drawer with navigation links:
  - Home
  - All Posts
  - Create Post

### Posts List `/posts`
- Search field (TextField + Search Icon) to filter posts by title.
- Skeleton loaders while fetching posts.
- Grid layout with Post Cards:
  - Each card shows avatar, title, short body excerpt, and delete action.
- SpeedDial for quick access to post creation.

### Post Details `/posts/[id]`
- Full post content in a Card.
- CircularProgress while loading.
- CardHeader, CardContent, and CardActions:
  - Delete button
  - Back to list button

### Create Post `/posts/create`
- Multi-step form (Stepper):
  - Step 1: Title input
  - Step 2: Body input
  - Step 3: Preview
- Dialog for preview before final submission.
- Snackbar confirmation after successful post creation.

## ✨ Features

- Full **CRUD** functionality for posts (Create, Read, Update, Delete) via Redux Toolkit and async thunks.
- Fully **responsive** and **themeable** UI with Material UI.
- Smooth **navigation** with App Router and persistent layout (AppBar + Drawer).
- Clean and **well-organized codebase**.

## 🔥 Recommendations for Future Improvements

- **Add unit tests** with Jest and React Testing Library.
- **Migrate to RTK Query** for simpler API management.
- **Enhance responsiveness** for mobile and tablet screens.
- **Improve UX**:
  - Add spinners/loaders for all async actions.
  - Handle API errors gracefully with user-friendly messages.
  - Add confirmation dialogs (e.g., when deleting a post).

---


