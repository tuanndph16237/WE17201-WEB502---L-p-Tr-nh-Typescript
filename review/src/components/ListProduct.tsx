import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import { IProduct } from '../interfaces/products';

type Props = {};

const List = (props: Props) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      setProducts(data);
    })();
  }, []);
  const removeItem = async (id: number) => {
    try {
      const { data } = await axios.delete(
        `https://fakestoreapi.com/products/${id}`
      );
      setProducts(products.filter((item) => item.id !== data.id));
    } catch (error) {}
  };
  return (
    <div>
      <Link to="/add">Add</Link>
      <table>
        <tbody>
          {products.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>
                <Link to={`edit/${item.id}`}>Edit</Link>
                <button onClick={() => removeItem(item.id!)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
