import { Link, useLocation, useRouteError } from "react-router-dom";
import { useEffect } from "react";

const Error = () => {
  const location = useLocation();
  const error = useRouteError();
  console.log("⚠ ROUTER ERROR:", error);

  useEffect(() => {
    console.log("404 Error: User attempted to access:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center ">
      {" "}
      <div className="text-center p-8 bg-white rounded-lg shadow-lg">
        {" "}
        <h1 className="text-6xl font-bold text-green-600 mb-4">Oops!</h1>{" "}
        <p className="text-2xl text-green-500 mb-6">Some thing went wrong</p>{" "}
        <p className="text-gray-600 mb-8">
          {error?.status} : {error?.statusText}
        </p>
        {" "}
        <p>
          
        </p>{" "}
        <Link
          href="/"
          className="text-white bg-green-600 hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        >
          {" "}
          Return to Home{" "}
        </Link>{" "}
      </div>{" "}
    </div>
  );
};

export default Error;
