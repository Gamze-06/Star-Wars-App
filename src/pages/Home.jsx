import { useState, useEffect } from "react";
import StarshipSearch from "../components/StarshipSearch";
import logo from "../assets/images/Star_Wars_Logo.png";



function Home() {
  const [starships, setStarships] = useState([]);
  const [filteredShips, setFilteredShips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/starships")
      .then((res) => res.json())
      .then((data) => {
        setStarships(data.results);
        setFilteredShips(data.results); // Başlangıçta hepsini göster
        setLoading(false);
      });
  }, []);

  const handleSearch = (term) => {
    const filtered = starships.filter((ship) =>
      ship.name.toLowerCase().includes(term.toLowerCase()) ||
      ship.model?.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredShips(filtered);
  };

    return (
    <div className="home-container">
        <img src={logo} alt="Star Wars Logo" className="starwars-logo" />
        <StarshipSearch onSearch={handleSearch} />

      {loading ? (
        <p>Yükleniyor...</p>
      ) : (
        <div className="card-list">
          {filteredShips.map((ship, index) => (
            <div key={index} className="card">
              <img src="/ship.png" alt="ship" />
              <h3>{ship.name}</h3>
              <a href={`/starship/${ship.uid || ship.url.split("/").pop()}`}>
                Detay
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
