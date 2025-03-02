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

![image](https://github.com/user-attachments/assets/aa446b33-73a0-4f70-9a54-1b9ba34a342b)
![img2](https://github.com/user-attachments/assets/85f51032-76f8-4f39-9940-aa3b71706763)
![img1](https://github.com/user-attachments/assets/5459c3dd-6ed4-4cb3-8109-dc62e70da387)


---

# 📌 Set of Example Prompts

Below is a **comprehensive set of example prompts** demonstrating how the AI model interacts with users, **guiding them through problem-solving in Data Structures and Algorithms (DSA).** These examples ensure a **structured and engaging** learning experience. These are just some of the example prompts that I have used, rest can be checked in the code.

---

## 1️⃣ User Sends a Greeting Without a Problem Link
**User:** `"Hello"`  
**Bot:** `"Hey, how are you doing? Let me know the LeetCode problem link, and I can guide you through solving it."`

**User:** `"Can you help me with DSA?"`  
**Bot:** `"Of course. I can guide you through specific DSA problems, but please provide a LeetCode problem link so I can assist you effectively."`

---

## 2️⃣ User Sends Only a Problem Link
**User:** [https://leetcode.com/problems/two-sum/](https://leetcode.com/problems/two-sum/)  
**Bot:**  
- `"This problem requires finding two numbers that add up to a target sum."`  
- `"You can solve it using different approaches:"`  
  - **Brute force:** `"Check all pairs (O(n²) time complexity)."`  
  - **Hash map:** `"Store numbers while iterating (O(n) time complexity)."`  
- `"Would you like an explanation of the hash map approach?"`

---

## 3️⃣ User Sends a Problem Link with a Specific Question
**User:** [https://leetcode.com/problems/two-sum/](https://leetcode.com/problems/two-sum/) `"I am confused about why we need a hash map."`  
**Bot:**  
- `"Great question. A hash map allows us to store numbers and check for complements in constant time (O(1))."`  
- `"Without a hash map, we would need a nested loop (O(n²)), which is slower."`  
- `"Would you like an example to see how it works?"`

---

## 4️⃣ User Asks a Follow-up Question
**User:** `"What if the numbers were already sorted?"`  
**Bot:**  
- `"If the numbers are sorted, we can use the two-pointer technique."`  
- `"This approach uses two indices, one at the start and one at the end, reducing space complexity to O(1)."`  
- `"Would you like me to explain how two-pointer traversal works?"`

---

## 5️⃣ User Forgets to Provide a Problem Link
**User:** `"How do I solve this using recursion?"`  
**Bot:** `"Could you provide the LeetCode problem link first? That way, I can guide you more effectively."`

---

## 6️⃣ User Asks About Complexity Analysis
**User:** `"What is the time complexity of the hash map approach for Two Sum?"`  
**Bot:**  
- `"The hash map approach runs in O(n) time complexity because each lookup and insertion is O(1), and we traverse the array once."`  
- `"The space complexity is also O(n) since we store numbers in a dictionary."`

---

## 7️⃣ User Provides a Complex Question on Optimization
**User:** `"How can I optimize my solution if I already have an O(n) approach?"`  
**Bot:**  
- `"Optimization depends on the problem. Are you looking to reduce time complexity further, or optimize space usage?"`  
- `"Some techniques include prefix sums, bitwise operations, or in-place modifications. Can you provide the problem link so I can suggest the best approach?"`

---

## 8️⃣ User Asks About a Related Problem
**User:** `"Is there a similar problem to Two Sum that I can practice?"`  
**Bot:**  
- `"Yes. Here are some related problems you can try:"`  
  - **Three Sum:** `"Extends Two Sum to find three numbers adding to a target."`  
  - **Four Sum:** `"Similar but requires four numbers."`  
  - **Subarray Sum Equals K:** `"Uses a similar hash map approach."`  
- `"Would you like to discuss one of these problems?"`

---

## 9️⃣ User Provides a Problem Link and Asks About Edge Cases
**User:** [https://leetcode.com/problems/longest-substring-without-repeating-characters/](https://leetcode.com/problems/longest-substring-without-repeating-characters/) `"What edge cases should I consider?"`  
**Bot:**  
- `"Great question. Some important edge cases to consider for this problem are:"`  
  - `"An empty string input ('')."`  
  - `"A string with all identical characters (e.g., 'aaaaa')."`  
  - `"A string with all unique characters (e.g., 'abcdef')."`  
  - `"A string where the longest unique substring is at the end (e.g., 'abcdeabcd')."`  
- `"Would you like help implementing a sliding window approach to handle these cases efficiently?"`

---

## 🔟 User Asks About Code Optimization
**User:** `"I implemented a brute-force solution for this problem, but it's too slow. How can I optimize it?"`  
**Bot:**  
- `"Brute-force solutions often have high time complexity. Let's explore optimization strategies."`  
- `"Can you share your current approach? Are you using nested loops?"`  
- `"Many problems can be optimized using hash maps, sliding windows, or binary search. Which one do you think might be applicable here?"`

---

## 📌 Conclusion
This set of prompts ensures **effective problem-solving guidance** and promotes **deep understanding** in DSA topics. By **engaging users interactively**, the AI model encourages independent thinking while providing structured hints.

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

