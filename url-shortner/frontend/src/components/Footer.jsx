/**
 * Footer Component
 * Renders copyright and navigation links mirroring the 'Shortly' branding.
 */
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="custom-footer">
      <div className="container">
        {/* Copyright notice */}
        <p className="mb-2">
          © {currentYear} Shortly - Tool to shorten a long link
        </p>

        {/* Link navigation items */}
        <ul className="footer-nav">
          <li>
            <a href="/" className="footer-nav-link">
              Shortly Home
            </a>
          </li>
          <li>
            <a href="#" className="footer-nav-link">
              URL Click Counter
            </a>
          </li>
          <li>
            <a href="#" className="footer-nav-link">
              Unshorten URL
            </a>
          </li>
          <li>
            <a href="#" className="footer-nav-link">
              Report Malicious URL
            </a>
          </li>
          <li>
            <a href="#" className="footer-nav-link">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="#" className="footer-nav-link">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="footer-nav-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
