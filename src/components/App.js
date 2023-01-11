import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const onDarkModeClick = () => {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  };

  const appClass = isDarkMode ? "App dark" : "App light";
  return (
    <div className={appClass}>
      <Header onDarkModeClick={onDarkModeClick} mode={isDarkMode} />
      <ShoppingList items={itemData} />
    </div>
  );
};

export default App;
