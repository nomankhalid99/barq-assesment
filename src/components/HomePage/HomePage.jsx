// HomePage.js
import React from "react";
import { useNavigate } from "react-router-dom";

// Importing logos from assets
import darazLogo from "../../assets/daraz.png";
import foodpandaLogo from "../../assets/foodpanda.png";
import amazonLogo from "../../assets/amazon.png";

const HomePage = () => {
  const navigate = useNavigate();

  const companies = [
    { name: "daraz", logo: darazLogo },
    { name: "foodpanda", logo: foodpandaLogo },
    { name: "amazon", logo: amazonLogo },
  ];

  const handleCompanyClick = (company) => {
    // Navigate to the company-specific orders page
    navigate(`/company/${company}`);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "30px", padding: "50px" }}>
      {companies.map((company) => (
        <div
          key={company.name}
          onClick={() => handleCompanyClick(company.name)}
          style={{ cursor: "pointer", textAlign: "center" }}
        >
          <img src={company.logo} alt={company.name} style={{ width: "150px", height: "150px", objectFit:"contain" }} />
          <h3>{company.name.charAt(0).toUpperCase() + company.name.slice(1)}</h3>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
