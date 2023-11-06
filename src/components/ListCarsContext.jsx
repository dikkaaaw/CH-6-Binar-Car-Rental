import React, { createContext, useContext, useState, useEffect } from "react";

export const ListCarsContext = createContext();

export function ListCarsProvider({ children }) {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [rentalTime, setRentalTime] = useState("");
  const [passengerCount, setPassengerCount] = useState(0);
  const [isCriteriaEmpty, setIsCriteriaEmpty] = useState(false);

  useEffect(function () {
    async function getCars() {
      const response = await fetch(
        `https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json`
      );
      const data = await response.json();
      setCars(data);
      setFilteredCars([]);
    }
    getCars();
  }, []);

  const handleFilter = () => {
    if (!rentalTime || !passengerCount) {
      setIsCriteriaEmpty(true);
      setFilteredCars([]);
    } else {
      const filtered = cars.filter(
        (car) =>
          new Date(car.availableAt) > new Date(rentalTime) &&
          car.capacity >= passengerCount
      );
      setFilteredCars(filtered);
      setIsCriteriaEmpty(false);
    }
  };

  const values = {
    cars,
    filteredCars,
    rentalTime,
    passengerCount,
    isCriteriaEmpty,
    setRentalTime,
    setPassengerCount,
    handleFilter,
  };

  return (
    <ListCarsContext.Provider value={values}>
      {children}
    </ListCarsContext.Provider>
  );
}

export function useListCarsContext() {
  return useContext(ListCarsContext);
}
