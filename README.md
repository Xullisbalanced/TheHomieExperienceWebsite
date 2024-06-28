# The Homie Experience Website

Welcome to The Homie Experience Website! This project is designed to provide a smooth and engaging experience for a snowboard instruction company. This guide will walk you through the steps to set up your development environment, clone the repository, and start working on the project.

## Prerequisites

Before you begin, ensure you have the following installed on your computer:
- [Git](https://git-scm.com/)
- [Node.js and npm](https://nodejs.org/)
- [Visual Studio Code (VS Code)](https://code.visualstudio.com/)

### Step-by-Step Guide

### Step 1: Install Git

1. **Download Git:**
   - Go to the [Git download page](https://git-scm.com/downloads) and download the appropriate version for your operating system.
   
2. **Install Git:**
   - Follow the installation instructions provided on the Git download page.

3. **Verify Git Installation:**
   - Open your terminal (Command Prompt, PowerShell, or Terminal) and type:
     ```sh
     git --version
     ```
   - You should see the installed Git version.

### Step 2: Install Node.js and npm

1. **Download Node.js:**
   - Go to the [Node.js download page](https://nodejs.org/en/download/) and download the LTS version.

2. **Install Node.js:**
   - Follow the installation instructions provided on the Node.js download page.

3. **Verify Node.js and npm Installation:**
   - Open your terminal and type:
     ```sh
     node --version
     npm --version
     ```
   - You should see the installed versions of Node.js and npm.

### Step 3: Install Visual Studio Code (VS Code)

1. **Download VS Code:**
   - Go to the [VS Code download page](https://code.visualstudio.com/Download) and download the appropriate version for your operating system.

2. **Install VS Code:**
   - Follow the installation instructions provided on the VS Code download page.

### Step 4: Clone the Repository

1. **Open VS Code:**
   - Launch Visual Studio Code.

2. **Open Terminal in VS Code:**
   - Go to the menu bar and select `Terminal` > `New Terminal`.

3. **Clone the Repository:**
   - In the terminal, type the following command to clone the repository:
     ```sh
     git clone https://github.com/Xullisbalanced/TheHomieExperienceWebsite.git
     ```
   - This will create a local copy of the repository on your computer.

4. **Open the Project:**
   - In VS Code, go to `File` > `Open Folder` and select the cloned repository folder.

### Step 5: Install Project Dependencies

1. **Navigate to the Project Directory:**
   - In the terminal, change to the project directory:
     ```sh
     cd TheHomieExperienceWebsite
     ```

2. **Install Dependencies:**
   - Run the following command to install the project dependencies:
     ```sh
     npm install
     ```

### Step 6: Run the Project

1. **Start the Development Server:**
   - Run the following command to start the development server:
     ```sh
     npm start
     ```

2. **Open the Project in Your Browser:**
   - The development server will automatically open the project in your default web browser. If it doesn't, you can manually navigate to [http://localhost:3000](http://localhost:3000).

### Using Source Control in VS Code

1. **Open Source Control Panel:**
   - In VS Code, click on the Source Control icon in the Activity Bar on the left side of the window.

2. **Stage Changes:**
   - Click the `+` icon next to the files you want to stage for commit.

3. **Commit Changes:**
   - Enter a commit message in the input box and click the checkmark icon to commit your changes.

4. **Push Changes:**
   - Click the ellipsis (`...`) at the top of the Source Control panel and select `Push`.

### Basic Git Commands

1. **Clone a Repository:**
   ```sh
   git clone <repository_url>
   ```

2. **Check Status:**
   ```sh
   git status
   ```

3. **Stage Changes:**
   ```sh
   git add <file_name>
   ```

4. **Commit Changes:**
   ```sh
   git commit -m "Your commit message"
   ```

5. **Push Changes:**
   ```sh
   git push origin <branch_name>
   ```

6. **Pull Changes:**
   ```sh
   git pull origin <branch_name>
   ```

7. **Create a New Branch:**
   ```sh
   git checkout -b <new_branch_name>
   ```

8. **Switch Branches:**
   ```sh
   git checkout <branch_name>
   ```

### Commit Message Guidelines

- **Format:**
  ```sh
  <type>: <subject>
  ```
- **Types:**
  - `feat`: A new feature
  - `fix`: A bug fix
  - `docs`: Documentation changes
  - `style`: Code style changes (formatting, etc.)
  - `refactor`: Code refactoring
  - `test`: Adding or updating tests
  - `chore`: Miscellaneous tasks

### Example Commit Message

```sh
feat: add new header component with navigation links
```

### Creating and Using Branches

1. **Create a Branch:**
   ```sh
   git checkout -b feature/new-feature
   ```

2. **Switch to a Branch:**
   ```sh
   git checkout feature/new-feature
   ```

3. **Merge a Branch:**
   ```sh
   git checkout main
   git merge feature/new-feature
   ```

4. **Delete a Branch:**
   ```sh
   git branch -d feature/new-feature
   ```

By following these steps, you will be able to set up your development environment, clone the repository, and start working on The Homie Experience Website. Additionally, you will learn how to use Git for version control and collaboration. Happy coding!
