# JSONPlaceholder Users App

A small Express.js + TypeScript + EJS application that displays:

- Users list
- User details + their posts
- Post details + comments

This project uses the public JSONPlaceholder API.

---

## 🚀 Features

### 👤 Users

- View all users
- View user details
- View posts written by the user

### 📝 Posts

- View a single post
- View comments on that post
- View the user who wrote the post

---

## 🛠 Technologies Used

- **Node.js**
- **Express.js**
- **TypeScript**
- **EJS Template Engine**
- **Axios**
- **Express EJS Layouts**
- **CSS (Custom styles)**

---

## 📦 Installation

### 1) Clone the repository:

git clone <your-repo-url>

### 2) Install dependencies:

npm install

---

## ⚙ Environment Variables

Create a `.env` file in the root directory:

Port =3000
JSONPLACEHOLDER_API=https://jsonplaceholder.typicode.com

Or copy from `.env.example`.

---

## 🏃 Running the Project

### Development mode:

npm run dev

### Build the project:

npm run build

### Production mode:

npm start

The server will run on:
http://localhost:3000

---

## 📁 Project Structure

/src
controllers/
│ ├── usersController.ts
│ └── postsController.ts
├── routes/
│ ├── users.ts
│ └── posts.ts
├── views/
│ ├── layout.ejs
│ ├── pages/
│ │ ├── users.ejs
│ │ ├── user-details.ejs
│ │ └── post-details.ejs
├── public/
│ ├── css/
│ ├── images/
│ └── js/
├── app.ts
└── server.ts

---

## 🧪 API Used

https://jsonplaceholder.typicode.com

---

## 👨‍💻 Author

Ahmad Ghassan Ahmad
