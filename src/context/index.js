import { createContext } from "react";

const themeObject = {
  color: "white",
  backgrond: "black"
};
const directionObject = {
  dir: "leftToRight"
};
export const setDirectionObject = (direction, contextObject) => {
  contextObject.direction = {
    ...contextObject.direction,
    dir: direction
  };
};

export const setThemeObject = (theme, contextObject) => {
  contextObject.theme = {
    ...contextObject.theme,
    theme: theme
  };
};

export const contextObject = {
  theme: themeObject,
  direction: directionObject
};

export const AppContext = createContext(contextObject);
