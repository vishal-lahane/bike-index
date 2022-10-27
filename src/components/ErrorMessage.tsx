import React from "react";
interface Props {
  errorMessage: string;
}
const ErrorMessage = ({ errorMessage }: Props) => {
  return (
    <div className="alert alert-danger mt-3" role="alert">
      {errorMessage}
    </div>
  );
};

export default ErrorMessage;
