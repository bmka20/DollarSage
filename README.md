<p align="center">
    <img src="dollarsage-app/public/assets/images/wizard.png" alt="DollarSage Logo" width="300">
</p>




# DollarSage
DollarSage is a comprehensive web application developed with Next.js. This documentation offers an in-depth guide to the application's structure, features, and setup instructions.

## Table of Contents
- [Features](#features)
- [Components](#components)
- [Data Models](#data-models)
- [Configuration & Dependencies](#configuration--dependencies)
- [Setup & Development](#setup--development)

## Features

### Homepage
- Located in `index.tsx`.
- Introduces users to DollarSage via a hero section.
- Utilizes the `LandingPageColumn` component for layout and styling.

### User Authentication
- **Login**: Located in `login/index.tsx`. This page is dedicated to user login functionalities and renders the `LoginForm` component.
- **Signup**: Found in `signup/index.tsx`. This is the user registration page, making use of the `SignupForm` component.
- **Forgot Password**: Components related to the password recovery process are housed here.

### User Profile
- File path: `profile/index.tsx`.
- Displays and potentially allows the updating of user-specific data.
- Manages sessions using the `useSession` hook from `next-auth/react`.

### Other Features 
- **Lessons**: A section for users to explore educational modules.
- **Leaderboard**: A feature to view user rankings or scores.
- **Assistant**: Provides an interactive guide or assistant functionality.

## Data Models

### User
- Located in `models/user.tsx`.
- Defines user data with fields such as `email` and `fullName`.
- Employs Mongoose for schema definition and MongoDB interactions.

## Configuration & Dependencies

### Next.js Configuration
- Configurations for the Next.js framework are found in `next.config.js`.
- The file contains basic configurations without specific customizations.

### Dependencies
- **Core Libraries**: These include Next.js, React, and TypeScript.
- **Styling**: The app uses TailwindCSS and Styled Components for styling.
- **Database & Authentication**: MongoDB, Mongoose, and NextAuth are implemented.
- **Utilities**: Axios and Classnames are utilized for various tasks.
- **Development Dependencies**: The app employs linting tools like ESLint.

## Setup & Development

1. **Installation**: To install all the required dependencies, run:
   ```bash
   npm install
   npm run dev
   ```
   

2. **IProduction Build**: Create a build for production using:

  ```bash
  Copy code
  npm run build
  ```

3. **I Start in Production**: To initiate the built application, use:

  ```bash
  Copy code
  npm start
  ```

4. **Linting: To inspect the codebase for linting issues, run**:
  ```bash
  Copy code
  npm run lint
  ```

For further details or queries regarding specific configurations or features, users are recommended to delve into the respective directories and files.
