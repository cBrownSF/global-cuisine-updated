import React from "react";
import "./recipe_index.css"
import { Link } from "react-router-dom";
const RecipeIndexItem = (props) => {
  const {listing} = props;
  return (
    <div className="recipe-card">
      <Link to={`/recipes/${listing._id}`} className="link-item-index">
          <img
            src={listing.picture}
            alt="food-pic"
            className="image-index-item"
          ></img>
        <div className="title-div">
          <h3 className="title-index-item">{listing.title}</h3>
        </div>
      </Link>
    </div>
  );
}

export default RecipeIndexItem;


