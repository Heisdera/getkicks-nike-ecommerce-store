import React from "react";
import { ErrorResponse, useRouteError } from "react-router";
import { Link } from "react-router-dom";

const ErrorPage: React.FC = () => {
  const error = useRouteError() as ErrorResponse;

  return (
    <div
      id="error-page"
      className="flex h-screen flex-col items-center justify-center gap-4"
    >
      <h1 className="text-4xl">Oops!</h1>
      <p className="text-xl text-red-500">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="flex flex-col items-center gap-1">
        <span>{error.data}</span>
        <span>{error.statusText}</span>
      </p>
      <Link
        to="/collections/nike"
        className="text-blue-500 underline hover:no-underline"
      >
        &larr; Go back to Home Page
      </Link>
    </div>
  );
};

export default ErrorPage;
