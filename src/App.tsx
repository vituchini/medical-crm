import './App.css';

import { Breadcrumbs, CircularLoader, Icon, Popup, RadioButton } from './common/components';
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
      <Breadcrumbs breadcrumbs={[{ title: 'title' }, { title: 'subtitle' }, { title: 'subsubtitle' }]} />
      <RadioButton name="radio" value={radio} options={radioItems} onChange={setRadio} column />
      <CircularLoader />
      <button onClick={() => setVisible(true)}>show popup</button>
      <Popup visible={visible} onClose={() => setVisible(false)}>
        <h1>test</h1>
      </Popup>
      <div>
        <Icon type="user" iconColor="primary" size={32} />
      </div>
    </div>
  );
}

export default App;
