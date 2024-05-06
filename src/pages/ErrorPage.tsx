import React from "react";
import { ErrorResponse, useRouteError } from "react-router";
import { Link } from "react-router-dom";

const ErrorPage: React.FC = () => {
  const error = useRouteError() as ErrorResponse;
  console.log(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      {/* <p>{error.data || error.statusText}</p> */}
      <p>
        {error.status} {error.statusText}
      </p>
      <Link to="/" className="underline text-blue-500 hover:no-underline">
        Go back to Home Page
      </Link>
    </div>
  );
};

export default ErrorPage;
