import { Link } from "react-router-dom";
import { Logout } from "./Logout";

export function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><img src="https://i1.sndcdn.com/avatars-000423224016-58aefd-t500x500.jpg" width="20" height="94"></img></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="/">Home</a>
      </li>
        
        <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
        </li>
        
        <li className="nav-item">
        <Link className="nav-link" to="/products/new">New Product</Link>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Signup/Login
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/signup">Signup</a></li>
            <li><a className="dropdown-item" href="/login">Login</a></li>            
            <li><hr className="dropdown-divider" /></li>
            <li><Logout className="dropdown-item" /></li>
          </ul>
        </li>

        {/* <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li> */}

      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

