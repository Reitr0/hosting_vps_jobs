import React, { useState } from "react";
import Select from "react-select";

export const CUstomSelect = ({
  options,
  isSearchable,
  placeholder,
  handleFunction,
  defaultValue,
  classname,
  isMulti = false,
  disable = false,
}: any) => {
  const [selectedOption, setSelectedOption] = useState(defaultValue);
  const handleChange = (selectedOption: any) => {
    setSelectedOption(selectedOption);
    handleFunction(selectedOption);
  };
  const colourStyles: any = {
    placeholder: (defaultStyles: any) => {
      return {
        ...defaultStyles,
        color: "var(--text-primary-color-2)",
      };
    },
  };

  return (
    <>
      <Select
        options={options}
        classNamePrefix={"custom-select"}
        isSearchable={isSearchable}
        placeholder={placeholder}
        className={classname}
        isMulti={isMulti}
        isDisabled={disable}
        value={selectedOption}
        onChange={handleChange}
        styles={colourStyles}
      />
    </>
  );
};
