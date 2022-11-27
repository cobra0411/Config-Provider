import React from "react";
import { Button } from "./ButtonTest";
import ConfigProvider from "../components/ConfigProvider";
export const Test = () => {
  let theme = "myThemes";
  let dir = "myDir";
  ConfigProvider.setConfig({ theme, dir });
  return (
    <ConfigProvider>
      <div>
        These are tests
        <Button></Button>
      </div>
    </ConfigProvider>
  );
};
