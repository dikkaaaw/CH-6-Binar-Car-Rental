import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import "./LandingPage.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import imgCar from "../assets/img_car.png";
import imgService from "../assets/img_service.png";
import rate from "../assets/Rate.png";
import imgPhoto from "../assets/img_photo.png";
import imgPhoto2 from "../assets/img_photo2.jpg";
import imgPhoto3 from "../assets/img_photo3.jpg";
import checklist from "../assets/Group_53.svg";
import iconComplete from "../assets/icon_complete.svg";
import iconPrice from "../assets/icon_price.svg";
import iconHours from "../assets/icon_24hrs.svg";
import iconProfessional from "../assets/icon_professional.svg";

function LandingPage() {
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
                <a className="btn btn-primary">Mulai Sewa Mobil</a>
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

      {/* Our Service */}
      <section className="content" id="ourService">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img
                className="img"
                style={{ height: "428px" }}
                src={imgService}
                alt=""
              />
            </div>
            <div className="col-lg-6" style={{ paddingTop: "15px" }}>
              <h2 className="fw-bold fs-4" style={{ paddingRight: "200px" }}>
                Best Car Rental for any kind of trip in Yogyakarta!
              </h2>
              <p style={{ fontSize: "14px", paddingRight: "30px" }}>
                Sewa mobil di Yogyakarta bersama Binar Car Rental jaminan harga
                lebih murah dibandingkan yang lain, kondisi mobil baru, serta
                kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
                wedding, meeting, dll.
              </p>
              <div className=" list-check ">
                <p>
                  <img src={checklist} style={{ marginRight: "16px" }} alt="" />{" "}
                  Sewa Mobil Dengan Supir di Bali 12 Jam
                </p>
              </div>
              <div className="list-check ">
                <p>
                  <img src={checklist} style={{ marginRight: "16px" }} alt="" />{" "}
                  Sewa Mobil Lepas Kunci di Bali 24 Jam
                </p>
              </div>
              <div className="list-check ">
                <p>
                  <img src={checklist} style={{ marginRight: "16px" }} alt="" />{" "}
                  Sewa Mobil Jangka Panjang Bulanan
                </p>
              </div>
              <div className="list-check ">
                <p>
                  <img src={checklist} style={{ marginRight: "16px" }} alt="" />{" "}
                  Gratis Antar - Jemput Mobil di Bandara
                </p>
              </div>
              <div className="list-check ">
                <p>
                  <img src={checklist} style={{ marginRight: "16px" }} alt="" />{" "}
                  Layanan Airport Transfer / Drop In Out
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="why" id="whyUs">
        <div className="container">
          <div className="row">
            <h2 className="fw-bold">Why Us ?</h2>
            <p style={{ marginTop: "16px" }}>
              Mengapa harus pilih Binar Car Rental
            </p>
          </div>
          <div className="row" style={{ marginTop: "40px" }}>
            <div className="col-lg-3">
              <div className="card-why">
                <img src={iconComplete} alt="" />
                <h2 style={{ fontSize: "16px", marginTop: "16px" }}>
                  Mobil Lengkap
                </h2>
                <p style={{ lineHeight: "20px" }}>
                  Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                  terawat
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card-why">
                <img src={iconPrice} alt="" />
                <h2 style={{ fontSize: "16px", marginTop: "16px" }}>
                  Harga Murah
                </h2>
                <p style={{ lineHeight: "20px" }}>
                  Harga murah dan bersaing, bisa bandingkan harga kami dengan
                  rental mobil lain
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card-why">
                <img src={iconHours} alt="" />
                <h2 style={{ fontSize: "16px", marginTop: "16px" }}>
                  Layanan 24 Jam
                </h2>
                <p style={{ lineHeight: "20px" }}>
                  Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                  tersedia di akhir minggu
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card-why">
                <img src={iconProfessional} alt="" />
                <h2 style={{ fontSize: "16px", marginTop: "16px" }}>
                  Sopir Profesional
                </h2>
                <p style={{ lineHeight: "20px" }}>
                  Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
                  tepat waktu
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimony */}
      <section id="testimonySection" style={{ paddingTop: "5px" }}>
        <div className="testimony-box container" style={{ marginTop: "90px" }}>
          <div className="container text-center">
            <h3 id="testimoniTitle" className="mb-4 fw-bold">
              Testimonial
            </h3>
            <p id="testimoniDesc" className="mb-4">
              Berbagai review positif dari para pelanggan kami
            </p>
            {/* Carousel */}
            <div
              id="carouselTestimonialAutoplaying"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="d-flex">
                    <div className="row-carousel-content">
                      <div className="col-3 ms-5">
                        <img src={imgPhoto} alt="Person 1" />
                      </div>
                    </div>
                    <div id="testimoniContent" className="col ms-5">
                      <img
                        src={rate}
                        alt="rating"
                        className="w-25 mb-3 mb-lg-2"
                      />
                      <p className="testimonial-text mb-2">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod"
                      </p>
                      <p className="testimonial-person">John Doe 32, Bromo</p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-flex">
                    <div className="row-carousel-content">
                      <div className="col-3 ms-5">
                        <img
                          className="profile-img rounded-circle"
                          src={imgPhoto2}
                          alt="Person 2"
                        />
                      </div>
                    </div>
                    <div
                      className="col ms-5"
                      style={{
                        textAlign: "left",
                        marginTop: "70px",
                        marginRight: "110px",
                      }}
                    >
                      <img
                        src={rate}
                        alt="rating"
                        className="w-25 mb-3 mb-lg-2"
                      />
                      <p className="testimonial-text mb-2">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod"
                      </p>
                      <p className="testimonial-person">
                        Dika Wicaksono 20, Yogyakarta
                      </p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-flex">
                    <div className="row-carousel-content">
                      <div className="col-3 ms-5">
                        <img
                          className="profile-img rounded-circle"
                          src={imgPhoto3}
                          alt="Person 3"
                        />
                      </div>
                    </div>
                    <div
                      className="col ms-5"
                      style={{
                        textAlign: "left",
                        marginTop: "70px",
                        marginRight: "110px",
                      }}
                    >
                      <img
                        src={rate}
                        alt="rating"
                        className="w-25 mb-3 mb-lg-2"
                      />
                      <p className="testimonial-text mb-2">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod"
                      </p>
                      <p className="testimonial-person">
                        Rizky Wir 20, Yogyakarta
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselTestimonialAutoplaying"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselTestimonialAutoplaying"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sewa Mobil */}
      <section className="sewa">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-lg-center text-center py-5">
              <h1 className="text-white fw-bold">
                Sewa Mobil di Yogyakarta Sekarang
              </h1>
              <p className="text-white pt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
              <Link to={"/cars"}>
                <button className="btn btn-utama mt-4">Mulai Sewa Mobil</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Question */}
      <section className="faq" id="faq">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 title-faq">
              <h2 className="fw-bold">Frequently Asked Question</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className="col-lg-7">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Apa saja syarat yang dibutuhkan?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>This is the first item's accordion body.</strong>{" "}
                      It is shown by default, until the collapse plugin adds the
                      appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the <code>.accordion-body</code>, though the
                      transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item mt-3">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Berapa hari minimal sewa mobil lepas kunci?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>This is the second item's accordion body.</strong>{" "}
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the <code>.accordion-body</code>, though the
                      transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item mt-3">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Berapa hari sebelumnya sebaiknya booking sewa mobil?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>This is the third item's accordion body.</strong>{" "}
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the <code>.accordion-body</code>, though the
                      transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item mt-3">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      Apakah Ada biaya antar-jemput?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>This is the fourth item's accordion body.</strong>{" "}
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the <code>.accordion-body</code>, though the
                      transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item mt-3">
                  <h2 className="accordion-header" id="headingFive">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      Bagaimana jika terjadi kecelakaan?
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>This is the fifth item's accordion body.</strong>{" "}
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the <code>.accordion-body</code>, though the
                      transition does limit overflow.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
