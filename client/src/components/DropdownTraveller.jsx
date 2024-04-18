import { useState } from "react";
import "../styles/DropdownTraveller.scss";

function DropdownTraveller() {
  const [selectedOption, setSelectedOption] = useState("");

  const handelSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const optionArray = [];
  for (let i = 1; i <= 25; i += 1) {
    optionArray.push(i);
  }

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
