/**
 * Navbar Component
 * Features a modern bold purple-to-indigo gradient text for the brand "Shortly".
 */
function Navbar() {
  return (
    <header className="custom-header text-center">
      <div className="container d-flex flex-column align-items-center py-2">
        {/* Main Logo linking to home, styled with a beautiful gradient */}
        <a href="/" className="logo-link">
          Shortly
        </a>
        
        {/* Modern Tagline */}
        <span className="text-secondary small mt-1">
          Simple, Fast Link Shortener
        </span>
      </div>
    </header>
  );
}

export default Navbar;