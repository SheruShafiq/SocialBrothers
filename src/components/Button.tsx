import React from "react";
import "../styles/Button.scss";

type ButtonProps = {
  submitButtonText: string;
  handleSubmit: (e: any) => void;
};

const Button: React.FC<ButtonProps> = ({ submitButtonText, handleSubmit }) => {
  return (
    <button type="submit" id="submitButton" onClick={handleSubmit}>
      {submitButtonText}
    </button>
  );
};

export default Button;
