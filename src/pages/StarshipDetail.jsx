import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchStarshipById } from "../services/swapi";
import "./StarshipDetail.css"; 

function StarshipDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ship, setShip] = useState(null);

  useEffect(() => {
    fetchStarshipById(id).then(setShip);
  }, [id]);

  if (!ship) return <p>Yükleniyor...</p>;

  return (
    <div className="starship-detail">
      <button className="back-button" onClick={() => navigate(-1)}>← Geri</button>

      {/* Görsel buraya */}
      <img src="/ship.png" alt={ship.name} className="starship-image" />
      <h2>{ship.name}</h2>
      <ul>
        <li>Model: {ship.model}</li>
        <li>Yolcu: {ship.passengers}</li>
        <li>Maksimum Hız: {ship.max_atmosphering_speed}</li>
        <li>Üretici: {ship.manufacturer}</li>
        <li>Mürettebat: {ship.crew}</li>
        <li>Kargo Kapasitesi: {ship.cargo_capacity}</li>
      </ul>
    </div>
  );
}

export default StarshipDetail;
