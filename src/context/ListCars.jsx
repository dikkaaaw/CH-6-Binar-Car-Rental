import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

export const ListCarsContext = createContext();

export function ListCarsProvider({ children }) {
  const [cars, setCars] = useState([]);
  // const [imageUrl, setImageUrl] = useState("");
  const [filteredCars, setFilteredCars] = useState([]);
  const [rentalTime, setRentalTime] = useState("");
  const [passengerCount, setPassengerCount] = useState(0);
  const [isCriteriaEmpty, setIsCriteriaEmpty] = useState(false);
  const [available, setAvailable] = useState(false);

  useEffect(function () {
    async function getCars() {
      const response = await axios.get(
        `https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json`
      );
      const data = response.data;
      setCars(data);
      setFilteredCars([]);
    }
    getCars();
  }, []);

  const handleFilter = () => {
    if (!rentalTime || !passengerCount || available === "default") {
      setIsCriteriaEmpty(true);
      setFilteredCars([]);
    } else {
      const filtered = cars.filter(
        (car) =>
          new Date(car.availableAt) > new Date(rentalTime) &&
          car.capacity >= passengerCount &&
          car.available === JSON.parse(available)
      );
      setFilteredCars(filtered);
      setIsCriteriaEmpty(false);
    }
  };

  const ctxValues = {
    cars,
    filteredCars,
    rentalTime,
    passengerCount,
    isCriteriaEmpty,
    available,
    setRentalTime,
    setPassengerCount,
    handleFilter,
    setAvailable,
  };

  return (
    <ListCarsContext.Provider value={ctxValues}>
      {children}
    </ListCarsContext.Provider>
  );
}

export function useListCarsContext() {
  return useContext(ListCarsContext);
}
