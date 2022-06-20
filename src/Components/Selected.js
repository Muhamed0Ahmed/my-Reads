import { useEffect, useState } from "react";

function Selected(props) {
  const { item, shelf, onchangeItemShelf } = props;
  const options = [
    { value: "currentlyReading", text: "Currently Reading" },
    { value: "wantToRead", text: "Want to Read" },
    { value: "read", text: "Read" },
    { value: "none", text: "None" },
  ];
  const [selectOption, setSelectOption] = useState(shelf);
  const handleSelect = (e) => {
    setSelectOption(e.target.value);
    onchangeItemShelf(item, e.target.value);
  };

  return (
    <select value={selectOption} onChange={handleSelect}>
      <option value="move" disabled>
        Move to...
      </option>
      {options.map((option, idx) => (
        <option key={idx} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  );
}

export default Selected;
