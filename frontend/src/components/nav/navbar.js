import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./nav.css";
import SearchContainer from "../search/search_container";



class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }
  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
    this.props.history.push('/')
  }
  
  demoLogin(e){
    e.preventDefault();
    this.props.loginDemoUser();
  }

  getLinks() {
    if (this.props.loggedIn) {
      return (
        <ul className="links-nav">
          <li><Link to={"/recipes"} className="link-on-nav">All Recipes</Link></li>
          <li><Link to={"/profile"} className="link-on-nav">Profile</Link></li>
          <li><Link to={"/recipes/new"} className="link-on-nav">Create Recipe</Link></li>
          <li><button onClick={this.logoutUser} className="logout-btn">Logout</button></li>
          <li><Link to="/about" className="link-on-nav">About Us</Link></li>
        </ul>
      );
    } else {
      return (
        <ul className="links-nav">
          <li><Link to={"/signup"} className="link-on-nav">Signup</Link></li>
          <li><Link to={"/login"} className="link-on-nav">Login</Link></li>
          <li><button onClick={this.demoLogin} className="link-on-nav">Demo Login</button></li>
          <li><Link to="/recipes" className="link-on-nav">All Recipes</Link></li>
          <li><Link to="/about" className="link-on-nav">About Us</Link></li>
        </ul>
      );
    }
  }
  render() {
    return (
      <nav className="navbar-top">
        <div className="icon-and-title">
          <Link to="/" className = "link-on-nav">
            <i className="fas fa-globe-americas" id="globe-icon"></i>
          </Link>
          <div className="homelink-global">
            <Link to="/" className="link-on-nav">
              <p className="text-global">Global Cuisine</p>
            </Link>
          </div>
        </div>
          <SearchContainer />
        <div>{this.getLinks()}</div>
        
      </nav>
    );
  }
}

export default withRouter(NavBar);
