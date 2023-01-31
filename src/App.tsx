import './App.css';

import React, { useState } from 'react';

import { Popup } from './common/components';

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="App">
      Component examples
      <div>
        <button onClick={() => setVisible(true)}>show popup</button>
        <Popup visible={visible} setVisible={setVisible}>
          <h1>test</h1>
        </Popup>
      </div>
    </div>
  );
}

export default App;
