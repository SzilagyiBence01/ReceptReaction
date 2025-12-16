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
        <Header />
        <NavigationMenu />

        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/favorites" element={<FavoritesPages />} />
            <Route path="/new" element={<NewRecipePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/speci" element={<Specification />} />
            <Route path="/recipe/:name" element={<RecipeDetailsPage />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
