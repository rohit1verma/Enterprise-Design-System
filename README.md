# Welcome to Enterprise design system

## Project info

**URL**:https://enterprise-design-system-git-main-rohit1vermas-projects.vercel.app/

## How can I edit this code?



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

## 🌍 How to Deploy This Project on Vercel

Deploying this project on Vercel is simple and straightforward. Follow these steps:

### 1️⃣ **Prepare the Project**
Ensure the project is ready for deployment:
- Verify that the project has a `package.json` file with all dependencies listed.
- Confirm that the `build` script is defined in `package.json`:
  ```json
  "scripts": {
    "build": "vite build"
  }
  ```
- Ensure the output directory is set to `dist` (default for Vite).

---

### 2️⃣ **Push the Code to a Git Repository**
- Push your project to a Git hosting service like GitHub, GitLab, or Bitbucket.

---

### 3️⃣ **Connect to Vercel**
1. Go to [Vercel](https://vercel.com/) and log in or create an account.
2. Click on **"New Project"** and import your repository.
3. Follow the prompts to configure the project.

---

### 4️⃣ **Configure Build Settings**
Vercel will automatically detect the framework (Vite) and set the default build settings:
- **Framework**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

If these settings are not detected automatically, you can configure them manually in the Vercel dashboard.

---

### 5️⃣ **Deploy**
- Click **"Deploy"**. Vercel will build and deploy your project.
- Once deployed, you will receive a live URL for your project.

---

### 6️⃣ **Custom Domain (Optional)**
To connect a custom domain:
1. Navigate to **Settings > Domains** in your Vercel project dashboard.
2. Add your custom domain and follow the instructions to configure DNS.
3. Once verified, your project will be accessible via the custom domain.

---

Your project is now live on Vercel! 🎉