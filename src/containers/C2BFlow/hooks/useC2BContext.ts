import { C2BContext } from "./../context/c2b.context";
import { useContext } from "react";

const useC2BContext = () => {
  const context = useContext(C2BContext);

  if (!context)
    throw new Error("useC2BContext must be used inside C2BContextProvider");

  return context;
};

export default useC2BContext;
