import React,{useEffect,useState} from 'react';
import './review_form.css'

const ReviewIndexItem = ({ review, updateReview,listingId, currentUser, deleteReview }) => {

  return (
    <div className='review-and-button'>
      <div className="review-index-items">
        {listingId !== review.listing_id ? (
          ""
        ) : (
          <div className="review-index-item">
            <div className='reviewer-name'>{review.reviewer_name}</div>
            <div className="review-score">
              <p><span style= {{fontWeight:"900"}}>Rating: </span><span> {review.score}</span></p>
            </div>
            <div className="review-title">
              <p>{review.review}</p>
            </div>
          </div>
        )}
      </div>
      <div>
        {
        currentUser && currentUser.id === review.author_id ? (
          <div className='delete-review-show'>
            <button 
            className='btn-delete-review-show'
            onClick={
              () => deleteReview(review._id).then(()=>{
                updateReview(listingId)
              }
              ) 
              }>
              Delete Review
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default ReviewIndexItem
