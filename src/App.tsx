import './App.css';

import { Breadcrumbs, CircularLoader, RadioButton } from './common/components';
import React, { useState } from 'react';

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
      <Breadcrumbs breadcrumbs={[{ title: 'title' }, { title: 'subtitle' }, { title: 'subsubtitle' }]} />
      <RadioButton name="radio" value={radio} options={radioItems} onChange={setRadio} column />
      <CircularLoader />
    </div>
  );
}

export default App;
