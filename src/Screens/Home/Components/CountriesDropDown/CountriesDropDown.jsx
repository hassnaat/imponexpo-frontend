import React from "react";
import "./CountriesDropDown.css";
import Select from "react-select";
import { countries } from "../../../../data/countriesList";
import Flag from "react-world-flags";

const customStyles = {
  // Add custom styles here to match the style in your image
  valueContainer: (styles) => {
    return {
      ...styles,
      color: "white",
    };
  },
  control: (provided) => ({
    ...provided,
    backgroundColor: "rgba(29, 93, 199, 1)",
    width: "200px",
    height: "55px",
    border: "none",
    outline: "none",
    borderTopLeftRadius: "16px",
    borderBottomLeftRadius: "16px",
    borderTopRightRadius: "0px",
    borderBottomRightRadius: "0px",
  }),
  singleValue: (styles, { data }) => ({ ...styles, color: "white" }),
  placeholder: (provided, state) => ({
    ...provided,
    color: "white",
  }),
  input: (styles, { data }) => ({ ...styles, color: "white" }),
};

const formatOptionLabel = ({ value, label, icon }) => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <div style={{ marginRight: "10px" }}>
      {
        <Flag
          code={value}
          fallback={<span>{icon}</span>}
          style={{
            height: "10px",

            width: "20px",
          }}
        />
      }
    </div>
    <div>{label}</div>
  </div>
);

const CountriesDropDown = () => (
  <Select
    options={countries}
    styles={customStyles}
    formatOptionLabel={formatOptionLabel}
    // You can also pass other props to customize the dropdown further
  />
);

export default CountriesDropDown;
