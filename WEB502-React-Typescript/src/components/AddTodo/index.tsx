import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { ITodo } from '../../interfaces/todo'
type Props = {
    onAdd: (todo: any) => void;
};

const AddTodo = (props: Props) => {
  const  {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<ITodo>();

  const onSubmit: SubmitHandler<ITodo> = (data) =>{
    props.onAdd(data)
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Add to do</h1>
        <input type="text" {...register("title", {required: true, minLength: 500})} />
        {errors.title && errors.title.type === "required" &&(
          <p>Bắt buộc phải nhập trường này</p>
        )}
        {errors.title && errors.title.type === "minLength" && <p>Min length is 500</p>}
        <input type="checkbox" {...register("completed")} /> completed
        <br />
        <button>Add</button>
      </form>
      <hr />
    </div>
  )
}
export default AddTodo