import 'destyle.css';
import React, { useEffect, useState } from 'react';
import SelectOption from './components/rat-ui/SelectOption/SelectOption';
import LiteTable from './components/rat-ui/LiteTable/LiteTable';
import { getRatsList, getRatDetails } from './services/ratService';
import { Rat } from './types/rat';

const App: React.FC = () => {
  const [rats, setRats] = useState<string[]>([]);
  const [ratDetails, setRatDetails] = useState<Rat | null>(null);

  useEffect(() => {
    (async () => {
      const allRats = await getRatsList();
      setRats(allRats);
    })();
  }, []);

  const selectHandler = async (evt: React.ChangeEvent<HTMLSelectElement>) => {
    const ratName = evt.target.value;
    // Get rat details from backend
    if (ratName === 'NO_RAT') {
      setRatDetails(null);
    } else {
      const ratDetails = await getRatDetails(evt.target.value);
      if (ratDetails) {
        setRatDetails(ratDetails);
      }
    }
  };

  return (
    <div className="main-container">
      <div className="rat-form-container">
        <h2>
          Select a{' '}
          <span role="img" aria-label="jsx-a11y/accessible-emoji">
            🐀
          </span>{' '}
          to start
        </h2>
        <div className="rat-form">
          <SelectOption onSelect={selectHandler} options={rats} />
          {ratDetails && <LiteTable ratDetails={ratDetails} />}
        </div>
      </div>
    </div>
  );
};

export default App;
