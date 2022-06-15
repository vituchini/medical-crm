import { Breadcrumbs, Button, Card, CircularLoader, Icon, Popup, RadioButton, Tabs } from '../common/components';
import React, { useState } from 'react';

import { IconTypes } from '../common/components/Icon/Icon';
import style from './style.module.css';

const Examples = () => {
  const [visible, setVisible] = useState(false);

  const [radio, setRadio] = useState({
    value: 'on',
    label: 'On',
  });

  const tabs = [
    { _id: '0', content: <>Tab</> },
    { _id: '1', content: <>Tab</> },
    { _id: '2', content: <>Tab</> },
    { _id: '3', content: <>Tab</> },
  ];
  const [currentTab, setCurrentTab] = useState(tabs[0]._id);

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

      <div style={{ position: 'relative', height: 100, width: '100%' }}>
        <CircularLoader />
      </div>

      <Button onClick={() => setVisible(true)}>Show popup</Button>

      <Popup visible={visible} onClose={() => setVisible(false)}>
        <h1>test</h1>
      </Popup>

      <div className={style.flex}>
        <Card header="Title">
          <p>First paragraph</p>
          <p>Second</p>
        </Card>
        <Card header="Title" />
        <Card />
      </div>

      <div className={style.flex}>
        {(Object.keys(IconTypes) as Array<keyof typeof IconTypes>).map((type) => (
          <Icon type={IconTypes[type]} iconColor="primary" size={24} />
        ))}
      </div>

      <Tabs list={tabs} current={currentTab} onChange={(tab) => setCurrentTab(tab)} />

      <div className={style.flex}>
        <Button>Primary button</Button>
        <Button icon={IconTypes.add} color="secondary">
          Secondary button
        </Button>
        <Button type="border">Primary button</Button>
        <Button color="secondary" type="border" icon={IconTypes.add}>
          Secondary button
        </Button>
        <Button color="primary" icon={IconTypes.add} />
      </div>
      <div className={style.flex} style={{ maxWidth: 800 }}>
        <Button size="small" color="gray">
          Gray button
        </Button>
        <Button size="small" icon={IconTypes.notification} color="warning">
          Warning button
        </Button>
        <Button size="small" type="border" color="success">
          Success button
        </Button>
        <Button size="small" color="danger" type="border" icon={IconTypes.error}>
          Danger button
        </Button>
        <Button size="fullWidth" color="primary" icon={IconTypes.add}>
          Button with full parent width
        </Button>
      </div>
    </div>
  );
};

export default Examples;
