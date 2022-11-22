import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { State } from "../../2-example/9-Redux-Ad/rootReducer";

const LoadingSpinner = () => {
  const { loading } = useSelector((state: State) => state.common);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    if (loading) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
  }, [loading]);

  return <>{isLoading && <div className="loading">Loading&#8230;</div>}</>;
};
export default LoadingSpinner;
