import React from "react";

import logo from "../assets/logo.png";
import iconFacebook from "../assets/icon_facebook.svg";
import iconInstagram from "../assets/icon_instagram.svg";
import iconMail from "../assets/icon_mail.svg";
import iconTwitch from "../assets/icon_twitch.svg";
import iconTwitter from "../assets/icon_twitter.svg";

function Footer() {
  return (
    <div>
      {/* Footer */}
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-3 mx-auto">
              <p className="fw-light">
                Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
              </p>
              <p className="fw-light">binarcarrental@gmail.com </p>
              <p>081-233-334-808</p>
            </div>
            <div className="col-md-3 mx-auto">
              <p>Our services</p>
              <p>Why Us</p>
              <p>Testimonial</p>
              <p>FAQ</p>
            </div>
            <div className="col-md-3 mx-auto">
              <p className="fw-light">Connect With Us</p>
              <p>
                <img className="mx-1" src={iconFacebook} alt="" />
                <img className="mx-1" src={iconInstagram} alt="" />
                <img className="mx-1" src={iconTwitter} alt="" />
                <img className="mx-1" src={iconMail} alt="" />
                <img className="mx-1" src={iconTwitch} alt="" />
              </p>
            </div>
            <div className="col-md-3 mx-auto">
              <p>Copyright Binar 2022</p>
              <img src={logo} alt="" width="100px" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
