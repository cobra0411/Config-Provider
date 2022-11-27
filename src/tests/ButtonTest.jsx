import React, { useContext } from "react";
import { ConfigContext } from "../components/ConfigProvider";

export const Button = () => {
  const ConfigObject = useContext(ConfigContext);
  console.log("theme is", ConfigObject);
  return (
    <div>
      <button>This is button</button>
    </div>
  );
};
