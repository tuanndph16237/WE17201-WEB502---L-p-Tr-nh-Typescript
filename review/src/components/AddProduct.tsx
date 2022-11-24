import React from 'react'
import axios from "axios";
import { useForm, SubmitHandler } from 'react-hook-form'
import { IProduct } from '../interfaces/products'
import { useNavigate } from "react-router-dom";
type Props = {
    
}

const AddProduct = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProduct>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IProduct> = async (product) => {
    try {
      const { data } = await axios.post(
        "https://fakestoreapi.com/products",
        product
      );
      navigate("/");
    } catch (error) {}
  };
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="title" {...register("title")} />
        <input type="number" placeholder="price" {...register("price")} />
        <textarea
          id=""
          {...register("description")}
          cols={30}
          rows={10}
        ></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddProduct