import React from "react";
import "./home.css";
import FilterContainer from "../filter/filter_container";

class HomePage extends React.Component {
  render() {
    return (
      <div className="home-page-container">
        <div className = 'home-page-inside'>
        <h1 className="home-title">Explore the world through food</h1>
        <div className="filter-home">
          <FilterContainer />
        </div>
        </div>
       </div>
    );
  }
}

export default HomePage;
