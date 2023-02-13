import { Breadcrumbs, Card, Checkbox, CircularLoader, Popup, RadioButton, Tabs } from '../common/components';
import React, { useState } from 'react';

import style from './style.module.css';

const Examples = () => {
  const [visible, setVisible] = useState(false);

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
        <Card header="Title" />
        <Card />
      </div>

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

      <Tabs list={tabs} current={currentTab} onChange={(tab) => setCurrentTab(tab)} />
    </div>
  );
};

export default Examples;
