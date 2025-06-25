# karocamp-frontend-bootcamp

# Development Environment Setup

This guide will help you install the necessary tools for JavaScript and Node.js development: **Node.js** and **Visual Studio Code (VSCode)**.

---

## 📦 1. Install Node.js

Node.js is a JavaScript runtime that allows you to run JavaScript on the server.

### Windows / macOS
1. Visit the [official Node.js website](https://nodejs.org/en/download)
2. Download the **LTS** (Long Term Support) version for your operating system.
3. Run the installer and follow the prompts.
4. After installation, verify Node.js is installed:
```bash
node -v
npm -v
```

### Linux (Debian/Ubuntu)
Open a terminal and run:

```bash
sudo apt update
sudo apt install nodejs npm -y
```

Then verify the installation:

```bash
node -v
npm -v
```

## 🛠 2. Install Visual Studio Code

VSCode is a lightweight code editor with great features for JavaScript and Node.js development.

### Windows / macOS
Go to the official VSCode website

[Download the installer](https://code.visualstudio.com/) for your platform and install it.

### Linux (Debian/Ubuntu)
Run the following commands:
```bash
sudo apt update
sudo apt install software-properties-common apt-transport-https wget -y
wget -q https://packages.microsoft.com/keys/microsoft.asc -O- | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main"
sudo apt update
sudo apt install code -y
```

## ✅ Verify Everything Works
Once both Node.js and VSCode are installed:

- Open VSCode.
- Open a new terminal (Terminal → New Terminal).

```bash
node -v
npm -v
```
