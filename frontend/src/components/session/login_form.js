import React from 'react';
import { withRouter } from 'react-router-dom';
import './sign_up_form.css'
class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }
  
  componentDidMount() {
    this.props.clearErrors()
  }

  componentDidUpdate(){
    if (this.props.currentUser !== undefined){
      this.props.history.push('/');
    }
  }
 
  handleInput(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);

  }

  renderErrors() {
    return (
      <ul className = "errors-list">
        {Object.values(this.props.errors).map((error, i) => (
          <li className="errors" key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    )
  }

  render() {
    return (
      <div className='login-container'>
        <form onSubmit={this.handleSubmit} className = 'session-form'>
            <h1>Login</h1>
            <input type="text"
              id="login-email"
              aria-label="login-email"
              className='form-fields'
              value={this.state.email}
              onChange={this.handleInput('email')}
              placeholder="Email"
            />
            <label htmlFor="login-password"></label>
            <input type= "password"
              id="login-password"
              aria-label='login-password'
              className='form-fields'
              value={this.state.password}
              onChange={this.handleInput('password')}
              placeholder="Password"
            />
            <input className = 'sign-up-submit-button' type="submit" value="Submit" />
            {this.renderErrors()}
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);