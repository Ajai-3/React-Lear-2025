import React, { useState } from "react";

const DropDown = () => {
  const data = [
    { country: "India", cities: ["Delhi", "Mumbai", "Bangalore"] },
    { country: "USA", cities: ["New York", "Los Angeles", "Chicago"] },
    { country: "UK", cities: ["London", "Manchester", "Birmingham"] },
    { country: "Japan", cities: ["Tokyo", "Osaka", "Kyoto"] },
    { country: "Australia", cities: ["Sydney", "Melbourne", "Brisbane"] },
  ];

  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  const cities = country ? data.find(d => d.country === country).cities : [];

  return (
    <div>
      <select
        className="bg-black"
        onChange={(e) => {
          setCountry(e.target.value);
          setCity("");
        }}
        value={country}
      >
        <option value="">Select Country</option>
        {data.map((c, i) => (
          <option key={i} value={c.country}>
            {c.country}
          </option>
        ))}
      </select>

      <select
        className="bg-black"
        onChange={(e) => setCity(e.target.value)}
        disabled={!country}
        value={city}
      >
        <option value="">Select City</option>
        {cities.map((c, i) => (
          <option key={i} value={c}>
            {c}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
