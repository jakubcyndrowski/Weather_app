import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "./api";
import "./search.css";

const Search = ({ onSearchChange }) => {
  //onSearchChange funckja z  prarent komponent
  const [search, SetSearch] = useState(null);

  const handleOnChange = (searchData) => {
    SetSearch(searchData);
    onSearchChange(searchData);
  };

  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      borderRadius: "10px",
      border: "2px solid  rgb(246, 128, 2)",
      boxShadow: state.isFocused ? "0 0 0 2px #3699FF" : null,
      height: "8vw",
      maxHeight: "100px",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#3699FF" : null,
      color: state.isFocused ? "white" : null,
    }),
  };

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange} //gdy wpiszemy już coś na przykłąd lon będzie szukało nam london z api,
      //wiec trzeba stworzyć funkcje któa zawsze po zmianie będzie robić fetch
      loadOptions={loadOptions}
      styles={customStyles}
    />
  );
};

export default Search;
