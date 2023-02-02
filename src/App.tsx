import './App.css';

import { Breadcrumbs, Card, CircularLoader, Popup, RadioButton } from './common/components';
import React, { useState } from 'react';

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

function App() {
  const [radio, setRadio] = useState({
    value: 'on',
    label: 'On',
  });
  const [visible, setVisible] = useState(false);
  return (
    <div className="App">
      Component examples
      {/* Card examples */}
      <Breadcrumbs breadcrumbs={[{ title: 'title' }, { title: 'subtitle' }, { title: 'subsubtitle' }]} />
      <RadioButton name="radio" value={radio} options={radioItems} onChange={setRadio} column />
      <CircularLoader />
      <button onClick={() => setVisible(true)}>show popup</button>
      <Popup visible={visible} onClose={() => setVisible(false)}>
        <h1>test</h1>
      </Popup>
      <div style={{ display: 'flex', gap: '16px', margin: '16px 0' }}>
        <Card header="Title">
          <p>First paragraph</p>
          <p>Second</p>
        </Card>
        <Card header="Title" />
        <Card />
      </div>
    </div>
  );
}

export default App;
