# 🚀 Unit Converter (React + Express)

A simple full-stack web application that converts values between different units of measurement such as **length, weight, and temperature**.

Built as part of the roadmap.sh project challenge.

---

## 📌 Features

* 🔢 Convert values between multiple unit types:

  * Length (meter, kilometer, inch, mile, etc.)
  * Weight (gram, kilogram, pound, ounce, etc.)
  * Temperature (Celsius, Fahrenheit, Kelvin)
* 🔄 Convert between any two supported units
* ⚡ Fast and responsive UI using React
* 🌐 Backend API built with Express
* ❌ Input validation and error handling

---

## 🛠️ Tech Stack

**Frontend**

* React (Vite)
* JavaScript
* HTML + CSS

**Backend**

* Node.js
* Express.js
* CORS

---

## 📂 Project Structure

```
unit-converter/
│
├── client/       # React frontend
├── server/       # Express backend
├── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```
git clone https://github.com/YOUR_USERNAME/unit-converter.git
cd unit-converter
```

---

### 2️⃣ Setup Backend

```
cd server
npm install
node server.js
```

Server runs on:

```
http://localhost:5000
```

---

### 3️⃣ Setup Frontend

Open new terminal:

```
cd client
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## 🔌 API Endpoint

### POST `/convert`

**Request Body:**

```
{
  "value": 10,
  "from": "meter",
  "to": "kilometer",
  "type": "length"
}
```

**Response:**

```
{
  "result": 0.01
}
```

---

## 🧠 How It Works

1. User enters a value and selects units
2. React sends request to Express backend
3. Backend performs conversion logic
4. Result is returned and displayed instantly

---

## 📸 Demo (Optional)

Add screenshots or screen recordings here for better presentation.

---

## 🚀 Future Improvements

* 🔘 Dropdown-based unit selection
* 🔁 Swap units button
* 🌙 Dark mode
* 📱 Mobile responsiveness
* 🌐 Deployment (Render / Vercel)

---

## 📚 Project Reference

This project is part of:
👉 https://roadmap.sh/projects/unit-converter

---

## 👨‍💻 Author

**Abhinav**

---

## ⭐ Show Your Support

If you like this project:

* ⭐ Star the repository
* 🍴 Fork it
* 📢 Share it

---
