import React from "react";
import { Button as SemanticButton } from "semantic-ui-react";

const Button = ({ label, onClick }) => {
  const getButtonColor = (label) => {
    switch (label.toLowerCase()) {
      case "delete":
        return "red";

      default:
        return "blue";
    }
  };
  return (
    <SemanticButton color={getButtonColor(label)} onClick={onClick}>
      {label}
    </SemanticButton>
  );
};

export default Button;
