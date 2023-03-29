import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import { ScrollToTop } from "./components/scrolltotop";
import { Navbar } from "./components/Navbar";
import { LandingPage } from "./pages/landingPage";
import { Profile } from "./pages/profile";
import { Sell } from "./pages/addProduct";
import { CarsPage } from "./pages/carsPage";
import { SearchResult } from "./pages/searchresults";
import { BuyProduct } from "./pages/buyproduct";
import { Page404 } from "./pages/404page";

function App() {

  return (
    <div className="App bodyFont">
                  <Router>
                    <ScrollToTop>
                      <Navbar />

                      <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/Profile" element={<Profile />} />
                        <Route path="/Product" element={<Sell />} />
                        <Route path="/All-Cars" element={<CarsPage />} />
                        <Route path="/Search/:search" element={<SearchResult />} />
                        <Route path="/Buy/:collections/:product/:id" element={<BuyProduct />} />
                        <Route
                    path="/*"
                    element={<Page404 />}
                  />
                      </Routes>
                    </ScrollToTop>
                  </Router>
    </div>
  );
}

export default App;