import {createProduct}from "../services/productService";
import useForm from "../hooks/useForm";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

export default function AdminProductCreateEdit({ product, onCancel }) {
    const { user } = useContext(UserContext);
    console.log(user);

    const onSubmit = async (values) => {
    console.log(values);
    await createProduct(values, user.accessToken);
};
    
    const {values, changeHandler, submitHandler} = useForm({
            title: '',
            price: '', 
            imageUrl: '',
            description: '',
        },
        onSubmit
        );
    

  return (
    <div className="admin-form-modal">
      <h2>{product ? "Edit Product" : "Create Product"}</h2>
      <form onSubmit={submitHandler}>
        <input type="text" name="title" id="title" value={values.title} onChange={changeHandler} placeholder="Title" />
        <input type="text" name="price" id="price" value={values.price} onChange={changeHandler} placeholder="Price" />
        <input type="text" name="imageUrl" id="imageUrl" value={values.imageUrl} onChange={changeHandler} placeholder="Image URL" />
        <textarea name="description" id="description" value={values.description} onChange={changeHandler} placeholder="Description"></textarea>

        <div className="form-actions">
          <button type="submit">{product ? "Save Changes" : "Create"}</button>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
