import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../styles/Form.scss";
import { FormProps } from "../pages/Home";
import Button from "@mui/material/Button";
import ButtonComponent from "./Button";
import Camera from "../assets/cameraStyle.svg";

function Form(props: FormProps) {
  const {
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

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [selectedCategory, setSelectedCategory] =
    useState<string>(categoryPlaceholder);
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("category_id", selectedCategory);
    if (image) {
      formData.append("image", image);
    }

    try {
      const response = await fetch(
        "https://frontend-case-api.sbdev.nl/api/posts",
        {
          method: "POST",
          headers: {
            token: "pj11daaQRz7zUIH56B9Z",
          },
          body: formData,
        }
      );

      if (response.ok) {
        console.log("Form data submitted successfully");
        // Perform any additional actions upon successful form submission
      } else {
        console.log("Error submitting form data");
        // Handle error scenarios
      }
    } catch (error) {
      console.log("Error submitting form data", error);
      // Handle error scenarios
    }
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setImage(file);
  };
  useEffect(() => {
    console.log(selectedCategory);
  }, [selectedCategory]);
  return (
    <div id="formComponentParent">
      <form onSubmit={handleSubmit} id="formComponent">
        <h1 id="formTitle">{formTitle}</h1>

        <h3 className="formLabel">{berichtnaamLabel}</h3>
        <input
          id="title"
          required
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
          <option id="geen" value="" selected hidden>
            Geen categorie
          </option>
          {categoryOptions.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        </select>

        <h3 className="formLabel">{headerAfbeeldingLabel}</h3>
        <div id="test">
          <div id="imageInput">
            <img src={Camera} alt="" id="imagePreview" />
            <input
              required
              type="file"
              id="image"
              name="image"
              accept="image/png, image/jpeg"
              onChange={handleImageChange}
            />
          </div>
        </div>
        <h3>{berichtLabel}</h3>
        <textarea
          id="bericht"
          name="bericht"
          value={content}
          onChange={handleContentChange}
        ></textarea>

        <div id="formButton">
          <ButtonComponent
            submitButtonText={submitButtonText}
            handleSubmit={handleSubmit}
          />
        </div>
      </form>
    </div>
  );
}

export default Form;
