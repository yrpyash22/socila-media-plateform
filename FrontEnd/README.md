# Piqosocial - Frontend Client Application Layer

This directory houses the complete React.js user interface (UI) layer for the Piqosocial platform. Built natively with React Router v6 for dynamic single-page routing, Bootstrap 5 for fluid layouts, and FontAwesome v6 for social icon matrices, this layer orchestrates all frontend visual states and handles interactions with the active local backend server instance.

---

## 🛠️ Standalone Local Execution & Boot Steps

Follow these exact technical procedures to compile, initialize, and execute the user interface layer cleanly on your personal computer:

### Step 1: Open a Dedicated Terminal
Open a **NEW independent terminal instance** in your code editor. 
> ⚠️ **Critical Note:** Do NOT close your previous terminal window where your Node.js Backend Server is actively running database handlers on port `4000`. Both servers must execute simultaneously.

### Step 2: Navigate to FrontEnd Directory
Route your newly opened bash instance into the frontend execution directory level:
```bash
cd FrontEnd
-->  /FrontEnd> 


# Installs all necessary frontend packages  
npm install

# Boots up the React start engine 
npm start
===> http://localhost:3000


## 🗂️ Frontend Project Directory Structure

Here is the structural blueprint of the frontend repository. It showcases how the user interface layers, static assets, and core configuration manifests are organized:

```text
FrontEnd/
├── node_modules/
├── public/                # Static public assets matrix
├── src/                   # Core development engine (Main React Workspace)
├── package.json           # Frontend platform manifesto and dependency specifications
└── package-lock.json      # Locked version registry tree for client dependencies


### Sub files

public/                # Static Public Assets & Styling Core
│   ├── bootstrap/         # Localized Bootstrap asset engine
│   ├── images/            # Static local application asset icons & logos
│   ├── all.min.css        # FontAwesome compiled asset iconography styles
│   ├── index.html         # Main DOM mounting template webpage (Application Core)
│   ├── profile.css        # Layout constraints for user profile interfaces
│   └── style.css          # Baseline global stylesheet rules


├── src/                   # Core Development Engine (Main React Workspace)
│   ├── api/               # Async endpoint integrations (e.g., api-post.js)
│   ├── auth/              # JWT storage controls and token validation modules
│   ├── component/         # UI Modular Viewports (HomePage.jsx, Posts.jsx, NavBar.jsx)
│   ├── config/            # Managed app client ports and structural base parameters
│   ├── Context/           # Global React Context states for user session tracking
│   ├── images/            # Core system assets, badges, and interface graphics
│   ├── Routing/           # Navigation pathways matrix and public/private page boundaries
│   ├── utils/             # Helper tools, date formatters, and clean parameters
│   ├── index.css          # Baseline atomic utility CSS definitions
│   └── index.js           # Core runtime setup script where React mounts onto index.html
