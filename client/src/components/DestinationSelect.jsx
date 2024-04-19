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

function DestinationSelect({ label, handleSelect, suggestions }) {
  return (
    <ComboBox>
      <Label>{label}</Label>
      <div>
        <Input onChange={(e) => handleSelect(e.target.value)} />
        <Button>▼</Button>
      </div>
      <Popover>
        <ListBox>
          {suggestions.map((suggestion) => (
            <ListBoxItem key={suggestion.id}>{suggestion.title}</ListBoxItem>
          ))}
        </ListBox>
      </Popover>
    </ComboBox>
  );
}

DestinationSelect.propTypes = {
  label: PropTypes.string.isRequired,
  handleSelect: PropTypes.func.isRequired,
  suggestions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default DestinationSelect;
