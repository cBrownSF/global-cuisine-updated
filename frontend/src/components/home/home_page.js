import React from "react";
import "./home.css";
import FilterContainer from "../filter/filter_container";

class HomePage extends React.Component {
  render() {
    return (
      <div className="home-page-container">
        <h1 className="home-phase">Explore the world through food</h1>
        <div className="filter-home">
          <FilterContainer />
        </div>
       </div>
    );
  }
}

export default HomePage;
