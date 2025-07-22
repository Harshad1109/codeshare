
# CodeShare

A real-time collaborative code editor built to enable multiple users to write, edit, and share code together—just like Google Docs, but for developers. Includes syntax highlighting, chat functionality, and version control.


## 🚀 Features

- ✅ Real-time code editing with WebSockets
- 🎨 Syntax highlighting using CodeMirror
- 🧑‍💻 Multi-user collaboration
- 💬 Built-in chat for live communication
- 🕓 Version control: track changes and revisions
- 🌐 Language support for JavaScript, Python, C++, etc.

## 🛠️ Tech Stack

### Frontend
- **React.js** with **Vite**
- **@uiw/react-codemirror** for the code editor
- **Socket.IO** for real-time communication
- **Tailwind CSS** for styling

### Backend
- **Node.js** with **Express.js**
- **Socket.IO** for WebSocket handling
- **MongoDB** (optional for storing revisions, chat history, etc.)

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Harshad1109/codeshare.git
cd codeshare
```

### 2. Install Dependencies

#### For client:
```bash
cd client
npm install
```

#### For server:
```bash
cd ../server
npm install
```

### 3. Run the Application

Open two terminals:

**Terminal 1 – Server:**

```bash
cd server
npm run dev
```

**Terminal 2 – Client:**

```bash
cd client
npm run dev
```

The application will start at `http://localhost:5173/` (or as indicated).

## 📂 Project Structure

```
codeshare/
├── client/               # React frontend
│   └── src/
│       └── components/   # Editor, Chat, Layouts
├── server/               # Node.js backend with Socket.IO
│   └── index.js          # Main server file
├── README.md             # Project documentation
└── package.json
```

## 📸 Screenshots

> Add screenshots or a short demo video/GIF here to help users see the app in action.

## 🧩 Future Enhancements

- Authentication and private rooms
- Code execution support (via Docker or online sandboxing)
- GitHub integration for import/export
- Syntax error hints and code formatting
- Voice or video calling

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork this repository
2. Create your feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Open a pull request

## 📄 License

This project is licensed under the MIT License.

---

### 👨‍💻 Developed by [Harshad Solanki](https://github.com/Harshad1109)
