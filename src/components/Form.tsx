import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/Form.scss";
import { FormProps } from "../pages/Home";

function Form(props: FormProps) {
  const {
    formAction,
    formTitle,
    berichtnaamLabel,
    berichtnaamPlaceholder,
    categoryLabel,
    categoryPlaceholder,
    categoryOptions,
    headerAfbeeldingLabel,
    berichtLabel,
    submitButtonText,
  } = props;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(categoryPlaceholder);
  const [image, setImage] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Create form data object
    const formData = {
      title,
      content,
      category_id: selectedCategory,
      image,
    };

    // Log form data
    console.log(formData);
  };

  const handleTitleChange = (e: any) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: any) => {
    setContent(e.target.value);
  };

  const handleCategoryChange = (e: any) => {
    setSelectedCategory(e.target.value);
  };

  const handleImageChange = (e: any) => {
    setImage(e.target.value);
  };

  return (
    <div id="formComponentParent">
      <form onSubmit={(event) => event.preventDefault()} id="formComponent">
        <h1 id="formTitle">{formTitle}</h1>

        <h3 className="formLabel">{berichtnaamLabel}</h3>
        <input
          type="text"
          name="title"
          placeholder={berichtnaamPlaceholder}
          value={title}
          onChange={handleTitleChange}
        />

        <h3 className="formLabel">{categoryLabel}</h3>
        <select
          name="category"
          id="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option disabled value={categoryPlaceholder}>
            {categoryPlaceholder}
          </option>
          {categoryOptions.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        </select>

        <h3 className="formLabel">{headerAfbeeldingLabel}</h3>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/png, image/jpeg"
          value={image}
          onChange={handleImageChange}
        />

        <h3>{berichtLabel}</h3>
        <textarea
          id="bericht"
          name="bericht"
          value={content}
          onChange={handleContentChange}
        ></textarea>

        <button type="submit" id="submitButton" onClick={handleSubmit}>
          {submitButtonText}
        </button>
      </form>
    </div>
  );
}

export default Form;
