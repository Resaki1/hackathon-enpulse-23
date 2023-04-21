/* import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg"; */
import { useState } from "react";
import "./App.css";
import { complete } from "./api/openai";

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState<string>("");

  const search = async (text: string) => {
    complete(text).then((data) => {
      const result = data; /* .replace("KI: ", "") */
      setResult(result);
    });
  };

  return (
    <div className="App">
      <h1>TwinCity</h1>
      <h2>Stadt Karlsruhe</h2>
      <h3>Wonach suchst du?</h3>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            search(text);
          }
        }}
      ></input>
      <p>{result}</p>
    </div>
  );
}

export default App;
