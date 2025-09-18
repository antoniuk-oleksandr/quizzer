import { useEffect, useState } from "react";
import { Bars, Puff } from "react-loader-spinner";

const Loader = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1000);
  }, []);

  if (!loaded) return null;
  return <div className="flex justify-center items-center h-app w-full">
    <Bars color="#2b7fff" height={100} width={100} />
  </div>;
};

export default Loader;
