import { useState } from "react";
import { shortenUrl } from "../services/urlservices";

/**
 * UrlForm Component
 * Renders the input container card matching shorturl.at.
 * 
 * Beginner-friendly guide:
 * - We use useState to keep track of what the user types (url).
 * - We use isLoading to show a helpful loading state while waiting for the API.
 * - We use error state to show validation or api connection issues.
 */
function UrlForm({ setShortUrl }) {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    // Prevent page reload on form submit
    e.preventDefault();
    
    // Clear previous errors & results
    setError("");
    setShortUrl("");

    // Simple validation: check if user inputted anything
    if (!url.trim()) {
      setError("Please paste a valid URL to shorten.");
      return;
    }

    try {
      setIsLoading(true);
      const result = await shortenUrl(url);

      // Check if the backend returned a successful shortUrl
      if (result && result.shortUrl) {
        setShortUrl(result.shortUrl);
      } else {
        setError(result.error || "Failed to shorten URL. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Could not reach the server. Please make sure the backend is running.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="url-box-card">
      <h2 className="url-box-title">Paste the URL to be shortened</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="form-url-container">
          <input
            type="text"
            className="url-input"
            placeholder="Enter the link here"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            disabled={isLoading}
          />
          <button 
            type="submit" 
            className="url-submit-btn"
            disabled={isLoading}
          >
            {isLoading ? "Shortening..." : "Shorten URL"}
          </button>
        </div>
      </form>

      {/* Beginner friendly error display */}
      {error && (
        <div className="text-danger mt-3 small fw-bold">
          ⚠️ {error}
        </div>
      )}

      <p className="box-desc-text text-center text-secondary">
        ShortURL is a free tool to shorten URLs and generate short links.<br />
        URL shortener allows you to create a shortened link making it easy to share.
      </p>
    </div>
  );
}

export default UrlForm;