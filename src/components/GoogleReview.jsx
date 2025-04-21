import { useEffect } from "react";

const GoogleReviews = () => {
    useEffect(() => {
      const script = document.createElement("script");
      script.src = "https://static.elfsight.com/platform/platform.js";
      script.async = true;
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }, []);
  
    return (
      <div className="mb-12 px-6 md:px-12 bg-transparent">
      <div className="elfsight-app-564ee4d1-e713-493f-b48d-c7e30f90c8f1" data-elfsight-app-lazy></div>
      </div>
    );
  };

  export default GoogleReviews;