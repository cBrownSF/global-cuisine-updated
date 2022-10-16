import React from "react";
import { Link } from "react-router-dom";
import "./filter.css";
export default function FilterList({listing:{_id, picture, title}}){
  return (
    <div className="filter-item">
      <Link to={`/recipes/${_id}`} className="link-filter">
        <div className="filter-item-image">
          <img
            src={picture}
            alt={title}
            className="images-filter"
          ></img>
          <p className="title-filter">{title}</p>
        </div>
      </Link>
    </div>
  );
}

