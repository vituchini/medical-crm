import './App.css';

import { CircularLoader } from './common/components';
import React from 'react';

function App() {
  return (
    <div className="App">
      Component examples
      <CircularLoader visible={false} />
    </div>
  );
}

export default App;
