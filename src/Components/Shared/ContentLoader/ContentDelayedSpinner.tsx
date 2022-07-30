import { useEffect, useState } from "react";
import LoadingSpinner from "Components/Shared/ContentLoader/LoadingSpinner";

const DelayedSpinner = () => {
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSpinner(true), 500);

    return () => clearTimeout(timer);
  });

  return (
    showSpinner && (
      <div className="flex justify-center p-4">
        <LoadingSpinner />
      </div>
    )
  );
};

export default DelayedSpinner;
