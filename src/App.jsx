import { Route, Routes } from "react-router-dom";
import { ListCarsProvider } from "./components/ListCarsContext";
import LandingPage from "./pages/LandingPage";
import ListCars from "./pages/ListCars";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import "./App.css";

function App() {
  return (
    <ListCarsProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cars" element={<ListCars />} />
        <Route
          path="/not-found"
          element={
            <>
              <NotFound />
            </>
          }
        />
      </Routes>
      <Footer />
    </ListCarsProvider>
  );
}

export default App;
