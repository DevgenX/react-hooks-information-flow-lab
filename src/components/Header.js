import React from "react";

const Header = ({ onDarkModeClick, mode }) => {
  const appClass = mode ? "App dark" : "App light";
  //   console.log(appClass);
  return (
    <header className={appClass}>
      <h2>Shopster</h2>
      <button onClick={onDarkModeClick}>{mode ? "Dark" : "Light"} Mode</button>
    </header>
  );
};

export default Header;
