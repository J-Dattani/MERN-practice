function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg bg-white">

             <div className="container">

        <a className="navbar-brand fw-bold" href="#">
          Shortly
        </a>

        <div>
          <button className="btn btn-outline-primary me-2">
            Login
          </button>

<button className="btn btn-primary">
            Sign Up
          </button>
        </div>

        </div>
        </nav>
    )};

export default Navbar;