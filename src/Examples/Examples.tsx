import {
  Breadcrumbs,
  Button,
  Card,
  Checkbox,
  CircularLoader,
  Icon,
  Paginator,
  Popup,
  RadioButton,
  Tabs,
} from '../common/components';
import React, { useState } from 'react';

import { IconTypes } from '../common/components/Icon/Icon';
import style from './style.module.css';

const Examples = () => {
  const [visible, setVisible] = useState(false);
  const [skip, setSkip] = useState(0);

  const [radio, setRadio] = useState({
    value: 'on',
    label: 'On',
  });

  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const [checkbox3, setCheckbox3] = useState(false);
  const [checkbox4, setCheckbox4] = useState(false);
  const [checkbox5, setCheckbox5] = useState(false);

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

  const onPageChange = (skip: number): void => setSkip(skip);

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
        <div>
          <Checkbox checked={checkbox1} name="1" onChange={() => setCheckbox1(!checkbox1)} />
        </div>
        <div>
          <Checkbox rightText="right text" name="2" checked={checkbox2} onChange={() => setCheckbox2(!checkbox2)} />
        </div>
        <div>
          <Checkbox leftText="left text" name="3" checked={checkbox3} onChange={() => setCheckbox3(!checkbox3)} />
        </div>
        <div>
          <Checkbox
            rightText="error checkbox"
            error={true}
            name="4"
            checked={checkbox4}
            onChange={() => setCheckbox4(!checkbox4)}
          />
        </div>
        <div>
          <Checkbox
            rightText="disabled checkbox"
            disabled={true}
            name="5"
            checked={checkbox5}
            onChange={() => setCheckbox5(!checkbox5)}
          />
        </div>
      </div>

      <Tabs list={tabs} current={currentTab} onChange={(tab) => setCurrentTab(tab)} />

      <div className={style.flex}>
        {(Object.keys(IconTypes) as Array<keyof typeof IconTypes>).map((type) => (
          <Icon type={IconTypes[type]} iconColor="primary" size={24} />
        ))}
      </div>

      <div className={style.flex}>
        <Button>Primary button</Button>
        <Button type="border">Primary button</Button>
        <Button disabled>Disabled button</Button>
      </div>
      <div className={style.flex} style={{ maxWidth: 800 }}>
        <Button size="small" color="gray">
          Gray button
        </Button>
        <Button size="small" type="border" color="success">
          Success button
        </Button>
        <Button size="fullWidth" color="primary">
          Button with full parent width
        </Button>
      </div>
      <Paginator skip={skip} total={150} onPageChange={onPageChange} />
    </div>
  );
};

export default Examples;
