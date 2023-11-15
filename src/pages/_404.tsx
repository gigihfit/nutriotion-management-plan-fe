import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center">
        <p className="text-lg">Page Not Found.</p>
        <Link to="/home" className="text-center text-blue-500 underline mt-4 block">
          Go Back Home
        </Link>
      </div>
    </>
  );
};
export default PageNotFound;
