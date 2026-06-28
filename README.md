# Piqosocial - Full-Stack MERN Social Networking Platform

Piqosocial is a feature-rich, high-performance social media networking application designed with a robust decoupling architecture. Built using the MERN ecosystem (MongoDB, Express.js, React.js, Node.js) and styled natively with Bootstrap 5, this application provides an end-to-end sandbox environment for seamless real-time text interactions, profile customizations, and localized media stream filtering.


---

## 🛠️ Complete Local Installation & Execution Steps

Follow these exact technical procedures to deploy, initialize, and execute the complete ecosystem entirely on your local machine:

### 1. System Infrastructure Prerequisites
Ensure your operating system contains the following execution runtimes:
* **Node.js:** `v16.x` or higher installed ➔ [Download Node.js](https://nodejs.org/)
* **MongoDB Suite:** MongoDB Community Server daemon running locally along with MongoDB Compass GUI ➔ [Download MongoDB Suite](https://www.mongodb.com/try/download/community)


---
---

# Installation setup 
### Project name Social Media App -> <https://github.com/yrpyash22/socila-media-plateform>

---
## 1. Extract the file to be downloaded by this link 
Name :- socila-media-plateform

---
## 2. Establishing the Environment Configuration Layer
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
'''
npm install
'''

3. Boots up the Node.js server engine 
'''
npm start
'''
--> Upon a clean atomic database handshake, your terminal logs will confirm: 
- Backend service is run: http://localhost:4000
- Connected Success to LOCAL Database:127.0.0.1


### 5 Server for Frontend
- It process is show in README.md file of Frontend folder

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


