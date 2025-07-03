const BASE_URL = "https://www.swapi.tech/api";

export const fetchStarships = async (url = `${BASE_URL}/starships/`) => {
  const res = await fetch(url);
  return await res.json();
};

export const fetchStarshipById = async (id) => {
  const res = await fetch(`${BASE_URL}/starships/${id}/`);
  const data = await res.json();
  return data.result.properties;
};

export const searchStarships = async (query) => {
  const res = await fetch(`${BASE_URL}/starships/?search=${query}`);
  return await res.json();
};