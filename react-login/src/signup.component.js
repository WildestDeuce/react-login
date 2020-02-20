import React, { Component } from 'react';

export default class SignUp extends Component {
  render() {
    return (
      <form>
        <h3>Sign Up</h3>

        <div className="form-group">
          <label>First Name</label>
          <input type="text" className="form-control" placeholder="First Name" />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input type="text" className="form-control" placeholder="Last Name" />
        </div>


        <div className="form-group">
          <label>Email Address</label>
          <input type="text" className="form-control" placeholder="email" />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="text" className="form-control" placeholder="password" />
        </div>

        <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
        <p className="forgot-password text-right">
          Already registered <a href="#">Sign In></a>
        </p>
      </form>      
    );
  }
}
