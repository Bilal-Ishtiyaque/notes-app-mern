import { Link } from "react-router";
import { HelpCircle } from "lucide-react";

const NotFound = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center py-16 space-y-6 max-w-md mx-auto text-center">
      <div className="bg-base-300 rounded-full p-8">
        <HelpCircle className="w-10 h-10 text-base-content" />
      </div>
      <h3 className="text-3xl font-bold">Page Not Found</h3>
      <p className="text-base-content/70">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn btn-primary">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
