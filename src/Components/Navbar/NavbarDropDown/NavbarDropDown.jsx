import React from "react";
import "./NavbarDropDown.css";
import Select from "react-select";
import Flag from "react-world-flags";
import { countries } from "../../../data/countriesList";

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
    color: "white",
    width: "200px",
    height: "55px",
    border: "none",
    outline: "none",
    borderRadius: "1px",
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      color: "black",
    };
  },
  singleValue: (styles, { data }) => ({ ...styles, color: "white" }),
  placeholder: (provided, state) => ({
    ...provided,
    color: "white",
  }),
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

const NavbarDropDown = () => (
  <Select
    options={[{ label: "Products", value: "products" }]}
    styles={customStyles}
    formatOptionLabel={formatOptionLabel}
    // You can also pass other props to customize the dropdown further
  />
);

export default NavbarDropDown;
