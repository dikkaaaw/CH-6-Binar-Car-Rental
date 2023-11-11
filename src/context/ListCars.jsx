import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

export const ListCarsContext = createContext();

export function ListCarsProvider({ children }) {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [rentalTime, setRentalTime] = useState("");
  const [passengerCount, setPassengerCount] = useState(0);
  const [isCriteriaEmpty, setIsCriteriaEmpty] = useState(false);
  const [available, setAvailable] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(function () {
    async function getCars() {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json`
        );
        const data = response.data;
        setCars(data);
        setFilteredCars([]);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    }
    getCars();
  }, []);

  const handleFilter = () => {
    if (!rentalTime || !passengerCount || available === "default") {
      setIsCriteriaEmpty(true);
      setFilteredCars([]);
    } else {
      setIsLoading(true);
      const filtered = cars.filter(
        (car) =>
          new Date(car.availableAt) > new Date(rentalTime) &&
          car.capacity >= passengerCount &&
          car.available === JSON.parse(available)
      );
      setFilteredCars(filtered);
      setIsCriteriaEmpty(false);
      setIsLoading(false);
    }
  };

  const ctxValues = {
    cars,
    filteredCars,
    rentalTime,
    passengerCount,
    isCriteriaEmpty,
    available,
    isLoading,
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
