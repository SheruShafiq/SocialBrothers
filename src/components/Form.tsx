import React from "react";
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

  return (
    <div id="formComponentParent">
      <form action={formAction} id="formComponent">
        <h1 id="formTitle">{formTitle}</h1>

        <h3 className="formLabel">{berichtnaamLabel}</h3>
        <input
          type="text"
          name="berichtnaam"
          placeholder={berichtnaamPlaceholder}
        />

        <h3 className="formLabel">{categoryLabel}</h3>
        <select
          name="category"
          id="category"
          placeholder={categoryPlaceholder}
          defaultValue={categoryPlaceholder}
        >
          {categoryOptions.map((option, index) => (
            <option key={index} value={option.value}>
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
        />

        <h3>{berichtLabel}</h3>
        <textarea id="bericht" name="bericht"></textarea>

        <input type="submit" id="submitButton" value={submitButtonText} />
      </form>
    </div>
  );
}

export default Form;
