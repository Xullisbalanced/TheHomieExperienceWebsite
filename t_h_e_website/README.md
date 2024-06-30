# The Homie Experience Website

Welcome to The Homie Experience Website! This project is designed to provide a smooth and engaging experience for a snowboard instruction company. This guide will walk you through the steps to set up your development environment, clone the repository, and start working on the project.

## Prerequisites

Before you begin, ensure you have the following installed on your computer:

- Git
- Node.js and npm
- Visual Studio Code (VS Code)
- Blender

## Step-by-Step Guide

### Step 1: Install Git

**Download Git:**
- Go to the [Git download page](https://git-scm.com/download) and download the appropriate version for your operating system.

**Install Git:**
- Follow the installation instructions provided on the Git download page.

**Verify Git Installation:**
- Open your terminal (Command Prompt, PowerShell, or Terminal) and type:
  ```sh
  git --version
  ```
  You should see the installed Git version.

### Step 2: Install Node.js and npm

**Download Node.js:**
- Go to the [Node.js download page](https://nodejs.org) and download the LTS version.

**Install Node.js:**
- Follow the installation instructions provided on the Node.js download page.

**Verify Node.js and npm Installation:**
- Open your terminal and type:
  ```sh
  node --version
  npm --version
  ```
  You should see the installed versions of Node.js and npm.

### Step 3: Install Visual Studio Code (VS Code)

**Download VS Code:**
- Go to the [VS Code download page](https://code.visualstudio.com/Download) and download the appropriate version for your operating system.

**Install VS Code:**
- Follow the installation instructions provided on the VS Code download page.

### Step 4: Install Blender

**Download Blender:**
- Go to the [Blender download page](https://www.blender.org/download/) and download the appropriate version for your operating system.

**Install Blender:**
- Follow the installation instructions provided on the Blender download page.

### Step 5: Clone the Repository

**Open VS Code:**
- Launch Visual Studio Code.

**Open Terminal in VS Code:**
- Go to the menu bar and select `Terminal > New Terminal`.

**Clone the Repository:**
- In the terminal, type the following command to clone the repository:
  ```sh
  git clone https://github.com/Xullisbalanced/TheHomieExperienceWebsite.git
  ```
  This will create a local copy of the repository on your computer.

**Open the Project:**
- In VS Code, go to `File > Open Folder` and select the cloned repository folder.

### Step 6: Install Project Dependencies

**Navigate to the Project Directory:**
- In the terminal, change to the project directory:
  ```sh
  cd TheHomieExperienceWebsite
  ```

**Install Dependencies:**
- Run the following command to install the project dependencies:
  ```sh
  npm install
  ```

### Step 7: Create a React Application

**Create React App:**
- If you're starting a new React project within the repository, you can use Create React App:
  ```sh
  npx create-react-app my-app
  ```
  This will create a new directory called `my-app` with a basic React setup.

### Step 8: Run the Project

**Start the Development Server:**
- Run the following command to start the development server:
  ```sh
  npm start
  ```
  The development server will automatically open the project in your default web browser. If it doesn't, you can manually navigate to `http://localhost:3000`.

### Step 9: Using Blender for 3D Models

**Open Blender:**
- Launch Blender.

**Create/Import Models:**
- Create your 3D models or import existing ones. Save your project frequently.

**Export Models:**
- Export your models in a format that can be used in web projects, such as `.gltf` or `.obj`.

**Integrate with React:**
- Use libraries like `three.js` or `react-three-fiber` to integrate 3D models into your React application.

### Using Source Control in VS Code

**Open Source Control Panel:**
- In VS Code, click on the Source Control icon in the Activity Bar on the left side of the window.

**Stage Changes:**
- Click the + icon next to the files you want to stage for commit.

**Commit Changes:**
- Enter a commit message in the input box and click the checkmark icon to commit your changes.

**Push Changes:**
- Click the ellipsis (...) at the top of the Source Control panel and select Push.

### Basic Git Commands

- **Clone a Repository:**
  ```sh
  git clone <repository_url>
  ```

- **Check Status:**
  ```sh
  git status
  ```

- **Stage Changes:**
  ```sh
  git add <file_name>
  ```

- **Commit Changes:**
  ```sh
  git commit -m "Your commit message"
  ```

- **Push Changes:**
  ```sh
  git push origin <branch_name>
  ```

- **Pull Changes:**
  ```sh
  git pull origin <branch_name>
  ```

- **Create a New Branch:**
  ```sh
  git checkout -b <new_branch_name>
  ```

- **Switch Branches:**
  ```sh
  git checkout <branch_name>
  ```

### Commit Message Guidelines

**Format:**
  ```sh
  <type>: <subject>
  ```

**Types:**
  - **feat:** A new feature
  - **fix:** A bug fix
  - **docs:** Documentation changes
  - **style:** Code style changes (formatting, etc.)
  - **refactor:** Code refactoring
  - **test:** Adding or updating tests
  - **chore:** Miscellaneous tasks

**Example Commit Message:**
  ```sh
  feat: add new header component with navigation links
  ```

### Creating and Using Branches

- **Create a Branch:**
  ```sh
  git checkout -b feature/new-feature
  ```

- **Switch to a Branch:**
  ```sh
  git checkout feature/new-feature
  ```

- **Merge a Branch:**
  ```sh
  git checkout main
  git merge feature/new-feature
  ```

- **Delete a Branch:**
  ```sh
  git branch -d feature/new-feature
  ```

### Best Practices for a Professional Project

1. **Regular Commits:**
   - Commit changes frequently with clear and concise messages.

2. **Branching Strategy:**
   - Use feature branches for new features and bug fixes.
   - Keep the main branch clean and deployable.

3. **Code Reviews:**
   - Use pull requests for code reviews before merging changes.

4. **Consistent Code Style:**
   - Follow a consistent coding style and use linters like ESLint for JavaScript/React projects.

5. **Documentation:**
   - Maintain clear and up-to-date documentation for the project.

6. **Collaboration:**
   - Communicate regularly with team members and use project management tools like Trello or Jira.

7. **Testing:**
   - Write tests for new features and bug fixes to ensure code quality.

By following these steps, you will be able to set up your development environment, clone the repository, and start working on The Homie Experience Website. Additionally, you will learn how to use Blender for 3D models, create a React application, and use Git for version control and collaboration. Happy coding!
