import { useState } from "react";
import Navbar from "../components/Navbar";
import UrlForm from "../components/UrlForm";
import ResultCard from "../components/ResultCard";
import Footer from "../components/Footer";

/**
 * Home Page Component
 * Ties the entire shortly layout together:
 * - Header (Navbar)
 * - main content: URL input box (UrlForm) & Result box (ResultCard)
 * - 3 Step Cards (Paste, Shorten, Share)
 * - Info description paragraphs
 * - 6 Feature Columns with clean inline SVGs
 * - Interactive FAQ Accordions (using simple state)
 * - Footer
 */
function Home() { 
  const [shortUrl, setShortUrl] = useState("");
  
  // State for the interactive FAQ accordion
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);

  // List of FAQ questions and answers
  const faqData = [
    {
      question: "What is Shortly?",
      answer: "Shortly is a clean and lightweight URL shortener tool that allows you to turn long, messy links into short, elegant, and easily shareable URLs instantly."
    },
    {
      question: "Is it free to use?",
      answer: "Absolutely! Shortly is completely free to use. There are no limits on the number of links you can shorten or the traffic they can receive."
    },
    {
      question: "How long do the shortened links last?",
      answer: "Our links are designed to last permanently. As long as the link does not violate our terms of service (such as spam, malware, or fishing), it will remain active forever."
    },
    {
      question: "Can I use it on mobile devices?",
      answer: "Yes, Shortly is designed with a mobile-first philosophy. It works flawlessly across smartphones, tablets, laptops, and desktop computers."
    }
  ];

  // Helper function to open/close accordion items
  function toggleFaq(index) {
    if (activeFaqIndex === index) {
      setActiveFaqIndex(null); // Close if already open
    } else {
      setActiveFaqIndex(index); // Open the clicked item
    }
  }

  return (
    <div className="app-container">
      {/* 1. Header Navigation */}
      <Navbar />

      {/* 2. Main Content Wrapper */}
      <main className="container">
        
        {/* URL Shortening form card */}
        <UrlForm setShortUrl={setShortUrl} />

        {/* Shortened URL display card (rendered only if shortUrl exists) */}
        <ResultCard shortUrl={shortUrl} />

        {/* 3 Step-by-Step cards */}
        <h2 className="steps-title">How it works</h2>
        <div className="row g-4 mb-5 max-width-758 mx-auto" style={{ maxWidth: "758px" }}>
          
          <div className="col-12 col-md-4">
            <div className="step-card text-center text-md-start">
              <div className="step-number mx-auto mx-md-0">1</div>
              <h3 className="step-title">Paste Link</h3>
              <p className="step-desc">
                Copy your long URL from any browser or app and paste it into the search box above.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="step-card text-center text-md-start">
              <div className="step-number mx-auto mx-md-0">2</div>
              <h3 className="step-title">Shorten URL</h3>
              <p className="step-desc">
                Click the "Shorten URL" button. Our system processes it and creates a tidy, short link.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="step-card text-center text-md-start">
              <div className="step-number mx-auto mx-md-0">3</div>
              <h3 className="step-title">Share Everywhere</h3>
              <p className="step-desc">
                Copy the new short URL with one click and share it on Instagram, Twitter, chats, or emails.
              </p>
            </div>
          </div>

        </div>

        {/* Detailed Information Paragraphs */}
        <div className="info-section">
          <h2>Simple and fast URL shortener!</h2>
          <p>
            Shortly allows you to shorten long links from Instagram, Facebook, YouTube, Twitter, 
            LinkedIn, WhatsApp, TikTok, blogs, and any other domain name. Just paste your long 
            URL and click the Shorten URL button. On the next page, copy the shortened URL and 
            share it in forums, emails, documents, or social media posts.
          </p>

          <h2>Shorten, share and track</h2>
          <p>
            Your shortened URLs can be used in publications, documents, advertisements, blogs, 
            forums, instant messages, and other locations. Track statistics for your business 
            and projects by monitoring the clicks and visits on your links.
          </p>
        </div>

        {/* 6-Column Feature Grid with SVGs */}
        <div className="features-container">
          <div className="row g-4">
            
            {/* Feature 1: Easy */}
            <div className="col-12 col-md-4 feature-col">
              <div className="feature-icon-wrapper">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                </svg>
              </div>
              <h3 className="feature-title">Easy</h3>
              <p className="feature-desc">
                Shortly is easy and fast, just enter the long link to get your shortened link instantly.
              </p>
            </div>

            {/* Feature 2: Shortened */}
            <div className="col-12 col-md-4 feature-col">
              <div className="feature-icon-wrapper">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
              </div>
              <h3 className="feature-title">Shortened</h3>
              <p className="feature-desc">
                Use any link, no matter what size or length it is, our system will always shorten it.
              </p>
            </div>

            {/* Feature 3: Secure */}
            <div className="col-12 col-md-4 feature-col">
              <div className="feature-icon-wrapper">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="feature-title">Secure</h3>
              <p className="feature-desc">
                It is fast and secure. Our service has HTTPS protocols and strong data encryption.
              </p>
            </div>

            {/* Feature 4: Statistics */}
            <div className="col-12 col-md-4 feature-col">
              <div className="feature-icon-wrapper">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="20" x2="18" y2="10" />
                  <line x1="12" y1="20" x2="12" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="14" />
                </svg>
              </div>
              <h3 className="feature-title">Statistics</h3>
              <p className="feature-desc">
                Monitor and check the number of clicks and visits your shortened URL has received.
              </p>
            </div>

            {/* Feature 5: Reliable */}
            <div className="col-12 col-md-4 feature-col">
              <div className="feature-icon-wrapper">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3 className="feature-title">Reliable</h3>
              <p className="feature-desc">
                All links that try to disseminate spam, viruses, and malware are actively filtered and deleted.
              </p>
            </div>

            {/* Feature 6: Devices */}
            <div className="col-12 col-md-4 feature-col">
              <div className="feature-icon-wrapper">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                  <line x1="12" y1="18" x2="12.01" y2="18" />
                </svg>
              </div>
              <h3 className="feature-title">Devices</h3>
              <p className="feature-desc">
                Fully responsive and compatible with smartphones, tablets, laptops, and desktop screens.
              </p>
            </div>

          </div>
        </div>

        {/* 3. Interactive FAQ Accordion Section */}
        <h2 className="faq-section-title">Frequently Asked Questions</h2>
        <div className="faq-container">
          {faqData.map((item, index) => {
            const isActive = activeFaqIndex === index;
            return (
              <div 
                key={index} 
                className={`custom-accordion-item ${isActive ? "active" : ""}`}
              >
                <button 
                  className="accordion-header-btn" 
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isActive}
                >
                  <span>{item.question}</span>
                  <span className="accordion-icon">{isActive ? "−" : "+"}</span>
                </button>
                
                {/* Smooth collapse container */}
                {isActive && (
                  <div className="accordion-body-content">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </main>

      {/* 4. Footer Links and Branding */}
      <Footer />
    </div>
  );
}

export default Home;