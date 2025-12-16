import React, { useState } from "react";

// rendelkezésre álló tagek
const TAGS = ["reggeli", "ebéd", "vacsora", "gluténmentes", "vegetáriánus", "vegán", "gyors", "olcsó", "diétás"];

// recept szűrés vezérlő
export default function RecipeFilter({ onFilterChange }) {
  // state-ek az aktuális állpotokra a szűrésnél
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);

  // tag-ek kezelése: ha már benne van kivesszük ha nem akkor betesszük a selectedTags-be
  const handleTagChange = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  // keresési mező és belső state frissítése
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onFilterChange(e.target.value, selectedTags);
  };
  // tagek és belső state frissítése
  const handleTagClick = (tag) => {
    handleTagChange(tag);
    onFilterChange(searchTerm, tagSelectedAfterChange(tag));
  };

  // visszaadja a frissített tag listát
  const tagSelectedAfterChange = (tag) => {
    if (selectedTags.includes(tag)) {
      return selectedTags.filter(t => t !== tag);
    } else {
      return [...selectedTags, tag];
    }
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Keresés név szerint..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={{ width: "100%", padding: "8px", marginBottom: "10px", boxSizing: "border-box" }}
      />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
        {TAGS.map(tag => (
          <label key={tag} style={{ border: "1px solid #00aa00", borderRadius: "8px", padding: "2px 6px", cursor: "pointer", backgroundColor: selectedTags.includes(tag) ? "#d0ffd0" : "#f0fff0" }}>
            <input
              type="checkbox"
              checked={selectedTags.includes(tag)}
              onChange={() => handleTagClick(tag)}
              style={{ marginRight: "4px" }}
            />
            {tag}
          </label>
        ))}
      </div>
    </div>
  );
}
