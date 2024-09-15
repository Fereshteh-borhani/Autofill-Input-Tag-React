/* eslint-disable react/prop-types */
import { useState } from "react";

import styles from "./InputSelector.module.css";

const InputSelector = ({ cities }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 0) {
      const filteredCities = cities.filter((city) =>
        city.toLowerCase().startsWith(value.toLowerCase())
      );
      setSuggestions(filteredCities);
    } else {
      setSuggestions([]);
    }
  };

  const handleSelect = (city) => {
    setQuery(city);
    setSuggestions([]);
  };

  return (
    <div className={styles.input}>
      <span>
        Suggest <b>a group of</b> nearest city names.
      </span>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Enter city name"
      />
      <span>
        <i>Selected by mouse </i>
      </span>
      {suggestions.length > 0 && (
        <ul className={styles.select}>
          {suggestions.map((city, index) => (
            <li key={index} onClick={() => handleSelect(city)}>
              {city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InputSelector;
