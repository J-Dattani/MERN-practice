import { useState } from "react";

/**
 * ResultCard Component
 * Displays the shortened URL in a clean, readable display.
 * Includes a premium "Copy" button that gives instant visual feedback.
 */
function ResultCard({ shortUrl }) {
  const [copied, setCopied] = useState(false);

  // If there is no shortened URL yet, don't show the card
  if (!shortUrl) {
    return null;
  }

  // Copy URL to clipboard with fallback handling
  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(shortUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset state after 2 seconds
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = shortUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <div className="result-box-card">
      <h3 style={{ fontSize: "20px", marginBottom: "15px" }}>Your shortened URL</h3>
      
      <div className="result-input-group">
        {/* Clickable shortened URL display box */}
        <a 
          className="result-link-display" 
          href={shortUrl} 
          target="_blank" 
          rel="noreferrer"
          title="Click to open link in a new tab"
        >
          {shortUrl}
        </a>

        {/* Copy Button */}
        <button 
          className={`copy-btn ${copied ? "copied" : ""}`} 
          onClick={copyToClipboard}
        >
          {copied ? "Copied!" : "Copy URL"}
        </button>
      </div>

      <p className="small text-muted mt-3 mb-0">
        Copy the shortened link and share it anywhere! You can also click the link to visit it.
      </p>
    </div>
  );
}

export default ResultCard;
