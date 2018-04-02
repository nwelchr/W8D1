import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => this.setState({
      [field]: e.target.value
    });
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, idx) => (
          <li key={idx}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(result => this.props.history.push('/'));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Please {this.props.formType} or {this.props.navLink}</h1>
          {this.renderErrors}
          <label>Username
            <input type="text"
              onChange={this.update('username')}
              value={this.state.username}
              />
          </label>
          <br />
          <label>Password
            <input type="password"
              onChange={this.update('password')}
              value={this.state.password}
              />
          </label>
          <input type="submit" value={this.props.formType} />
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
