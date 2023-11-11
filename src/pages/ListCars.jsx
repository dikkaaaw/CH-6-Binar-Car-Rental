import { Link } from "react-router-dom";
import { useListCarsContext } from "../context/ListCars";
import "./LandingPage.css";
import "./LandingPage.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import userLogo from "../assets/fi_users.png";
import settingLogo from "../assets/fi_settings.png";
import calendarLogo from "../assets/fi_calendar.png";
import imgCar from "../assets/img_car.png";

function ListCars() {
  const {
    filteredCars,
    rentalTime,
    passengerCount,
    isCriteriaEmpty,
    setRentalTime,
    setPassengerCount,
    handleFilter,
    available,
    setAvailable,
    isLoading,
  } = useListCarsContext();

  if (isLoading) {
    return (
      <div>
        <p
          style={{
            textAlign: "center",
            width: "100%",
            fontSize: "18px",
            marginTop: "540px",
          }}
        >
          Loading...
        </p>
      </div>
    );
  }

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
                    onChange={(e) => setAvailable(e.target.value)}
                  >
                    {isCriteriaEmpty && !available && (
                      <p style={{ color: "red" }}>
                        Silahkan pilih tipe driver!
                      </p>
                    )}
                    <option value="default" selected>
                      Pilih Tipe Driver &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    </option>
                    <option value={true}>Dengan Supir</option>
                    <option value={false}>Tanpa Supir (Lepas Kunci)</option>
                  </select>
                </div>
                <div className="col-lg-auto col-xl-auto col-md-auto">
                  <label>Tanggal</label>
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Pilih Tanggal"
                    id="tanggal"
                    onChange={(e) => setRentalTime(e.target.value)}
                  />
                  {isCriteriaEmpty && !rentalTime && (
                    <p style={{ color: "red" }}>
                      Silahkan pilih tanggal rental!
                    </p>
                  )}
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
                      value={passengerCount}
                      onChange={(e) =>
                        setPassengerCount(parseInt(e.target.value))
                      }
                    />
                    <span className="input-group-text bg-white">
                      <img src={userLogo} width="20px" alt="" />
                    </span>
                  </div>
                  {isCriteriaEmpty && !passengerCount && (
                    <p style={{ color: "red" }}>
                      Silahkan masukkan jumlah penumpang!
                    </p>
                  )}
                </div>
                <div className="col-lg-2 col-xl-auto col-md-2  pt-4">
                  <button
                    className="btn btn-primary"
                    id="load-btn"
                    onClick={handleFilter}
                  >
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
              <div className="row" id="cars-container">
                {isCriteriaEmpty ? (
                  <p
                    style={{
                      textAlign: "center",
                      width: "100%",
                      fontSize: "18px",
                      marginTop: "20px",
                    }}
                  >
                    Silahkan isi terlebih dahulu sesuai kriteria yang anda
                    inginkan!
                  </p>
                ) : filteredCars.length > 0 ? (
                  filteredCars.map((car) => (
                    <div
                      className="col-lg-4"
                      style={{ marginBottom: "18px" }}
                      key={car.id}
                    >
                      <div className="card px-2 py-4">
                        <img
                          src={car.image}
                          className="card-img-top mt-4 text-center"
                          alt={car.manufacture}
                        />
                        <div className="card-body">
                          <h5 className="card-title fs-6">
                            {car.manufacture} / {car.model}
                          </h5>
                          <h5 className="card-title fs-5 fw-bold">
                            Rp. {car.rentPerDay} / hari
                          </h5>
                          <p className="cars__p">{car.description}</p>
                          <div className="row">
                            <div className="col-1">
                              <img src={userLogo} width="20px" alt="" />
                            </div>
                            <div className="col-10 ms-lg-2">
                              {car.capacity} orang
                            </div>
                          </div>
                          <div className="row mt-2">
                            <div className="col-1">
                              <img src={settingLogo} width="20px" alt="" />
                            </div>
                            <div className="col-10 ms-lg-2">
                              {car.transmission}
                            </div>
                          </div>
                          <div className="row mt-2 mb-4">
                            <div className="col-1">
                              <img src={calendarLogo} width="20px" alt="" />
                            </div>
                            <div className="col-10 ms-lg-2">
                              Tahun {car.year}
                            </div>
                          </div>
                        </div>
                        <a
                          href="/not-found"
                          className="btn btn-primary"
                          style={{ width: "100%" }}
                        >
                          Pilih Mobil
                        </a>
                      </div>
                    </div>
                  ))
                ) : (
                  <p
                    style={{
                      textAlign: "center",
                      width: "100%",
                      fontSize: "18px",
                      marginTop: "20px",
                    }}
                  >
                    Tidak ada data mobil yang tersedia!
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ListCars;
