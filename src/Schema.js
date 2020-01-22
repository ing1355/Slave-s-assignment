import React from 'react';

const schema = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      className: 'col',
      render: t => <h3>{t}</h3>
    },
    {
      title: '시설이름',
      dataIndex: 'name',
      key: 'name',
      render: t => <h3>{t}</h3>
    }
]

export { schema };