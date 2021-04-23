import { useState } from "react";

export const useForm = (initialValues) => {
  const [form, setForm] = useState(initialValues);

  const onChange = (event) => {
    const { value, name } = event.target;
    setForm({ ...form, [name]: value });
  };

  // const restState = () = > {
  //   setForm(initialValues)
  // }

  return [form, onChange];
};
