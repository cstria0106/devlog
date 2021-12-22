import React from "react";

import "normalize.css";
import "@fontsource/noto-sans-kr";
import "../styles/global.scss";
import DefaultLayoutHeader from "../components/layout/default/header";

export const ThemeModeDispatch = React.createContext("light");

const DefaultLayout: React.FC = ({ children }) => {
  const [theme] = React.useState("light");

  return (
    <ThemeModeDispatch.Provider value={theme}>
      <div className={`wrapper ${theme}`}>
        <DefaultLayoutHeader />
        {children}
      </div>

      <style jsx>{`
        .wrapper {
          background-color: var(--background-color);
          color: var(--text-color);
          min-height: 100vh;

          transition-property: background-color;
          transition-duration: 0.5s;
        }
      `}</style>
    </ThemeModeDispatch.Provider>
  );
};

export default DefaultLayout;
