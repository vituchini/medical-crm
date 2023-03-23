import {
  Breadcrumbs,
  Button,
  Icon,
  Input,
  Select,
  TableCard,
  TableLoader,
  TableNoData,
  Tabs,
  Thead,
} from '../common/components';
import React, { useState } from 'react';

import { IconTypes } from '../common/components/Icon/Icon';
import style from './Examples.module.css';
import { useTranslation } from 'react-i18next';

const Examples = () => {
  const { t } = useTranslation();
  const [skip, setSkip] = useState(0);
  const [sort, setSort] = useState<any>();
  const [search, setSearch] = useState('');

  const onPageChange = (skip: number): void => setSkip(skip);

  const onChangeSelect = (value: any, action: any) => {
    console.log(value, action);
  };

  return (
    <div className={style.container}>
      <div className={style.header}>Client</div>
      <TableCard
        filters={
          <div style={{ display: 'flex', gap: 32 }}>
            <Input
              placeholder={t('Find clients...')}
              icon={{
                type: IconTypes.search,
                position: 'left',
              }}
              value={search}
              onChange={setSearch}
            />
            <div style={{ display: 'flex', gap: 8, fontSize: 12, alignItems: 'center' }}>
              <span>Filter:</span>
              <div style={{ width: 160 }}>
                <Select
                  onChange={onChangeSelect}
                  options={[
                    { value: 'value1', label: 'value1' },
                    { value: 'value2', label: 'value2' },
                  ]}
                  placeholder={t('All')}
                />
              </div>
            </div>
          </div>
        }
        actions={
          <Button>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontWeight: 700 }}>{t('Add client')}</span>
              <Icon type={IconTypes.add} size={16} iconColor="white" />
            </div>
          </Button>
        }
      >
        <div className="table-container">
          <table className="table">
            <Thead
              sort={sort}
              onSort={(data) => {
                console.log(data);
                setSort(data);
              }}
            >
              <th data-sort-field="Relation">{t('Relation')}</th>
              <th data-sort-field="Username">{t('Username')}</th>
              <th data-sort-field="SSN">{t('SSN')}</th>
              <th data-sort-field="First name">{t('First name')}</th>
              <th data-sort-field="Last name">{t('Last name')}</th>
              <th data-sort-field="Address">{t('Adress')}</th>
              <th data-sort-field="Country">{t('Country')}</th>
              <th data-sort-field="City">{t('City')}</th>
              <th data-sort-field="Postal code">{t('Postal code')}</th>
              <th data-sort-field="Status">{t('Status')}</th>
            </Thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((item, index) => (
                <tr key={index}>
                  <td>{item}</td>
                  <td>{item}</td>
                  <td>{item}</td>
                  <td>{item}</td>
                  <td>{item}</td>
                  <td>{item}</td>
                  <td>{item}</td>
                  <td>{item}</td>
                  <td>{item}</td>
                  <td>{item}</td>
                </tr>
              ))}
              {false && <TableLoader />}
              {false && <TableNoData colSpan={6} />}
            </tbody>
          </table>
        </div>
      </TableCard>
    </div>
  );
};

export default Examples;
