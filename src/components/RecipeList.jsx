import React, { useEffect, useState } from "react";
import recipesJson from "../data/recipes.json";
import RecipeCard from "./RecipeCard";
import RecipeFilter from "./RecipeFilter";

// főként a receptek megjelenítésért felel kártya formában 
export default function RecipeList() {
  // state-ek 
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  // oldal betöltésekor lefutó useEffect hook
  useEffect(() => {
    // vesszük az alapból implementált recepteket
    const jsonRecipes = recipesJson.recipesData;
    // és a localdDB-ből a már felvett újjakat
    const localRecipes = JSON.parse(localStorage.getItem("myRecipes")) || [];
    // ezeket összefűzzük hogy egybe legyenek
    const allRecipes = [...jsonRecipes, ...localRecipes];

    // felvesszük a recepteket a useState változókba
    setRecipes(allRecipes);
    setFilteredRecipes(allRecipes);
  }, []);

  // szűrés (beírt név, kiválasztott tag-ek) alapján
  const handleFilterChange = (searchTerm, selectedTags) => {
    // végigmegyünk a receptjeinken -> meghívjuk a recipes opjekteken a filter függvény-t 
    const filtered = recipes.filter(r => {
      // megnézzük hogy van-e részleges egyezés a név-ben (kisbetűk)
      const matchesName = r.name.toLowerCase().includes(searchTerm.toLowerCase());
      // megnézzük hogy minden tag illeszkedik-e a szűrésnek
      const matchesTags = selectedTags.every(tag => r.tags.includes(tag));
      // ha az adott objektum megfelel a a szűrésnke a predikátum igaz érétéket ad vissza
      return matchesName && matchesTags;
    });
    // a szűrt state-t frissítjük a szűrés eredményének megfelelt elemekkel
    setFilteredRecipes(filtered);
  };

  return (
    <div>
      {/* ha váétozik a filter állapota a handleFilterChange-el kezeljük */}
      <RecipeFilter onFilterChange={handleFilterChange} />
      <div className="recipe-list">
        {filteredRecipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
