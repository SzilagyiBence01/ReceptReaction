import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import NavigationMenu from "./components/NavigationMenu.jsx";
import Footer from "./components/Footer.jsx";

import HomePage from "./pages/HomePage.jsx";
import FavoritesPages from "./pages/FavoritesPages.jsx";
import NewRecipePage from "./pages/NewRecipePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import RecipeDetailsPage from "./pages/RecipeDetailsPage.jsx";
import Specification from "./pages/Specification.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />  {/* header ahova most a logó került */}
        <NavigationMenu /> {/* navigációs sáv ahol váltunk az nézeteken */}

        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />      {/* főoldal ahol a receptek megjellenek */}
            <Route path="/favorites" element={<FavoritesPages />} />    {/* a kedvencként megjelölt receptek itt jelennek meg */}
            <Route path="/new" element={<NewRecipePage />} />     {/* új recept felvételéhez */}
            <Route path="/about" element={<AboutPage />} />     {/* az alkamazásról */}
            <Route path="/speci" element={<Specification />} />     {/* a specializáció leírása */}
            <Route path="/recipe/:name" element={<RecipeDetailsPage />} />     {/* a recept-ek részetes megtekintése */}
          </Routes> 
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
