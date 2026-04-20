import React from "react";
import "../../styles/styles.css";
import "./ContactPage.css";
import Fade from "react-reveal/Fade";

function ContactPage() {
  return (
    <div className="content">
      <Fade bottom>
        <div className="contactForm">
          <form
            id="fs-frm"
            name="registration-form"
            acceptCharset="utf-8"
            action="https://formspree.io/f/mjvqjzld"
            method="post"
          >
            <h1>Lets Work Together</h1>
            <h3 className="contact-description">
              To find the best solution for you. <br></br>
              <br></br>
              Submit the form below <br></br>or contact us at: <br></br>☎
              (516)-663-0968 <br></br>✉ longwavetechinfo@gmail.com
            </h3>
            <div className="form_row_with_grid">
              <div className="form-field">
                <div className="input-data">
                  <input
                    type="text"
                    name="name"
                    id="firstname-input"
                    required
                  />
                  <div className="underline" id="firstname-underline"></div>
                  <label id="firstname-label" htmlFor="first-name">
                    First Name
                  </label>
                </div>
              </div>
              <div className="form-field">
                <div className="input-data">
                  <input type="text" name="name" id="lastname-input" required />
                  <div className="underline" id="lastname-underline"></div>
                  <label id="lastname-label" htmlFor="last-name">
                    Last Name
                  </label>
                </div>
              </div>
            </div>
            <div className="form-field">
              <div className="input-data">
                <input
                  type="email"
                  name="_replyto"
                  id="email-address"
                  required
                />
                <div className="underline"></div>
                <label htmlFor="">Email</label>
              </div>
            </div>
            <div className="form_row_with_grid">
              <div className="form-field">
                <div className="input-data">
                  <input
                    type="text"
                    name="street"
                    id="address-input"
                    required
                  />
                  <div className="underline" id="address-underline"></div>
                  <label id="address-label" htmlFor="">
                    Address
                  </label>
                </div>
              </div>
              <div className="form-field">
                <div className="input-data">
                  <input type="text" name="city" id="city-input" required />
                  <div className="underline" id="city-underline"></div>
                  <label id="city-label" htmlFor="">
                    City
                  </label>
                </div>
              </div>
            </div>
            <div className="form_row_with_grid">
              <div className="form-field" id="state-select-div">
                <select
                  className="input-date"
                  id="state-selection"
                  name="state"
                  required=""
                >
                  <option value="" selected="" disabled="" id="state-option">
                    State
                  </option>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="DC">District Of Columbia</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                </select>
                <div className="underline" id="state-underline"></div>
              </div>
              <div className="form-field">
                <div className="input-data">
                  <input
                    type="text"
                    name="postal-code"
                    id="zipcode-input"
                    required
                  />
                  <div className="underline" id="zipcode-underline"></div>
                  <label id="zipcode-label" htmlFor="">
                    Zipcode
                  </label>
                </div>
              </div>
            </div>
            <div className="form-field">
              <div className="input-data">
                <input type="text" name="note" id="note" required />
                <div className="underline"></div>
                <label htmlFor="">Message</label>
              </div>
            </div>
            <input
              type="hidden"
              name="_subject"
              id="email-subject"
              value="Longwave Contact Form Submission"
            />
            <input className="submitbtn" type="submit" value="Submit" />
          </form>
        </div>
      </Fade>
    </div>
  );
}
export default ContactPage;
