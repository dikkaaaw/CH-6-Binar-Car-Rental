import React from "react";
import "./LandingPage.css";
import "./LandingPage.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import users from "../assets/fi_users.png";
import imgCar from "../assets/img_car.png";
import { Link } from "react-router-dom";

function ListCars() {
  return (
    <div>
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
              <Link to={"/cars"}>
                <a href="cars.html" className="btn btn-primary">
                  Mulai Sewa Mobil
                </a>
              </Link>
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
    </div>
  );
}

export default ListCars;
