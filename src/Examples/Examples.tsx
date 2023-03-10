import {
  Breadcrumbs,
  Button,
  Card,
  Checkbox,
  Header,
  Icon,
  Loader,
  Paginator,
  Popup,
  ProfileLabel,
  RadioButton,
  Select,
  Sidebar,
  SidebarFooterWrapper,
  SidebarItem,
  SidebarItemWrapper,
  TableCard,
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

  const [toggleSidebar, setToggleSidebar] = useState(false);

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

  const items = [
    { to: 'clienten', label: 'Cliënten', icon: IconTypes.users },
    { to: 'examples', label: 'Toewijzingen', icon: IconTypes.userArrow },
    { to: 'onderaannemers', label: 'Onderaannemers', icon: IconTypes.usersOutlined },
    { to: 'zorgafspraken', label: 'Zorgafspraken', icon: IconTypes.fileDone },
    { to: 'cases', label: 'Cases', icon: IconTypes.userCase },
    { to: 'geleverdezorg', label: 'Geleverde zorg', icon: IconTypes.heart },
    { to: 'wettelijkevertegenwoordige', label: 'Wettelijke vertegenwoordige', icon: IconTypes.userBadge },
  ];
  const onPageChange = (skip: number): void => setSkip(skip);

  const onChangeSelect = (value: any, action: any) => {
    console.log(value, action);
  };

  return (
    <>
      <Header
        options={[
          {
            label: 'Examples',
            path: '/examples',
          },
        ]}
      />
      <Sidebar isHidden={toggleSidebar}>
        <SidebarItemWrapper>
          {items?.map((item, index) => (
            <SidebarItem key={'item-' + index} {...item} />
          ))}
        </SidebarItemWrapper>
        <SidebarFooterWrapper>
          <span>this is the footer</span>
        </SidebarFooterWrapper>
      </Sidebar>
      <div className={style.container}>
        <div className={style.header}>Component examples</div>

        <Breadcrumbs breadcrumbs={[{ title: 'title' }, { title: 'subtitle' }, { title: 'subsubtitle' }]} />

        <RadioButton name="radio" value={radio} options={radioItems} onChange={setRadio} column />

        <div style={{ position: 'relative', height: 100, width: '100%' }}>
          <Loader />
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
          {(Object.keys(IconTypes) as Array<keyof typeof IconTypes>).map((type, index) => (
            <Icon key={index} type={IconTypes[type]} iconColor="primary" size={24} />
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
        <div className={style.flex}>
          <div className={style.flex}>
            <div>
              <Select
                subLabel="default select"
                onChange={onChangeSelect}
                options={[
                  { value: 'chocolate', label: 'Chocolate' },
                  { value: 'strawberry', label: 'Strawberry' },
                  { value: 'vanilla', label: 'Vanilla' },
                ]}
                placeholder="Dropdown"
              />
            </div>
            <br />
            <div>
              <Select
                subLabel="searchable select"
                onChange={onChangeSelect}
                isSearchable
                options={[
                  { value: 'chocolate', label: 'Chocolate' },
                  { value: 'strawberry', label: 'Strawberry' },
                  { value: 'vanilla', label: 'Vanilla' },
                ]}
                placeholder="Dropdown"
              />
            </div>
            <br />
            <div>
              <Select
                subLabel="disabled select"
                onChange={onChangeSelect}
                disabled
                options={[
                  { value: 'chocolate', label: 'Chocolate' },
                  { value: 'strawberry', label: 'Strawberry' },
                  { value: 'vanilla', label: 'Vanilla' },
                ]}
                placeholder="Dropdown"
              />
            </div>
            <br />
            <div>
              <Select
                subLabel="multi select"
                onChange={onChangeSelect}
                options={[
                  { value: 'chocolate', label: 'Chocolate' },
                  { value: 'strawberry', label: 'Strawberry' },
                  { value: 'vanilla', label: 'Vanilla' },
                ]}
                placeholder="Dropdown"
                isMulti
                closeMenuOnSelect={false}
              />
            </div>
            <br />
            <div>
              <Select
                subLabel="error select"
                onChange={onChangeSelect}
                options={[
                  { value: 'chocolate', label: 'Chocolate' },
                  { value: 'strawberry', label: 'Strawberry' },
                  { value: 'vanilla', label: 'Vanilla' },
                ]}
                placeholder="Dropdown"
                error
              />
            </div>
          </div>
        </div>
        <div>
          <Select
            subLabel="full width select"
            onChange={onChangeSelect}
            options={[
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' },
            ]}
            isFullWidth
            placeholder="Dropdown"
          />
        </div>
        <div className={style.container} style={{ textAlign: 'right' }}>
          <Button onClick={() => setToggleSidebar(!toggleSidebar)}>toggle sidebar</Button>
        </div>
        <div className={style.flex}>
          <ProfileLabel name="default" src="https://www.museumtv.art/wp-content/uploads/2021/09/image-2-475x600.jpeg" />
          <ProfileLabel name="without img" src="" />
          <ProfileLabel src="https://www.museumtv.art/wp-content/uploads/2021/09/image-2-475x600.jpeg" />
          <ProfileLabel />
          <ProfileLabel
            name="primary right"
            src="https://www.museumtv.art/wp-content/uploads/2021/09/image-2-475x600.jpeg"
            textColor="primary"
            textPosition="right"
          />
          <ProfileLabel name="Big img bottom" textPosition="bottom" src="" imageSize={100} />
          <ProfileLabel name="Big text top" textPosition="top" src="" fontSize={30} />
        </div>
        <div className={style.flex}>
          <TableCard
            filters={
              <>
                <Select
                  onChange={onChangeSelect}
                  options={[
                    { value: 'chocolate', label: 'Chocolate' },
                    { value: 'strawberry', label: 'Strawberry' },
                    { value: 'vanilla', label: 'Vanilla' },
                  ]}
                  placeholder="Dropdown"
                />
              </>
            }
            actions={
              <>
                <Button>Primary button</Button>
              </>
            }
          >
            content table card
          </TableCard>
        </div>
      </div>
    </>
  );
};

export default Examples;
