import React from "react";
import { Link } from "react-router-dom";
const Index = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="hh">
        
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
          </ul>
          <div class="d-flex" style={{ justifyContent: "center" }}>
            <Link
              class="btn btn-primary"
              aria-current="page"
              to="/login"
              style={{ marginRight: "10px" }}
            >
              Login
            </Link>
            
            {/* <Link class="btn btn-primary" aria-current="page" to="/signup">
              Signup
            </Link> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Index;
