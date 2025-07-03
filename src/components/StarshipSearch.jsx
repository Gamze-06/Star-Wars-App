import { useState } from "react";
import "../index.css"; // CSS dosyan doğruysa bu kalsın

function StarshipSearch({ onSearch }) {
  const [term, setTerm] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setTerm(value);
    onSearch(value);
  };

  return (
    <div className="search-wrapper">
      <input
        type="text"
        placeholder="🔍 Yıldız gemisi ara..."
        value={term}
        onChange={handleChange}
        className="search-input"
      />
    </div>
  );
}

export default StarshipSearch;
