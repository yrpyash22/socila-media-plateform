# Piqosocial - Full-Stack MERN Social Networking Platform

Piqosocial is a feature-rich, high-performance social media networking application designed with a robust decoupling architecture. Built using the MERN ecosystem (MongoDB, Express.js, React.js, Node.js) and styled natively with Bootstrap 5, this application provides an end-to-end sandbox environment for seamless real-time text interactions, profile customizations, and localized media stream filtering.


---

## 🛠️ Complete Local Installation & Execution Steps

Follow these exact technical procedures to deploy, initialize, and execute the complete ecosystem entirely on your local machine:

1. System Infrastructure Prerequisites
Ensure your operating system contains the following execution runtimes:
* **Node.js:** `v16.x` or higher installed ➔ [Download Node.js](https://nodejs.org/)
* **MongoDB Suite:** MongoDB Community Server daemon running locally along with MongoDB Compass GUI ➔ [Download MongoDB Suite](https://www.mongodb.com/try/download/community)


---

# Installation setup 

---
### Project name Social Media App ->
 <https://github.com/yrpyash22/socila-media-plateform>

---
### 1. Extract the file to be downloaded by this link 
Name :- socila-media-plateform

---
### 2. Establishing the Environment Configuration Layer

1. Navigate directly into the root folder of your backend setup,
- cd social-media-plateform
2. initialize a secure environment parameters file named exactly `.env`, 
3. populate it with the following key-value matrices:

```env
# Server Configuration
NODE_ENV=production
PORT=4000
MONGO_URL=mongodb://127.0.0.1:27017/socialmedia
JWT_SECRET=my_social_secret

# Cloudinary Integration Configuration
CLOUD_NAME=your_cloud_name
CLOUD_API_KEY=your_api_key
CLOUD_API_SECRET=your_api_secret
```

---
### 3💡 Cloudinary Setup Guide:
1. Go to Cloudinary and sign up for a free
account.
2. Once logged in or signup 
3. Obtain your Cloudinary credentials from the dashboard.

4.Replace
- your_cloud_name
- your_api_key
- your_api_secret 

in your .env file with your actual keys.


---

### 4. Server-Side Dependencies Hook & Initialization

1. Launch your command terminal mapped inside the backend project root folder and execute the sequential lifecycle commands: 
- .../socila-media-plateform> 
2. Installs all necessary backend packages (Express, Mongoose, JWT-Decode, etc.)
```bash
npm install
```
3. Boots up the Node.js server engine 
```bash
npm start
```

--> Upon a clean atomic database handshake, your terminal logs will confirm: 
- Backend service is run: http://localhost:4000
- Connected Success to LOCAL Database:127.0.0.1

---

### 5. Server for Frontend

1: Open a Dedicated Terminal
Open a **NEW independent terminal instance** in your code editor. 

> ⚠️ **Critical Note:** Do NOT close your previous terminal window where your Node.js Backend Server is actively running database handlers on port `4000`. Both servers must execute simultaneously.

2: Navigate to FrontEnd Directory
Route your newly opened bash instance into the frontend execution directory level:
```bash
cd FrontEnd
-->  /FrontEnd> 
```

3.Installs all necessary frontend packages  
```bash
npm install
```

4.Creat a new .env file inside the FrontEnd folder in this context is past
```bash
REACT_APP_API_URL=http://localhost:3000
```

5. Boots up the React start engine 
```bash
npm start
```
===> http://localhost:3000


---
### 6. Server for Frontend
Now you can run The application 
http://localhost:3000
open in Browser.


---
## 🗂️ Backend Project Directory Structure

Here is the structural blueprint of the backend repository. It highlights the modular design of the system, isolating route configurations, controller interfaces, database models, and server middlewares:

```text
Social-Networking-Mern-main/
├── config/
├── Controllers/           # Request processors & application business logic
├── middleware/            # Security shields and JWT authorization verification
├── Routes/                # Express API endpoint mapping and route declarations
├── Schema/                # Mongoose Models (User, Post, Comment database frameworks)
├── utils/                 # Global utility modules and helper functions
├── validation/            # Schema schema validations and pattern checks
├── FrontEnd/              # Completely decoupled React UI client repository
├── .gitattributes         # Git repository system configuration controls
├── .gitignore             # Infrastructure guardrail file (Blocks .env & node_modules)
├── package.json           # Global project manifesto and dynamic dependency tracking
├── package-lock.json      # Locked package dependency version tree matrix
├── ProcFile               # Production lifecycle entry points descriptor
├── README.md              # Master engineering deployment guide and system documentation
└── server.js              # Central backend engine core and Express runtime launcher
```


---

## 🗂️ Frontend Project Directory Structure

Here is the structural blueprint of the frontend repository. It showcases how the user interface layers, static assets, and core configuration manifests are organized:

```text
FrontEnd/
├── node_modules/
├── public/                # Static public assets matrix
├── src/                   # Core development engine (Main React Workspace)
├── package.json           # Frontend platform manifesto and dependency specifications
└── package-lock.json      # Locked version registry tree for client dependencies


# Sub files

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
```
