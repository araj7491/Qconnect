import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../styles.css";

export default function IndexPage() {
  // Typing Animation with cursor
  const mainTitleRef = useRef(null);
  const taglineRef = useRef(null);
  const [mainTitleTyping, setMainTitleTyping] = useState(true);
  const [taglineTyping, setTaglineTyping] = useState(false);

  useEffect(() => {
    const mainTitle = "Welcome to Qconnect";
    const tagline = "Connect, Collaborate, and Grow Together!";
    let mainTitleIndex = 0;
    let taglineIndex = 0;
    const typingSpeed = 80;

    function typeMainTitle() {
      if (mainTitleIndex < mainTitle.length && mainTitleRef.current) {
        mainTitleRef.current.textContent = mainTitle.substring(0, mainTitleIndex + 1);
        mainTitleIndex++;
        setTimeout(typeMainTitle, typingSpeed);
      } else {
        setMainTitleTyping(false);
        setTaglineTyping(true);
        setTimeout(typeTagline, 300);
      }
    }

    function typeTagline() {
      if (taglineIndex < tagline.length && taglineRef.current) {
        taglineRef.current.textContent = tagline.substring(0, taglineIndex + 1);
        taglineIndex++;
        setTimeout(typeTagline, typingSpeed);
      } else {
        setTaglineTyping(false);
      }
    }

    const timer = setTimeout(typeMainTitle, 500);
    return () => clearTimeout(timer);
  }, []);

  // FAQ Accordion
  const [activeIndex, setActiveIndex] = useState(null);
  const faqData = [
    {
      question: "How do I create an account on Qconnect?",
      answer: "Simply click on the 'Get Started' button and follow the signup process by providing your email and a few basic details."
    },
    {
      question: "Is Qconnect free to use?",
      answer: "Yes! Qconnect is absolutely free for students and educators."
    },
    {
      question: "Can I collaborate with students from different universities?",
      answer: "Of course! Qconnect promotes collaboration across various disciplines and locations."
    },
    {
      question: "How can I share study materials with others?",
      answer: "Once logged in, go to the 'Resource Sharing' tab and upload your files or share links with your peers."
    },
    {
      question: "What if I forget my password?",
      answer: "No worries! Click on 'Forgot Password' at the login screen to reset it through your registered email."
    },
    {
      question: "Is my data safe on Qconnect?",
      answer: "We value your privacy. Qconnect uses secure encryption protocols to ensure your information is safe."
    }
  ];

  return (
    <>
      {/* Navigation Bar */}
      <nav className="qconnect-navbar">
        <div className="nav-content">
          <div className="nav-left">
            <a href="#">Home</a>
            <a href="#features">Features</a>
            <a href="#faqs">FAQs</a>
          </div>
          <div className="nav-center">
            <a
              href="/"
              onClick={e => {
                e.preventDefault();
                window.location.href = "/";
              }}
            >
              <img src="/images/logo.png" alt="Logo" className="logo-centered" />
            </a>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <header>
        <video autoPlay muted loop id="banner-video">
          <source src="/media/banner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay flex flex-col justify-center items-center text-center z-10">
          <h1
            className="title-wrapper text-white font-extrabold tracking-tight text-4xl md:text-6xl lg:text-7xl leading-tight drop-shadow-lg"
            style={{ fontFamily: "'Inter', sans-serif", marginBottom: '0.05em' }}
          >
            <span
              ref={mainTitleRef}
              className={`typing-text${!mainTitleTyping ? ' typing-complete' : ''}`}
            ></span>
          </h1>
          <p
            className="tagline-wrapper text-white font-extrabold text-2xl md:text-4xl lg:text-5xl leading-snug drop-shadow-lg"
            style={{ fontFamily: "'Inter', sans-serif", marginBottom: '1.5rem', marginTop: '-0.2em' }}
          >
            <span
              ref={taglineRef}
              className={`typing-text${!taglineTyping ? ' typing-complete' : ''}`}
            ></span>
          </p>
          <div style={{ marginBottom: '2.5rem' }}>
            <Link to="/login" className="cta-button shadow-lg hover:scale-105 transition-transform duration-200">
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="features" id="features">
        <h2>Why Choose Qconnect?</h2>
        <div className="feature-container">
          <div className="feature">
            <img src="/images/peer.png" alt="Peer Collaboration" />
            <h3>Peer-to-Peer Collaboration</h3>
            <p>Connect with students from different disciplines.</p>
          </div>
          <div className="feature">
            <img src="/images/resource.png" alt="Resource Sharing" />
            <h3>Resource Sharing</h3>
            <p>Exchange study materials and project resources.</p>
          </div>
          <div className="feature">
            <img src="/images/conversation.png" alt="Discussion Forums" />
            <h3>Discussion Forums</h3>
            <p>Participate in academic discussions and Q&A.</p>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="faq-section" id="faqs">
        <h2>Frequently Asked Questions</h2>
        {faqData.map((item, index) => (
          <div className="faq-item" key={index}>
            <div
              className={`faq-question ${activeIndex === index ? 'active' : ''}`}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              style={{ cursor: "pointer" }}
            >
              {item.question}
              <span style={{ float: "right" }}>{activeIndex === index ? "−" : "+"}</span>
            </div>
            <div
              className="faq-answer"
              style={{
                display: activeIndex === index ? "block" : "none",
                transition: "all 0.3s ease"
              }}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 Qconnect. All rights reserved.</p>
      </footer>
    </>
  );
}