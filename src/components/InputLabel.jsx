/* eslint-disable react/prop-types */
import { useState } from "react";

import styles from "./InputLabel.module.css";

function InputLabel({ cities }) {
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
  const handleKeyDown = (e) => {
    if (e.key === "Tab") {
      setQuery(suggestions[0]);
      setSuggestions([]);
    }
  };

  return (
    <div className={styles.input}>
      <span>
        Suggest <b>a</b> nearest city name.
      </span>
      {suggestions.length > 0 && <label>{suggestions[0]}</label>}
      <input
        type="text"
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Enter city name"
      />
      <span>
        <i>
          Press <b>Tab</b> to completed.
        </i>
      </span>
    </div>
  );
}

export default InputLabel;
