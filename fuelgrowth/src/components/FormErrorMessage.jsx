import React from "react";

export const FormErrorMessage = ({ errorMessage }) => {
  return <span className="text-xs text-red-600">{errorMessage}</span>;
};
