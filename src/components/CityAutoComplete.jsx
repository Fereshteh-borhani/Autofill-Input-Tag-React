import InputLabel from "./InputLabel";
import InputSelector from "./InputSelector";

import { useEffect, useState } from "react";

function CityAutoComplete() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch("/cities.json");
        const data = await response.json();
        setCities(data);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };

    fetchCities();
  }, []);
  return (
    <>
      <InputLabel cities={cities} />
      <InputSelector cities={cities} />
    </>
  );
}

export default CityAutoComplete;
