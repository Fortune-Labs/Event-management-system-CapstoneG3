import React from "react";

export default class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container">
        <div className="header">Registration</div>
        <div className="content">
          <div className="form">
            <div className="form-group">
              <input type="text" name="fname" placeholder="First Name" />
              <input type="text" name="lname" placeholder="Last Name" />
              <input type="text" name="email" placeholder="Email" />
              <input type="text" name="fname" placeholder="First Name" />
              <input type="text" name="fname" placeholder="First Name" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
