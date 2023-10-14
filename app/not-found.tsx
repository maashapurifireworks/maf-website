import Link from "next/link";

const PageNotFound = () => {
  return (
    <div className="bg p-2 md:p-10 mx-auto h-[70vh] ">
      {/* 404 error page */}
      <div className="flex flex-col justify-center items-center h-full">
        <h1 className="text-9xl font-extrabold text-gray-900 mt-1/2">404</h1>
        <h1 className="text-2xl font-semibold text-gray-900">Page Not Found</h1>
        <Link
          href="/"
          className="text-white rounded-md bg-gray-800 p-3 font-semibold mt-5 w-auto hover:scale-105 transition-all duration-300 ease-in-out"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
