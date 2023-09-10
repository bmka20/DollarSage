<p align="center">
    <img src="dollarsage-app/public/assets/images/wizard.png" alt="DollarSage Logo" width="300">
</p>




# DollarSage
DollarSage is a comprehensive web application developed with Next.js. This documentation offers an in-depth guide to the application's structure, features, and setup instructions.


## Why DollarSage is Amazing and Important 🌟

### 1. **Empowerment through Education** 📚
DollarSage is not just another finance app; it's a platform that believes in empowering its users through education. By providing valuable lessons, modules, and AI-driven insights, it ensures that users don't just manage their finances, but truly understand them.

### 2. **Intelligent AI Assistance** 🤖
DollarSage harnesses the power of advanced AI models to provide users with real-time feedback, intelligent analysis, and personalized finance advice. The chatbot interface allows users to ask intricate financial queries and get precise and knowledgeable responses instantly.

### 3. **User-Centric Design** 🎨
Every feature and interface in DollarSage, including the AI Chatbot, is crafted with the user in mind. Its intuitive design ensures that users, whether they are novices or experts in finance, can navigate and benefit from the platform with ease.

### 4. **Secure and Reliable** 🔒
In the world of digital finance, security is paramount. DollarSage uses state-of-the-art encryption and security practices to ensure that user data, finances, and AI interactions are always protected.

### 5. **Community and Collaboration** 🤝
DollarSage recognizes the power of community. With features like the leaderboard, user interactions, and AI-driven community challenges, it fosters a sense of collaboration and friendly competition, making finance fun and communal.

### 6. **Continuous Improvement** 🚀
The world of finance is always evolving, and so is DollarSage. The team behind it is continuously working to improve, innovate, and adapt to the changing financial landscape and advancements in AI to serve its users better.

In essence, DollarSage is not just an app; it's a movement. It's about changing the way people perceive and interact with their finances, making them more informed, empowered, and secure in their financial decisions.



## Table of Contents
- [Features](#features)
- [Components](#components)
- [Data Models](#data-models)
- [AI Chatbot](#ai-chatbot)
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

# AI Chatbot

This project is a chatbot interface that utilizes the OpenAI GPT-3.5-turbo model to provide users with intelligent and context-aware responses. It's built using Next.js for the frontend and backend API endpoints.

## Features

- Simple, clean UI for chat interaction
- Rate limiting to avoid API overuse
- Seamless integration with OpenAI's API

## Setup and Installation

### 1. Clone the Repository

\```bash
git clone [your-repository-link]
cd [repository-name]
\```

### 2. Install Dependencies

\```bash
npm install
\```

### 3. Setup Environment Variables

Create a `.env` file in the root directory and add the following:

\```bash
OPENAI_API_KEY=your_openai_api_key
\```

Replace `your_openai_api_key` with your actual OpenAI API key.

### 4. Run the Development Server

\```bash
npm run dev
\```

Your application should now be running at `http://localhost:3000`.

## Usage

Navigate to the main page and start chatting with the AI by typing into the input box and pressing the "Ask" button.

## Contribution

Contributions, issues, and feature requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

MIT License. See `LICENSE` for more information.

## Acknowledgments

- OpenAI for providing the GPT-3.5-turbo model

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
