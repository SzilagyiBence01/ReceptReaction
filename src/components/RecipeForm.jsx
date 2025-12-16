import React, { useState } from "react";

// ezek közzül a tag-ek közül válaszhat a felhasználó
const TAGS = ["reggeli", "ebéd", "vacsora", "gluténmentes", "vegetáriánus", "vegán", "gyors", "olcsó", "diétás"];


export default function RecipeForm({ onAddRecipe }) {
  // a recept űralp változói
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [description, setDescription] = useState("");

  // tag-ek kezelése: ha már benne van kivesszük ha nem akkor betesszük a selectedTags-be
  const handleTagChange = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  // submit kezelése
  const handleSubmit = (e) => {
    e.preventDefault(); // ne töltsön újra az oldal

    // az új recept
    const newRecipe = {
      name,
      image,
      ingredients: ingredients.split(",").map(i => i.trim()),
      tags: selectedTags,
      description
    };

    // kiolvassuk a korábbi recepteket (ha nincs akkor üres tömb, de jelen állás szerint mindig lesz)
    const stored = JSON.parse(localStorage.getItem("myRecipes")) || [];
    // vissza töltjük a régi és az új receptet
    localStorage.setItem("myRecipes", JSON.stringify([...stored, newRecipe]));

    // ha létezik a függvény, meghívjuk az új receptre
    if (onAddRecipe) onAddRecipe(newRecipe);

    // űrlap törlése
    setName("");
    setImage("");
    setIngredients("");
    setSelectedTags([]);
    setDescription("");
    alert("Recept sikeresen hozzáadva!");
  };

  // űrlap megjelenése 
  return (
    <form onSubmit={handleSubmit} className="text-formalization">
      <h1>Új recept hozzáadása</h1>

      <label>Név: </label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} required /><br/>

      <label>Kép URL: </label>
      <input type="text" style={{ width: "400px" }} value={image} onChange={(e) => setImage(e.target.value)} required /><br/>

      <label>Hozzávalók (vesszővel elválasztva): </label>
      <input type="text" style={{ width: "600px" }} value={ingredients} onChange={(e) => setIngredients(e.target.value)} required /><br/>

      <label>Tagek: </label>
      <div className="tag-checkboxes">
        {TAGS.map(tag => (
          <label key={tag} style={{ marginRight: "10px" }}>
            <input
              type="checkbox"
              checked={selectedTags.includes(tag)}
              onChange={() => handleTagChange(tag)}
            />
            {tag}
          </label>
        ))}
      </div><br/>

      <label>Leírás:</label> <br/>
      <textarea  rows={6} cols={100} value={description} onChange={(e) => setDescription(e.target.value)} required /><br/>

      <button type="submit">Hozzáadás</button><br/>
    </form>
  );
}
