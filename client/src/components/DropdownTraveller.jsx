import { useState } from "react";
import "../styles/DropdownTraveller.scss";

function DropdownTraveller() {
  const [selectedOption, setSelectedOption] = useState("");

  const handelSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const optionArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <label className="dropDownTravellerLabel" htmlFor="selectNumberTraveller">
        Nombre de passagers :
      </label>
      <select
        name="travellers"
        id="selectNumberTraveller"
        value={selectedOption}
        onChange={handelSelectChange}
        className="dropDownTravellerSelect"
      >
        {optionArray.map((_, index) => (
          <option key={optionArray.id} value={index + 1}>
            {index + 1}
          </option>
        ))}
      </select>
    </>
  );
}

export default DropdownTraveller;
