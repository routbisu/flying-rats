import React from 'react';
import './SelectOption.scss';

interface Props {
  options: string[];
  onSelect: (ratName: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectOption: React.FC<Props> = ({ options, onSelect }) => {
  return (
    <div className="select-container">
      <select onChange={onSelect}>
        <option value="NO_RAT">No Rat</option>
        {options &&
          options.length > 0 &&
          options.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
      </select>
    </div>
  );
};

export default SelectOption;
