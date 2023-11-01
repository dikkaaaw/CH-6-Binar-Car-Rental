import React from "react";
import "./LandingPage.css";
import "./LandingPage.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import logo from "../assets/logo.png";
import users from "../assets/fi_users.png";
import imgCar from "../assets/img_car.png";
import iconFacebook from "../assets/icon_facebook.svg";
import iconInstagram from "../assets/icon_instagram.svg";
import iconMail from "../assets/icon_mail.svg";
import iconTwitch from "../assets/icon_twitch.svg";
import iconTwitter from "../assets/icon_twitter.svg";

function ListCars() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-transparent">
        <div className="container">
          <a href="index.html">
            <img
              className="navbar-brand"
              src={logo}
              alt=""
              style={{ width: "100px", height: "34px" }}
            />
          </a>
          <button
            className="btn btn-white navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
          >
            <div className="offcanvas-header">
              <h5
                className="offcanvas-title fw-bold"
                style={{ marginLeft: "20px" }}
                id="offcanvasRightLabel"
              >
                BCR
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body justify-content-end">
              <ul className="navbar-nav mr-2 mb-lg-0">
                <li className="nav-item mx-3 my-1">
                  <a className="nav-link" href="#ourService">
                    Our Services
                  </a>
                </li>
                <li className="nav-item mx-3 my-1">
                  <a className="nav-link ml" href="#whyUs">
                    Why Us
                  </a>
                </li>
                <li className="nav-item mx-3 my-1">
                  <a className="nav-link" href="#testimonySection">
                    Testimonial
                  </a>
                </li>
                <li className="nav-item mx-3 my-1">
                  <a className="nav-link" href="#faq">
                    FAQ
                  </a>
                </li>
              </ul>
              <button className="btn btn-register mx-3 my-1">Register</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Section */}
      <section className="hero">
        <div className="container-xxl">
          <div className="row">
            <div
              className="col-lg-5  mx-lg-5 col-xl-5 col-xxl-5 mx-md-0 "
              style={{ paddingTop: "100px" }}
            >
              <h2 className="fw-bold" style={{ paddingRight: "10px" }}>
                Sewa & Rental Mobil Terbaik di kawasan Yogyakarta
              </h2>
              <p style={{ paddingRight: "40px" }}>
                Selamat datang di Binar Car Rental. Kami menyediakan mobil
                kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                kebutuhanmu untuk sewa mobil selama 24 jam.{" "}
              </p>
              <a href="cars.html" className="btn btn-primary">
                Mulai Sewa Mobil
              </a>
            </div>
            <div
              className="col-lg-5 col-xl-6 col-xxl-6 mt-lg-3"
              style={{ paddingTop: "50px" }}
            >
              <img className="" width="100%" src={imgCar} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Search section */}
      <section className="search">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12">
              <div className="row search__card mx-lg-5 py-3 px-4">
                <div className="col-lg-auto col-xl-2 col-xxl-3 col-md-auto">
                  <label>Tipe Driver</label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="tipeDriver"
                  >
                    <option value="default" selected>
                      Pilih Tipe Driver &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    </option>
                    <option value="true">Dengan Supir</option>
                    <option value="false">Tanpa Supir (Lepas Kunci)</option>
                  </select>
                </div>
                <div className="col-lg-auto col-xl-auto col-md-auto">
                  <label>Tanggal</label>
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Pilih Tanggal"
                    id="tanggal"
                  />
                </div>
                <div className="col-lg-auto col-xl-auto col-md-auto search__time">
                  <label>Pilih Waktu</label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="waktuJemput"
                  >
                    <option value="false" selected>
                      Pilih Waktu &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    </option>
                    <option value="08:00">08.00 WIB</option>
                    <option value="09:00">09.00 WIB</option>
                    <option value="10:00">10.00 WIB</option>
                    <option value="11:00">11.00 WIB</option>
                    <option value="12:00">12.00 WIB</option>
                  </select>
                </div>
                <div className="col-lg-auto col-xl-auto col-md-auto">
                  <label className="fw-light">
                    Jumlah Penumpang (optional)
                  </label>
                  <div className="input-group">
                    <input
                      type="search"
                      className="form-control border-end-0"
                      placeholder="Jumlah Penumpang"
                      id="jumlahPenumpang"
                      value="0"
                    />
                    <span className="input-group-text bg-white">
                      <img src={users} width="20px" alt="" />
                    </span>
                  </div>
                </div>
                <div className="col-lg-2 col-xl-auto col-md-2  pt-4">
                  <button className="btn btn-primary" id="load-btn">
                    Cari Mobil
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* List Car Section */}
      <section className="cars">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-11">
              <div className="row" id="cars-container"></div>
            </div>
          </div>
        </div>
      </section>

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

export default ListCars;
