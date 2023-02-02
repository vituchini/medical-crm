import './App.css';

import { Breadcrumbs, CircularLoader, Popup, RadioButton, Tabs } from './common/components';
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

const tabs = [
  { id: '0', content: <>Tab</> },
  { id: '1', content: <>Tab</> },
  { id: '2', content: <>Tab</> },
  { id: '3', content: <>Tab</> },
];

function App() {
  const [radio, setRadio] = useState({
    value: 'on',
    label: 'On',
  });
  const [visible, setVisible] = useState(false);
  const [currentTab, setCurrentTab] = useState(tabs[0].id);
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
      <Tabs list={tabs} current={currentTab} onChange={(tab) => setCurrentTab(tab)} />
    </div>
  );
}

export default App;
