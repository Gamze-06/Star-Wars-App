import { useState } from "react";
import "./StarshipCard.css";

function StarshipCard({ ship }) {
  const [expanded, setExpanded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState(null);

  const toggleDetails = async () => {
    if (!expanded && !details) {
      setLoading(true);
      try {
        const res = await fetch(`https://www.swapi.tech/api/starships/${ship.uid}`);
        const data = await res.json();
        setDetails(data.result.properties);
      } catch (err) {
        console.error("Detay verisi alınamadı:", err);
      } finally {
        setLoading(false);
        setExpanded(true);
      }
    } else {
      setExpanded(!expanded);
    }
  };

  return (
    <div className={`card ${expanded ? "expanded" : ""}`} onClick={toggleDetails}>
      <img src="/ship.png" alt="ship" />
      <h3>{ship.name}</h3>
      <p><em>{ship.model}</em></p>

      {expanded && (
        <div className="card-details">
          {loading ? (
            <p>Yükleniyor...</p>
          ) : details ? (
            <ul>
              <li><strong>Yolcu:</strong> {details.passengers}</li>
              <li><strong>Hız:</strong> {details.max_atmosphering_speed}</li>
              <li><strong>Üretici:</strong> {details.manufacturer}</li>
              <li><strong>Mürettebat:</strong> {details.crew}</li>
              <li><strong>Kargo:</strong> {details.cargo_capacity}</li>
            </ul>
          ) : (
            <p>Veri alınamadı.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default StarshipCard;
