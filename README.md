# ALX Project 0x01 – User Management with Next.js

This project demonstrates how to build a simple **Users management interface** using **Next.js**, **TypeScript**, and **TailwindCSS**.  
It includes reusable components such as **PostCard**, **UserCard**, and a **UserModal** for adding new users dynamically.

---

## 📂 Project Structure

alx-project-0x01/
│
├── components/
│ └── common/
│ ├── PostCard.tsx # Displays individual posts
│ ├── UserCard.tsx # Displays user details
│ └── UserModal.tsx # Modal for adding new users
│
├── interfaces/
│ └── index.ts # TypeScript interfaces (PostProps, UserData, UserModalProps, etc.)
│
├── pages/
│ ├── posts/
│ │ └── index.tsx # Page displaying posts with PostCard
│ ├── users/
│ │ └── index.tsx # Page displaying users with UserCard and UserModal
│ └── landing.tsx # Landing page
│
└── package.json


---

## ✨ Features

- **PostCard Component** – Displays posts with title, body, and user info.  
- **UserCard Component** – Displays user details in a clean card layout.  
- **UserModal Component** – A modal form for adding new users dynamically.  
- **TypeScript Interfaces** – Strong typing with `PostProps`, `UserData`, and `UserModalProps`.  
- **Next.js Data Fetching** – Uses `getStaticProps` to fetch posts and users from [JSONPlaceholder](https://jsonplaceholder.typicode.com/).  

---

## 🛠️ Tech Stack

- **Next.js** – React framework for server-side rendering & static generation  
- **TypeScript** – Strongly typed codebase  
- **TailwindCSS** – Utility-first styling  
- **JSONPlaceholder API** – Fake REST API for testing  

---
## Screenshots 

<img width="1366" height="768" alt="Screenshot (196)" src="https://github.com/user-attachments/assets/a4fb10da-b1e8-4d66-82c5-e0b849af9863" />
<img width="1366" height="768" alt="Screenshot (195)" src="https://github.com/user-attachments/assets/4b365d02-4a81-4a7e-b34b-c6fd8154d2ef" />
<img width="1366" height="768" alt="Screenshot (197)" src="https://github.com/user-attachments/assets/d9f37453-b717-4bbf-8e2b-ecf1c9807576" />

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/<your-username>/alx-project-0x01-setup.git
cd alx-project-0x01

2. Install dependencies
npm install

3. Run the development server
npm run dev -- -p 3000

4. Open in browser

Go to http://localhost:3000
