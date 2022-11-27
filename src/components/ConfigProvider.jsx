import React from "react";
import {
  AppContext,
  contextObject,
  setDirectionObject,
  setThemeObject
} from "../context";

const setConfig = ({ theme, dir }) => {
  if (dir) {
    setDirectionObject(dir, contextObject);
  }
  if (theme) {
    setThemeObject(theme, contextObject);
  }
};

const ConfigProvider = (props) => {
  return (
    <AppContext.Provider value={contextObject}>
      {props.children}
    </AppContext.Provider>
  );
};
export const ConfigContext = AppContext;

ConfigProvider.setConfig = setConfig;
export default ConfigProvider;
