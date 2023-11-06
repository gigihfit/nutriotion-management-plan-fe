import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center">
        <p className="text-lg">Page Not Found.</p>
        <Link to="/" className="text-center text-red-500 underline mt-4 block">
          Go Back Home
        </Link>
      </div>
    </>
  );
};
export default PageNotFound;
