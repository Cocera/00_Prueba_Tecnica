import "./table.scss";
import React from 'react';
import { Space, Table, Tag } from 'antd';

const data = [
    {
        id: '1',
        image: 'url',
        product: 'John Brown',
        category: 'Cosas',
        price: 40,
        description: 'Description'
    },
    {
        id: '2',
        image: 'url',
        product: 'Pepe',
        category: 'Cosas',
        price: 45,
        description: 'Description'
    },
];

const columns = [
    {
        title: 'Product',
        dataIndex: 'product',
        filters: [
            {
                text: 'Joe',
                value: 'Joe',
            },
            {
                text: 'Jim',
                value: 'Jim',
            },
            {
                text: 'Submenu',
                value: 'Submenu',
                children: [
                    {
                        text: 'Green',
                        value: 'Green',
                    },
                    {
                        text: 'Black',
                        value: 'Black',
                    },
                ],
            },
        ],
        // specify the condition of filtering result
        // here is that finding the name started with `value`
        onFilter: (value, record) => record.name.indexOf(value) === 0,
        sorter: (a, b) => a.name.length - b.name.length,
        sortDirections: ['descend'],
    },
    {
        title: 'Price',
        dataIndex: 'price',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.age - b.age,
    },
    {
        title: 'Category',
        dataIndex: 'category',
        filters: [
            {
                text: 'London',
                value: 'London',
            },
            {
                text: 'New York',
                value: 'New York',
            },
        ],
        onFilter: (value, record) => record.address.indexOf(value) === 0,
    },
    {
        title: 'Image',
        dataIndex: 'image',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.age - b.age,
    },
    {
        title: 'Description',
        dataIndex: 'description',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.age - b.age,
    },
];

const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
};

const TableData = () => {
    console.log('llega al componente TableData')
    return (
        <Table columns={columns} dataSource={data} onChange={onChange} />
    );
};

export default TableData;