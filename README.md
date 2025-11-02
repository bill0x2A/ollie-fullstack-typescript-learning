# 🚀 Minimal Fullstack Todo App — Learn Fullstack TypeScript Step-by-Step

Welcome to your hands-on learning playground for **fullstack TypeScript development**! This repo includes a super simple, fully working stack with everything you need to build, modify, and learn:

- **Frontend**: React + TypeScript (started with Vite)
- **Backend**: Express + TypeScript
- **Database**: SQLite (via `better-sqlite3`) — _file-based persistence, no setup required_
- **Dev tools**: Single command to install all dependencies and run both apps

Use this setup to understand how frontend and backend communicate, how to manage state and data, and how to build out real features — step by step.

---

## 🧠 Coming from C? Key Differences to Know

If you're used to C and diving into JavaScript and TypeScript for the first time, here are a few major mindset shifts to expect:

### 🔤 1. Typing: Static vs. Dynamic

* **C**: Statically typed—types are checked at compile time.
* **JavaScript**: Dynamically typed—type errors happen at runtime.
* **TypeScript**: Adds static typing on top of JS—great for a C mindset.

```ts
// TypeScript example
type Todo = { id: number; text: string; completed: number };
```

### 🔄 2. Execution Model

* **C**: Compiled, low-level, manual memory management.
* **JS**: Runs in a VM (Node or browser), garbage-collected, **single-threaded**, heavily async.
* Think in **callbacks**, **promises**, and `async/await`.

### 🎯 3. Functions = First-Class

* Can be passed as values, stored, and returned.
* Supports **closures** and **arrow functions**:

```js
const greet = (name) => console.log(`Hello ${name}`);
```

### 🗃️ 4. Everything is an Object

* No `struct` keyword; instead, plain objects with dynamic properties.
* Classes exist, but built on top of prototypes.

### 🔧 5. No Manual Memory Management

* No `malloc` or `free`. JS handles garbage collection.

### 📚 Suggested First Steps

1. Learn basics of JS (`let`, `const`, arrow functions, objects, arrays)
2. Use TypeScript early for type safety and better error detection
3. Write small async code using `fetch` or file system APIs
4. Build small CLI tools before jumping into React

---

## 📚 Initial Learning Resources
- [Understanding TypeScript](https://www.typescriptlang.org/docs/handbook/intro.html)
- [React Official Tutorial](https://react.dev/learn/tutorial-tic-tac-toe)
- [Understanding REST APIs](https://www.smashingmagazine.com/2018/01/understanding-using-rest-api/)
- [SQLite for Beginners](https://www.sqlitetutorial.net/)

---


## 🧠 Who is this for?
This repo is designed for **beginners transitioning into fullstack TypeScript**, especially if you're coming from lower-level languages like C/C++ or have touched JavaScript but want a clearer, more modern structure.

---

## ✅ What’s Included

- ✅ Full folder structure for a simple fullstack app
- ✅ TypeScript configs already set up
- ✅ One script to build everything
- ✅ Functional Todo App to experiment with
- ✅ SQLite `.db` file generated on first run — real persistence!

---

## 🛠 Getting Started

### 1. Install Developer Tools

Before you can run this project, you'll need to install a few essential tools. Instructions vary by operating system:

#### Install VS Code (Visual Studio Code)

VS Code is the recommended code editor for this project. It has excellent TypeScript support and many helpful extensions.

**Windows:**
1. Download from [code.visualstudio.com](https://code.visualstudio.com/)
2. Run the installer
3. During installation, check these options:
   - "Add to PATH"
   - "Register Code as an editor for supported file types"
   - "Add 'Open with Code' action to context menu"
4. If using WSL (recommended for Windows), install the "WSL" extension after installation

**macOS:**
1. Download + install from [code.visualstudio.com](https://code.visualstudio.com/)
2. Optional: Press `Cmd+Shift+P`, type "shell command", and select "Install 'code' command in PATH"

**Linux:**
```bash
# Ubuntu/Debian
sudo apt update
sudo apt install wget gpg
wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
sudo install -D -o root -g root -m 644 packages.microsoft.gpg /etc/apt/keyrings/packages.microsoft.gpg
sudo sh -c 'echo "deb [arch=amd64,arm64,armhf signed-by=/etc/apt/keyrings/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main" > /etc/apt/sources.list.d/vscode.list'
sudo apt update
sudo apt install code

# Fedora/RHEL
sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
sudo sh -c 'echo -e "[code]\nname=Visual Studio Code\nbaseurl=https://packages.microsoft.com/yumrepos/vscode\nenabled=1\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" > /etc/yum.repos.d/vscode.repo'
sudo dnf install code

# Arch/Manjaro
yay -S visual-studio-code-bin
```

#### Recommended VS Code Extensions

After installing VS Code, install these extensions for the best development experience:

**Essential:**
- **ESLint** (`dbaeumer.vscode-eslint`) - JavaScript/TypeScript linting
- **Prettier** (`esbenp.prettier-vscode`) - Code formatter
- **TypeScript Language Features** (built-in) - Core TypeScript support
- **Tailwind CSS IntelliSense** (`bradlc.vscode-tailwindcss`) - Autocomplete, syntax highlighting, and linting for Tailwind


**To install extensions:**
1. Open VS Code
2. Click the Extensions icon in the sidebar (or press `Ctrl+Shift+X` / `Cmd+Shift+X`)
3. Search for the extension name
4. Click "Install"

Or install via command line:
```bash
code --install-extension dbaeumer.vscode-eslint
code --install-extension esbenp.prettier-vscode
code --install-extension dsznajder.es7-react-js-snippets
code --install-extension ms-vscode.vscode-typescript-next
code --install-extension bradlc.vscode-tailwindcss
code --install-extension usernamehw.errorlens
code --install-extension formulahendry.auto-rename-tag
code --install-extension christian-kohler.path-intellisense
code --install-extension eamodio.gitlens
code --install-extension rangav.vscode-thunder-client
```

#### For Windows Users: Set up WSL (Windows Subsystem for Linux)

**We strongly recommend using WSL for development on Windows.** This gives you a Linux environment that works seamlessly with modern web development tools.

1. **Install WSL:**
   - Open PowerShell as Administrator
   - Run: `wsl --install`
   - Restart your computer when prompted
   - After restart, WSL will finish installing and ask you to create a username and password
   - For detailed instructions, see [Microsoft's WSL installation guide](https://learn.microsoft.com/en-us/windows/wsl/install)

2. **Install Node.js in WSL:**
   - Open your WSL terminal (search for "Ubuntu" in Start menu)
   - Run these commands:
     ```bash
     curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
     sudo apt-get install -y nodejs
     ```
   - Verify installation:
     ```bash
     node --version
     npm --version
     ```

3. **Git comes pre-installed in WSL**, but verify:
   ```bash
   git --version
   ```

#### For Mac Users

**Install using Homebrew (recommended):**

1. **Install Homebrew** (if not already installed):
   - Open Terminal
   - Run:
     ```bash
     /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
     ```

2. **Install Node.js:**
   ```bash
   brew install node
   ```

3. **Install Git:**
   ```bash
   brew install git
   ```

4. **Verify installations:**
   ```bash
   node --version
   npm --version
   git --version
   ```

**Alternative: Manual installation**
- **Node.js:** Visit [nodejs.org](https://nodejs.org/) and download the macOS LTS installer
- **Git:** Visit [git-scm.com](https://git-scm.com/downloads) and download the macOS installer

#### For Linux Users

**Ubuntu/Debian:**
```bash
# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install Git (if not already installed)
sudo apt-get install -y git

# Verify
node --version
npm --version
git --version
```

**Fedora/RHEL:**
```bash
# Install Node.js
sudo dnf install -y nodejs

# Install Git
sudo dnf install -y git
```

### 2. Clone the repository

> Clone this repository to your local machine, install dependancies:

```bash
git clone https://github.com/bill0x2A/ollie-fullstack-typescript-learning.git
cd ollie-fullstack-typescript-learning
npm run install
npm run install-all
```

This will:
- Download all the project files
- Install dependencies for both apps
- Start both the server (Express) and client (React)

### 3. Start coding!

Once everything's installed, you're ready to explore the code:

```bash
cd minimal-todo-app
npm run dev
```

- Frontend: <http://localhost:5173>
- Backend/API: <http://localhost:3000>

✅ The basic Todo App is now live — try adding, toggling, and deleting tasks.

---

## 🧭 Learning Path — Tackling Fullstack TS One Step at a Time
Use this repo as your sandbox. Each step gives you a specific beginner-friendly task.

> 🧩 _Before each step_, read the suggested docs/videos so you're set up to succeed.

### 🥇 Step 1 — Understand the File Structure
- **Goal**: Know where the code lives on client and server
- 📖 Resources:
  - [React Folder Structure Guide](https://react.dev/learn/thinking-in-react)
  - [Express Basics](https://expressjs.com/en/starter/hello-world.html)
- ✅ Task: Open `/client/src/App.tsx` and `/server/index.ts` and connect the dots: how are todos fetched and rendered?

### 🥈 Step 2 — Add a "Clear Completed" Button
- 📖 Resources:
  - [React useState and events](https://react.dev/learn/responding-to-events)
  - [Express Route Controller Pattern](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes)
- ✅ Task: Modify both frontend and backend to allow removing all completed todos

### 🥉 Step 3 — Persist App State Client-Side (LocalStorage)
- 📖 Resources:
  - [Using localStorage in React](https://blog.logrocket.com/using-localstorage-react-hooks/)
- ✅ Task: Auto-fill the input field with the last task you typed after refresh

### 🏅 Step 4 — Make the App Look Better
- Add basic styles or choose a UI library like [Tailwind CSS](https://tailwindcss.com/docs/installation)

---

## 🗂 Project Structure

```bash
minimal-todo-app/
├─ client/               # React + TypeScript Frontend
│  ├─ index.html
│  ├─ src/
│  │  ├─ App.tsx
│  │  └─ main.tsx
│  ├─ vite.config.ts
│  ├─ tsconfig.json
│  └─ package.json
├─ server/               # Express + SQLite Backend
│  ├─ index.ts
│  ├─ db.ts              # Initializes SQLite DB
│  ├─ todos.db           # Created automatically
│  ├─ tsconfig.json
│  └─ package.json
├─ package.json          # Workspaces config
└─ README.md
```