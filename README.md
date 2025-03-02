# 🧠 DSA Chat Assistant - AI-Powered LeetCode Helper

This is a **full-stack AI-powered chat assistant** that helps users understand **Data Structures and Algorithms (DSA)** problems from **LeetCode**.
It uses **Google Gemini AI** to provide **guidance, hints, and structured explanations** without directly giving the solution.

---

## DEMO 

Visit at - [Visit Site](https://arindam-scalar-assign-1.onrender.com/)
# ⚠️ Response Time Warning
Please note that responses may take some time. Thank you for your patience!
---

## 🚀 Features

✅ **LeetCode Problem Analysis** - Explain problem statements, key concepts, and multiple solution approaches.  
✅ **AI-Powered Guidance** - Uses **Gemini AI** to provide interactive explanations and hints.  
✅ **Follow-up Questions** - Supports **conversational follow-ups** for better learning.  
✅ **Beautiful UI** - A **React frontend** with an intuitive chat interface.  
✅ **Secure Backend** - An **Express.js backend** with Gemini API integration.  

---

# 📂 Project Architecture

```
gemini-dsa-chat/
│── backend/             # Express.js backend
│   │── server.js        # Main server entry point
│   │── .env             # API keys & environment variables
│   │── package.json     # Backend dependencies
│   ├── routes/
│   │   ├── chatRoutes.js        # API route for chat
│   ├── controllers/
│   │   ├── chatController.js    # Handles AI responses
│
│── frontend/            # React frontend
│   │── src/
│   │   ├── components/
│   │   │   ├── Chat.js          # Main chat interface
│   │   │   ├── InputBox.js      # User input box
│   │   │   ├── Message.js       # Message display
│   │   ├── App.js              # React main entry file
│   │── package.json            # Frontend dependencies
│
└── README.md           # Project documentation
```

---

## 🛠️ **Setup Instructions**

### 🔹 1. **Clone the Repository**
```bash
git clone https://github.com/ArindamRawat/Arindam_Scalar_Assign.git
cd gemini-dsa-chat
```

### 🔹 2. **Setup Backend**
```bash
cd backend
npm install
```

#### **Configure Environment Variables (`.env` file)**
Create a `.env` file inside `backend/` and add:
```
PORT=5000
GEMINI_API_KEY=your_google_gemini_api_key
```

Then, start the backend:
```bash
node server.js
```
Your **server should now be running on** `http://localhost:5000/` 🎉.

---

### 🔹 3. **Setup Frontend**
```bash
cd frontend
npm install
npm start
```
Your **React frontend should now be running on** `http://localhost:3000/` 🚀.

---

## 🔥 **How to Use the Application**
1. Open the frontend (`http://localhost:3000/`).
2. Enter a **LeetCode problem URL** in the input box.
3. **Ask a question** about the problem (optional).
4. The AI will:
   - Explain the problem.
   - Discuss **multiple approaches** (brute-force, optimized).
   - Analyze **time & space complexity**.
   - Guide you **without giving direct answers**.
5. **Ask follow-up questions** to refine your understanding.

---

## 🤖 **How GPT Integration Works (Gemini API)**
- The **Express.js backend** connects to **Google Gemini AI** using `@google/generative-ai`.
- It **sends structured prompts** based on **LeetCode problems**.
- Gemini AI processes the query and **returns an educational response**.
- The **frontend displays the response in a chat-like UI**.

### **📌 AI System Instructions**
- The AI **requires a LeetCode link first** before answering.
- It **never gives direct solutions** but provides structured hints.
- It **remembers context** and handles **follow-up questions**.
- Users can ask for **alternative approaches, edge cases, and optimizations**.

---

## 📌 **Example API Request (`POST /api/chat`)**

### **➡️ Request**
```json
{
  "message": "https://leetcode.com/problems/two-sum/"
}
```

### **⬅️ Response**
```json
{
  "response": "This problem requires finding two numbers that sum to a target. Possible approaches: Brute force (O(n²)), HashMap (O(n))."
}
```

---
## Images.
![img2](https://github.com/user-attachments/assets/85f51032-76f8-4f39-9940-aa3b71706763)
![img1](https://github.com/user-attachments/assets/5459c3dd-6ed4-4cb3-8109-dc62e70da387)


---
## ⚡ **Troubleshooting**
### **Common Issues & Fixes**
| Issue | Solution |
|--------|-----------|
| `Cannot GET /api/chat` | Use **POST**, not GET. Test in **Postman**. |
| `500 Internal Server Error` | Check **.env API key** and restart server. |
| AI gives no response | Use `gemini-pro` instead of `gemini-2.0-flash`. |

---

## 👨‍💻 **Contributing**
1. Fork the repo 🍴.
2. Create a new branch: `git checkout -b feature-name`.
3. Commit changes: `git commit -m "Added new feature"`.
4. Push to branch: `git push origin feature-name`.
5. Create a **Pull Request**.

---

## 📜 **License**
This project is **open-source** under the **MIT License**. Feel free to use, modify, and contribute! 🎉

---

🚀 **Happy Coding!** 🚀

