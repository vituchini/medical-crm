import { Breadcrumbs, Card, CircularLoader, Icon, Popup, RadioButton } from '../common/components';
import React, { useState } from 'react';

import { IconTypes } from '../common/components/Icon/Icon';
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
        <Card />
        <Card header="Title" />
      </div>
      <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
        {(Object.keys(IconTypes) as Array<keyof typeof IconTypes>).map((type) => (
          <Icon type={IconTypes[type]} iconColor="primary" size={24} />
        ))}
      </div>
    </div>
  );
};

export default Examples;
