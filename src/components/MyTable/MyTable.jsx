import "./MyTable.scss";
import React, { useEffect } from 'react'; import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../features/products/productsSlice";

const MyTable = () => {

    const { products } = useSelector((state) => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, []);

    if (!products || products.length === 0) {
        return <p>Cargando productos...</p>;
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => {
                    return (
                        <tr key={product.id}>
                            <td className="td-main-info">
                                <div className="img-container">
                                    <img src={product.image} alt={`Image of ${product.title} from the category ${product.category}`} />
                                </div>
                                <h4>{product.title}</h4>
                            </td>
                            <td>{product.price}</td>
                            <td>{product.category}</td>
                            <td>{product.description}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
};

export default MyTable;