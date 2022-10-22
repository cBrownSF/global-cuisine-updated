import React from 'react';
// import { withRouter } from 'react-router';
import './review_form.css'
class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.review;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderReviewErrors = this.renderReviewErrors.bind(this);
    this.numberInput =this.numberInput.bind(this)
  }

  componentDidMount() {
    this.props.removeReviewErrors()
  }

  handleSubmit(e) {
    e.preventDefault();
    const listingId = this.props.listingId;
    const review = Object.assign({}, this.state, {
      listingId,
    });  
      this.props
        .submitReview(review)
        .then(
          this.setState({
            reviewer_name: "",
            review: "",
            score: "",
          })
        )
        .then(this.props.removeReviewErrors());
  }

  renderReviewErrors() {
    return (
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error ${i}`}>{error}</li>
          ))}
        </ul>
    );
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }
  numberInput(type) {
    const regex = /^[1-5\b]+$/;

    return e => {
      if (e.currentTarget.value === '' || regex.test(e.currentTarget.value) && e.currentTarget.value.length <= 1) {
        this.setState({ [type]: e.currentTarget.value })
      }
    }
  } 
  render() {
    console.log(this.props.currentUser)
    {
    return (
      <div className="Main-Review-Form">
        <div className="review-signedIn">
          {this.props.currentUser &&
            Object.keys(this.props.currentUser).length !== 0 &&
            this.props.currentUser.id === this.props.listing.author_id ? (
            ""
          ) : (
            <div className="review-logged-in">
                <h3 className="leave-review-inner">Leave a review</h3>
              <form onSubmit={this.handleSubmit}>
                <div className="reviews-create-show">
                  <div className="name-input-review">
                      <p className ='name-review'>{this.state.reviewer_name}</p>
                  </div>
                  <div className="body-input-review">
                    <p className ='title-review'>Description</p>
                      <textarea
                        value={this.state.review}
                        onChange={this.update("review")}
                        className="body-input"
                        placeholder=" Enter the details"
                      />
                  </div>
                  <div className="score-input-review">
                    <p className ='title-review'>Score</p>
                      <input
                        type="text"
                        value={this.state.score}
                        onChange={this.numberInput("score")}
                        className="score-input"
                      />
                     <p className='score-subtext'>Enter a number ranging 1 to 5</p> 
                  </div>
                  <div className="div-button-review">
                    <button
                      type="submit"
                      value={this.props.formType}
                      className="Create-Review-Button"
                    >
                      {this.props.formType}
                    </button>
                  </div>
                </div>
              </form>
              <div>
                <div className="review-errors">{this.renderReviewErrors()}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
    }
  }
}

export default ReviewForm;
