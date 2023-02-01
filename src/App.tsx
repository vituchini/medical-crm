import './App.css';

import { Breadcrumbs, Checkbox, CircularLoader, RadioButton } from './common/components';
import React, { useState } from 'react';

function App() {
  const [checkbox, setCheckbox] = useState(false);
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
      <Breadcrumbs breadcrumbs={[{ title: 'title' }, { title: 'subtitle' }, { title: 'subsubtitle' }]} />
      <RadioButton name="radio" value={radio} options={radioItems} onChange={setRadio} column />
      <CircularLoader />
      <Checkbox checked={checkbox} onChange={() => setCheckbox(!checkbox)} />
    </div>
  );
}

export default App;
