import React from "react";
import "./style.css";

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
              <form>
                <div>
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                  />
                </div>
                <div></div>
                <input type="text" name="email" placeholder="Email" />
                <br></br>
                <input type="password" name="pwd" placeholder="Password" />
                <br></br>
                <input
                  type="password"
                  name="cpwd"
                  placeholder="Confirm Password"
                />
                <input type="text" name="address" placeholder="Address" />{" "}
                <br />
                <input type="text" name="phone" placeholder="Phone" />
                <select id="city" name="city" placeholder="Phone">
                  <option value="" disabled selected hidden>
                    Choose city
                  </option>
                  <option value="acc">Accra</option>
                  <option value="tma">Tamale</option>
                  <option value="ksi">Kumasi</option>
                </select>{" "}
                <br></br>
                <label>
                  <input name="agreement" type="checkbox" />I agree with the
                  term and conditions
                </label>{" "}
                <br />
                <button onClick={this.register} type="submit" className="btn">
                  Create Account
                </button>
              </form>
              <footer>
                <p>dfdfdfdfdfd</p>
              </footer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
