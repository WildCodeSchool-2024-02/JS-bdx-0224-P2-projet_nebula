import { useContext } from "react";
import PropTypes from "prop-types";
import {
  Button,
  ComboBox,
  Input,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
} from "react-aria-components";
import { GalactapediaContext } from "../Contexts/GalactapediaContext";
import "../styles/DestinationSelect.scss";

function DestinationSelect({ label, handleSelect }) {
  const { galactapediaData } = useContext(GalactapediaContext);
  return (
    <ComboBox className="comboBox">
      <Label className="label">{label}</Label>
      <Input
        className="input"
        onChange={(e) => handleSelect(e.target.value)}
        placeholder={label}
      />
      <Button className="buttonTriangle" aria-label="open list of destination">
        ▼
      </Button>
      <Popover className="popover">
        <ListBox className="listBox" value={galactapediaData}>
          {galactapediaData.map((suggestion) => (
            <ListBoxItem className="listBoxItem" key={suggestion.id}>
              {suggestion.title}
            </ListBoxItem>
          ))}
        </ListBox>
      </Popover>
    </ComboBox>
  );
}

DestinationSelect.propTypes = {
  label: PropTypes.string.isRequired,
  handleSelect: PropTypes.func.isRequired,
};

export default DestinationSelect;
