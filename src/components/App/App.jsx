import React, { useContext, useState } from "react";
import { useEffect } from "react";
import "./App.css";
import TextArea from "../TextArea.jsx";
import Statistic from "../statistic/Statistic.jsx";

import { ThemeContext } from "./ThemeContext.jsx";

function App() {
  const [counter, setCounter] = useState(0);

  const [text, setText] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(text));
  }, [text]);

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`body ${theme}`}>
      <div className="app-wrapper">
        <h2 className="h2">Analyze your text</h2>
        <h2 className="h2">real-time</h2>

        <div className="text-password">
          {" "}
          {/*передаем пропсы в компонент набора текста, чтобы отследать количество символов*/}
          <TextArea input={text} setInput={setText} />
        </div>

        <div className="statistic-menu">
          {" "}
          {/*передаем пропсы в компонент статистики чтобы появились карточки*/}
          <Statistic text={text} check={"characters"} />
          <Statistic text={text} check={"words"} />
          <Statistic text={text} check={"sentences"} />
        </div>

        <div className="`card-password ${theme}`">
          <ul style={{ listStyleType: "none" }}></ul>

          <div className="menu-btn">
            <button
              onClick={() => setCounter((prev) => prev + 1)}
              className="menu-btn-style"
            >
              {counter}
            </button>
            <button onClick={toggleTheme} className="menu-btn-style">
              Смена Темы
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
