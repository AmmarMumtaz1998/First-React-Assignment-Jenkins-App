import React from 'react';

const Header = () => {
    return (
        <div style={{outerWidth:"100%"}}>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
              <a className="navbar-brand ml-60" href="../modules/LandingPage.jsx"><h6 style={{color:"whitesmoke", fontSize:"3.3vh"}}>Jenkins</h6></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="https://www.google.com/"><b style={{color:"whitesmoke"}}>Google</b></a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link" href="https://www.facebook.com/"><b style={{color:"whitesmoke"}}>Facebook</b></a>
                  </li>
                  <li className="nav-item active dropdown">
                    <a className="nav-link dropdown-toggle" href="a" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <b style={{color:"whitesmoke"}}>About Us</b>
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a className="dropdown-item" href="https://getbootstrap.com/">Bootstrap</a>
                      <a className="dropdown-item" href="https://materializecss.com/">Materialized Css</a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="https://bulma.io/">Bulma Css</a>
                    </div>
                  </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                  <button className="btn btn-outline-danger my-2 my-sm-0 mr-2" type="submit">Download</button>
                  <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                </form>
              </div>
</nav>
        </div>
    )
}

export default Header;
