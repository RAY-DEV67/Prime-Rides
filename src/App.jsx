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
import { BrandPage } from "./pages/brandPage";
import { Less2M } from "./pages/lessThan2";
import { TwoToThreeM } from "./pages/2-3M";
import { ThreeToFourM } from "./pages/3-4";
import { Greater4M } from "./pages/greaterThan4";

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
                        <Route path="/Less2M" element={<Less2M />} />
                        <Route path="/TwoToThreeM" element={<TwoToThreeM />} />
                        <Route path="/ThreeToFourM" element={<ThreeToFourM />} />
                        <Route path="/Greater4M" element={<Greater4M />} />
                        <Route path="/Brand/:brand" element={<BrandPage />} />
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