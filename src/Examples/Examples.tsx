import {
  Breadcrumbs,
  Button,
  Card,
  Checkbox,
  Datepicker,
  ExpansionPanel,
  Header,
  Icon,
  Input,
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
  TableLoader,
  TableNoData,
  Tabs,
  Thead,
} from '../common/components';
import React, { useState } from 'react';

import { IconTypes } from '../common/components/Icon/Icon';
import style from './Examples.module.css';

const Examples = () => {
  const [visible, setVisible] = useState(false);
  const [visibleMenu, setVisibleMenu] = useState(false);
  const [skip, setSkip] = useState(0);

  const [sort, setSort] = useState<any>();

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

  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [inputValue3, setInputValue3] = useState('');
  const [inputValue4, setInputValue4] = useState('');
  const [inputValue5, setInputValue5] = useState('');
  const [inputValue6, setInputValue6] = useState('');

  const tabs = [
    { _id: '0', content: <>Tab</> },
    { _id: '1', content: <>Tab</> },
    { _id: '2', content: <>Tab</> },
    { _id: '3', content: <>Tab</> },
  ];
  const [currentTab, setCurrentTab] = useState(tabs[0]._id);

  const [dateSelected, setDateSelected] = useState<Date | null>(new Date());
  const [dateSelectedNull, setDateSelectedNull] = useState<Date | null>(null);
  const [dateSelectedError, setDateSelectedError] = useState<Date | null>(null);

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
        leftActions={<p>left</p>}
        rightActions={<p>right</p>}
        mobileActions={visibleMenu && <p>mobile</p>}
        onClick={() => setVisibleMenu((prev) => !prev)}
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
        <div style={{ margin: '32px 0' }}>
          <Breadcrumbs breadcrumbs={[{ title: 'Breadcrumb' }, { title: 'Crumb' }, { title: 'Main page title' }]} />
        </div>
        <div style={{ margin: '16px 0' }}>
          <Breadcrumbs breadcrumbs={[{ title: 'Breadcrumb' }]} noTitle />
          <Breadcrumbs breadcrumbs={[{ title: 'Breadcrumb' }, { title: 'Crumb' }]} noTitle />
          <Breadcrumbs breadcrumbs={[{ title: 'Breadcrumb' }, { title: 'Crumb' }, { title: 'Crumb' }]} noTitle />
        </div>

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
          <br />
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
          <br />
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
          <br />
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
          <br />
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
          <br />
          <Input
            label="error"
            placeholder="Error input"
            error
            value={inputValue2}
            onChange={(value) => setInputValue2(value)}
          />
          <Input
            label="icon left input"
            placeholder="icon left input"
            icon={{
              type: IconTypes.close,
              position: 'left',
            }}
            value={inputValue3}
            onChange={(value) => setInputValue3(value)}
          />

          <Input
            label="input with label"
            placeholder="icon right input"
            icon={{
              type: IconTypes.date,
              position: 'right',
              iconColor: 'warning',
            }}
            value={inputValue4}
            onChange={(value) => setInputValue4(value)}
          />
          <Input
            placeholder="disabled input"
            label="disabled input"
            disabled
            value={inputValue5}
            onChange={(value) => setInputValue5(value)}
          />
          <Input
            placeholder="number input"
            label="number input"
            type="number"
            value={inputValue5}
            onChange={(value) => setInputValue5(value)}
          />
          <div style={{ width: '100%' }}>
            <Input
              label="full width input"
              icon={{
                type: IconTypes.date,
                position: 'right',
                iconColor: 'warning',
              }}
              type="password"
              placeholder="full width input"
              value={inputValue6}
              onChange={(value) => setInputValue6(value)}
            />
          </div>
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
          <Datepicker
            name="ici"
            label="selected date"
            value={dateSelected}
            onChange={(dateS: string, date: Date) => {
              console.log(dateS, date);
              setDateSelected(date);
            }}
          />
          <Datepicker
            name="here"
            label="selected date"
            value={dateSelected}
            onChange={(dateS: string, date: Date) => {
              console.log(dateS, date);
              setDateSelected(date);
            }}
          />
          <Datepicker
            label="placeholder date"
            value={dateSelectedNull}
            placeholder="Choose a date"
            onChange={(dateS: string, date: Date) => {
              console.log(dateS, date);
              setDateSelectedNull(date);
            }}
          />
          <Datepicker
            label="error date picker"
            value={dateSelectedError}
            placeholder="Choose a date"
            error
            onChange={(dateS: string, date: Date) => {
              console.log(dateS, date);
              setDateSelectedError(date);
            }}
          />
          <Datepicker
            label="disabled date picker"
            value={dateSelectedNull}
            placeholder="Choose a date"
            disabled
            onChange={(dateS: string, date: Date) => {
              console.log(dateS, date);
              setDateSelectedError(date);
            }}
          />
        </div>
        <div style={{ margin: '16px 0' }}>
          <Datepicker
            label="read only date picker"
            value={dateSelected}
            isFullWidth
            readOnly
            onChange={(dateS: string, date: Date) => {
              console.log(dateS, date);
              setDateSelected(date);
            }}
          />
          <br />
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
        <div style={{ width: '100%' }}>
          <ExpansionPanel title="Case: Johannes van Dover" header={<p>header content</p>}>
            <h3>Expanded content</h3>
          </ExpansionPanel>
          <ExpansionPanel title="Situatieschets" header={<p>some content</p>}>
            <h3>Expanded</h3>
          </ExpansionPanel>
        </div>
        <div style={{ marginTop: '50px' }}>
          <div className="table-container">
            <table className="table">
              <Thead
                sort={sort}
                onSort={(data) => {
                  console.log(data);
                  setSort(data);
                }}
              >
                <th data-sort-field="Name">Sort column 1</th>
                <th data-sort-field="Email">Sort column 2</th>
                <th>3 Column</th>
                <th>4 Column</th>
                <th>5 Column</th>
                <th>6 Column</th>
              </Thead>
              <tbody>
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <tr key={index}>
                    <td>Test</td>
                    <td>Test</td>
                    <td>Test</td>
                    <td>Test</td>
                    <td>Test</td>
                    <td>Test</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div style={{ marginTop: '50px' }}>
          <div className="table-container">
            <table className="table">
              <Thead
                sort={sort}
                onSort={(data) => {
                  console.log(data);
                  setSort(data);
                }}
              >
                <th data-sort-field="Name">Sort column 1</th>
                <th data-sort-field="Email">Sort column 2</th>
                <th>3 Column</th>
                <th>4 Column</th>
                <th>5 Column</th>
                <th>6 Column</th>
              </Thead>
              <tbody>
                <TableNoData colSpan={6}>No data</TableNoData>
                <TableLoader />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Examples;
