import { useState } from "react";
import "../styles/DropdownRoundTrip.scss";

function DropdownRoundTrip() {
  const [selectedOption, setSelectedOption] = useState("");

  const handelSelectedChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <section className="dropDownRoundTripSection">
      <label className="dropDownRoundTripLabel" htmlFor="select-round-trip">
        Type de voyage :
      </label>
      <select
        name="roundTrip"
        id="select-round-trip"
        value={selectedOption}
        onChange={handelSelectedChange}
        className="dropDownRoundTripSelect"
      >
        <option value="oneWay">Aller simple</option>
        <option value="roundTrip">Aller-retour</option>
      </select>
    </section>
  );
}

export default DropdownRoundTrip;
