import { AlertTriangle } from "lucide-react";

const GeneralErrorUI = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 space-y-6 max-w-md mx-auto text-center">
      <div className="bg-error/10 rounded-full p-8">
        <AlertTriangle className="w-10 h-10 text-error" />
      </div>
      <h3 className="text-2xl font-bold text-error">
        Something went wrong. Please try again.
      </h3>
      <p className="text-base-content/70">Try refreshing the page.</p>
    </div>
  );
};

export default GeneralErrorUI;
