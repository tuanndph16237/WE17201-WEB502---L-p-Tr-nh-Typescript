import React, { useEffect } from 'react'
import axios from "axios";
import { useForm, SubmitHandler } from 'react-hook-form'
import { IProduct } from '../interfaces/products'
import { useNavigate, useParams  } from "react-router-dom";
type Props = {
    
}

const EditProduct = (props: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IProduct>();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://fakestoreapi.com/products/" + id
        );
        reset(data);
      } catch (error) {}
    })();
  }, []);

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IProduct> = async (product) => {
    try {
      const { data } = await axios.put(
        `https://fakestoreapi.com/products/${id}`,
        product
      );
      navigate("/");
    } catch (error) {}
  };
  console.log(errors);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="title"
          {...register("title", { required: true, minLength: 5 })}
        />
        {errors.title && errors.title.type === "required" && (
          <span>Bat buoc nhap truong nay</span>
        )}
        {errors.title && errors.title.type === "minLength" && (
          <span>Bat buoc phai tren 5 ky tu</span>
        )}
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

export default EditProduct