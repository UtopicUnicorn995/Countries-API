import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

function Cards() {
  const [countries, setCountries] = useState([]);

  console.log(countries);

  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (datas) {
        // const dataCard = datas.map((data) => {
        //   return <CountryCard key={data.name} countryProp={data} />;
        // });
        // setCountry(dataCard);
        setCountries(datas);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="card-section">
      {countries.map((country) => {
        console.log(country);
        return (
          <div className="card">
            <img className="card--img" src={country.flag} alt="" />
            <div className="card--text-container p-4">
              <p className="country-name fw-bolder">{country.name}</p>
              <p className="fs-sm mb-0">
                Population: {country.population.toLocaleString("en-US")}
              </p>
              <p className="fs-sm mb-0">Region: {country.region}</p>
              <p className="fs-sm mb-0">Capital: {country.capital}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Cards;
