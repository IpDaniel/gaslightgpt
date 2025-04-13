# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/e762a500-b9da-437e-b8ba-78becede8b33

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/e762a500-b9da-437e-b8ba-78becede8b33) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/e762a500-b9da-437e-b8ba-78becede8b33) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes it is!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)


## React reference because I am dumb

project-root/
├── node_modules/       # All installed dependencies (created by npm i)
├── public/             # Static assets that don't need processing
├── src/                # Source code - where most of your work happens
│   ├── assets/         # Images, fonts, etc.
│   ├── components/     # Reusable UI components
│   ├── pages/          # Components that represent entire pages
│   ├── hooks/          # Custom React hooks
│   ├── context/        # React context providers
│   ├── lib/            # Utility functions and helpers
│   ├── styles/         # CSS/styling files
│   ├── App.tsx         # Main application component
│   ├── main.tsx        # Entry point of the application
│   └── index.css       # Global styles
├── .gitignore          # Files to ignore in git
├── index.html          # HTML template
├── package.json        # Project metadata and dependencies
├── package-lock.json   # Exact dependency versions
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite configuration
└── README.md           # Project documentation

## TODO
- [ ] Add icons for the chat responses
- [ ] Make the gray line only appear when the chat is active
- [ ] Create the entire backend
- [ ] connect the backend to the frontend
- [ ] add the share button and 3 dots

