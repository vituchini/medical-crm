import React, { useState } from 'react';

import { Breadcrumbs, CircularLoader, Popup, RadioButton, Card } from '../common/components';

import style from './style.module.css';

const Examples = () => {
  const [visible, setVisible] = useState(false);

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
    <div className={style.container}>
      <div className={style.header}>Component examples</div>

      <Breadcrumbs breadcrumbs={[{ title: 'title' }, { title: 'subtitle' }, { title: 'subsubtitle' }]}/>

      <RadioButton name="radio" value={radio} options={radioItems} onChange={setRadio} column/>

      <CircularLoader/>

      <button onClick={() => setVisible(true)}>show popup</button>

      <Popup visible={visible} onClose={() => setVisible(false)}>
        <h1>test</h1>
      </Popup>

      <div style={{ display: 'flex', gap: '16px', margin: '16px 0' }}>
        <Card header="Title">
          <p>First paragraph</p>
          <p>Second</p>
        </Card>
        <Card header="Title"/>
        <Card/>
      </div>
    </div>
  );
};

export default Examples;
