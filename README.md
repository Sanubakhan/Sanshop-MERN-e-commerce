# SANSHOP 🛒  
A full-stack MERN e-commerce platform with role-based authentication for users and owner.

---

## 🚀 Features

### 👤 User
- User registration & login
- Browse products
- Add products to cart
- View cart & order summary

### 🛍 Owner (Admin)
- Hidden owner login & register routes
- Owner authentication
- Create & manage products
- Secure owner dashboard
- Role-based access control

---

## 🧱 Tech Stack

**Frontend**
- React (Vite)
- React Router
- Tailwind CSS
- Axios
- Context API

**Backend**
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- bcrypt
- Cookie-based auth

---

## 📂 Project Structure

```text
ecommerce/
├── Backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env            (not committed)
│   └── server.js
│
├── frontend/
│   └── sanshop/
│       ├── src/
│       ├── .env        (not committed)
│       └── vite.config.js
│
└── README.md


---

## ⚙️ Setup & Run Locally

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Sanubakhan/Sanshop-MERN-e-commerce
cd ecommerce

2️⃣ Backend Setup
cd Backend
npm install

.env file inside Backend/:

PORT=3000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret


Run backend:
npx nodemon server.js

3️⃣ Frontend Setup
cd ../frontend/sanshop
npm install
npm run dev

Frontend runs on:
http://localhost:5173

Backend runs on:
http://localhost:3000

🔐 Environment Variables
Both frontend and backend use separate .env files.
These are intentionally excluded from GitHub.

👩‍💻 Author
Sanuba Khan
Full-Stack MERN Developer

⭐ If you like this project, feel free to star the repo!
