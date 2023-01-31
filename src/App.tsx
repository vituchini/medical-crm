import './App.css';

import React, { useState } from 'react';

import { RadioButton } from './common/components';

function App() {
  const [radio, setRadio] = useState({
    value: 'on',
    label: 'On',
  });
  const radioItems = [
    {
      value: 'on',
      label: 'On',
    },
    {
      value: 'off',
      label: 'Off',
    },
  ];
  return (
    <div className="App">
      Component examples
      <RadioButton
        name="radio"
        value={radio}
        options={radioItems}
        convertToItem={(item) => item}
        onChange={setRadio}
        direction="column"
      />
    </div>
  );
}

export default App;
