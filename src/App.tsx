import './App.css';

import { Breadcrumbs } from './common/components';
import React from 'react';

function App() {
  return (
    <div className="App">
      Component examples
      <Breadcrumbs breadcrumbs={[{ title: 'title' }, { title: 'subtitle' }]} />
    </div>
  );
}

export default App;
