import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUsers,
  FaCodeBranch,
  FaTerminal,
  FaVideo,
  FaDesktop,
  FaChalkboardTeacher,
  FaBolt,
  FaShieldAlt,
  FaCloud,
} from "react-icons/fa";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { useAuth } from "../context/AuthProvider.jsx";
import toast from "react-hot-toast";
import { BeatLoader } from "react-spinners";
import "./styles/Home.css";

const Home = () => {
  const { auth } = useAuth();
  const isAuthenticated = !!auth?.user;
  const navigate = useNavigate();

  const [modalType, setModalType] = useState(null);
  const [roomId, setRoomId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleOpenModal = (type) => {
    if (isAuthenticated) {
      setModalType(type);
    } else {
      toast.error("Please log in to continue");
      navigate("/login");
    }
  };

  const handleCloseModal = () => {
    setModalType(null);
    setRoomId("");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!roomId.trim()) {
      toast.error("Room ID is required.");
      return;
    }
    if (roomId === "solo") {
      toast.error("'solo' is a reserved ID. Please choose another.");
      return;
    }
    setIsSubmitting(true);
    navigate(`/code-editor/${roomId}`, { state: { action: modalType } });
  };

  const handleAutoGenerateRoomID = () => {
    const generateIdSegment = (length = 4) =>
      Math.random().toString(36).substring(2, 2 + length);
    const randomRoomId = [
      generateIdSegment(),
      generateIdSegment(),
      generateIdSegment(),
    ].join("-");
    setRoomId(randomRoomId);
  };

  return (
    <>
      <Navbar />
      <main className="homepage">
        {modalType && (
          <div className="modal-overlay" onClick={handleCloseModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close-button" onClick={handleCloseModal}>
                ×
              </button>
              <h2>{modalType === "create" ? "Create New Room" : "Join Room"}</h2>
              <form className="modal-form" onSubmit={handleFormSubmit}>
                <div className="input-wrapper1">
                  <input
                    type="text"
                    className="modal-input"
                    placeholder="Enter Room ID"
                    value={roomId}
                    onChange={(e) => setRoomId(e.target.value)}
                    required
                  />
                  {modalType === "create" && (
                    <button
                      type="button"
                      className="auto-generate-button"
                      onClick={handleAutoGenerateRoomID}
                      title="Generate a random Room ID"
                    >
                      Generate
                    </button>
                  )}
                </div>
                <button
                  className="hero-cta-button modal-submit-button"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <BeatLoader color="#fff" size={10} />
                  ) : modalType === "create" ? (
                    "Create & Enter"
                  ) : (
                    "Join"
                  )}
                </button>
              </form>
            </div>
          </div>
        )}

        <section className="hero-section">
          <div className="hero-content container">
            <h1 className="hero-title">
              The Ultimate Workspace for Developers
            </h1>
            <p className="hero-subtitle">
              Code, chat, and collaborate in a seamless, real-time environment.
              From pair programming to team-wide projects, we've got you covered.
            </p>
            <div className="hero-cta">
              <button
                className="hero-cta-button primary"
                onClick={() => handleOpenModal("create")}
              >
                Create a Room
              </button>
              <button
                className="hero-cta-button primary"
                onClick={() => handleOpenModal("join")}
              >
                Join a Room
              </button>
              <Link to={isAuthenticated ? "/code-editor/solo" : "/login"}>
                <button className="hero-cta-button secondary">
                  Practice Solo
                </button>
              </Link>
            </div>
          </div>
        </section>

        <section id="features" className="features-section">
          <div className="container">
            <h2 className="section-title">An All-in-One Solution</h2>
            <div className="features-grid">
              <div className="feature-card">
                <FaUsers className="feature-icon" />
                <h3>Real-Time Collaboration</h3>
                <p>
                  See changes as they happen with multi-cursor editing and synchronized scrolling.
                </p>
              </div>
              <div className="feature-card">
                <FaTerminal className="feature-icon" />
                <h3>Integrated I/O</h3>
                <p>
                  Execute code in multiple languages, provide custom input, and view results instantly.
                </p>
              </div>
              <div className="feature-card">
                <FaCodeBranch className="feature-icon" />
                <h3>Multi-Language Support</h3>
                <p>
                  Enjoy syntax highlighting and execution for your favorite languages like C++, Java, and Python.
                </p>
              </div>
               <div className="feature-card">
                <FaVideo className="feature-icon" />
                <h3>Audio & Video Chat</h3>
                <p>
                  Communicate clearly with high-quality, low-latency voice and video calls.
                </p>
              </div>
              <div className="feature-card">
                <FaDesktop className="feature-icon" />
                <h3>Screen Sharing</h3>
                <p>
                  Share your entire screen or a specific application to guide your collaborators.
                </p>
              </div>
              <div className="feature-card">
                <FaChalkboardTeacher className="feature-icon" />
                <h3>Interactive Whiteboard</h3>
                <p>
                  Brainstorm ideas, draw system diagrams, and visualize complex problems together.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="hero-section draw-section">
          <div className="hero-content container">
            <h1 className="hero-title">
              From Concept to Creation
            </h1>
            <p className="hero-subtitle">
              Our interactive board is your digital canvas. Perfect for system design interviews, architectural planning, or quick brainstorming sessions. Visualize workflows, map out components, and bring your ideas to life.
            </p>
            <div className="hero-cta">
              <Link to={isAuthenticated ? "/canvas" : "/login"}>
                <button className="hero-cta-button primary">
                  Open Canvas
                </button>
              </Link>
            </div>
          </div>
        </section>

        <section className="why-us-section">
          <div className="container">
            <h2 className="section-title">Why Choose CodeTogether?</h2>
            <div className="features-grid">
              <div className="feature-card">
                <FaBolt className="feature-icon" />
                <h3>Blazing Fast</h3>
                <p>Powered by WebSockets and WebRTC for near-instantaneous updates and communication.</p>
              </div>
              <div className="feature-card">
                <FaCloud className="feature-icon" />
                <h3>No Installation</h3>
                <p>Access a powerful, full-featured IDE directly from your browser. No downloads needed.</p>
              </div>
              <div className="feature-card">
                <FaShieldAlt className="feature-icon" />
                <h3>Secure & Private</h3>
                <p>Your data is protected. Rooms are private and your code is never stored on our servers.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="how-it-works-section">
          <div className="container">
            <h2 className="section-title">Get Started in Seconds</h2>
            <div className="steps-container">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Create or Join</h3>
                <p>
                  Start a new session with a single click or join a colleague's room with their ID.
                </p>
              </div>
              <div className="step-arrow">→</div>
              <div className="step">
                <div className="step-number">2</div>
                <h3>Share the Room ID</h3>
                <p>
                  Copy the unique room ID and share it with anyone you want to invite to the session.
                </p>
              </div>
              <div className="step-arrow">→</div>
              <div className="step">
                <div className="step-number">3</div>
                <h3>Code & Collaborate</h3>
                <p>
                  Enjoy a seamless, feature-rich collaborative experience in your shared environment.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;