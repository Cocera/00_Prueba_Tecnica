import "./TableProduct.scss";
import React, { useEffect } from 'react';
import { Space, Table, Tag } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../features/products/productsSlice";

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
    },
];

const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
};

    

const TableProduct = () => {
    const { products } = useSelector((state) => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, []);

    if (!products || products.length === 0) {
        return <p>Cargando productos...</p>;
    };

    const data = products.map((product) => ({
        key: product.id,
        image: product.image,
        product: product.title,
        category: product.category,
        price: product.price,
        description: product.description,
    }));

    return (
        <Table columns={columns} dataSource={data} onChange={onChange} />
    );
};

export default TableProduct;