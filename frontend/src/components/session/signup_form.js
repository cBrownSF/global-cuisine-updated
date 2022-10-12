import React from 'react';
import { withRouter } from 'react-router-dom';
import './sign_up_form.css'
class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      password2: ''
    };
  
    this.handleSubmit = this.handleSubmit.bind(this);
  }

 
   componentDidMount() {
     this.props.clearErrors()
   }
 
  handleInput(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state)
    .then( res =>{
      if (res.type !== 'RECEIVE_SESSION_ERRORS'){
        this.props.login(this.state)
      }
      }
    )
  }

  renderErrors() {
    return (
      <ul className="error-list">
        {Object.values(this.props.errors).map((error, i) => (
          <li className= "errors" key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
   )
  }

  render() {
    return (
      <div className="login-container">
        <form onSubmit={this.handleSubmit} className="session-form">
          <h1>Sign Up</h1>
          <label htmlFor="email"></label>
            <input type="text"
              id="email"
              aria-label= "email"
              className='form-fields'
              value={this.state.email}
              onChange={this.handleInput('email')}
              placeholder="Email"
            />
            <label htmlFor="username"></label>
            <input type="text"
              id="username"
              aria-label = "username"
              className='form-fields'
              value={this.state.username}
              onChange={this.handleInput('username')}
              placeholder="Username"
            />
            <label htmlFor="password-one"></label>
            <input type="password"
              id="password-one"
              aria-label="password-one"
              className='form-fields'
              value={this.state.password}
              onChange={this.handleInput('password')}
              placeholder="Password"
            />
            <label htmlFor="password-2"></label>
            <input type="password"
              id="password-2"
              className='form-fields'
              aria-lable ="password-2"
              value={this.state.password2}
              onChange={this.handleInput('password2')}
              placeholder="Confirm Password"
            />
            <input className='sign-up-submit-button' type="submit" value="Submit" />
            {this.renderErrors()}
     
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);