import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Button, Upload, Form, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { POST_PHOTO } from "../../../Redux/CrmSlicer";

const EditForm = ({ _id, }) => {
  const [file, setFile] = useState();
  const dispatch = useDispatch(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file);
    dispatch(POST_PHOTO(formData))
  };

  return (
    <div className="container">
      <form
        onSubmit={(e) => handleSubmit(e)}
        id="uploadForm"
        encType="multipart/form-data"
      >
        <input type="text" name="title" placeholder="Title"  />
        <input type="number" name="price" placeholder="Price"  />
        <input type="text" name="category" placeholder="Category"  />
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
          required
        />
        <button type="submit">Добавить продукт</button>
      </form>
    </div>
  );
};

export default EditForm;
