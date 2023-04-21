/* import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg"; */
import { useState } from "react";
import "./App.scss";
import { complete } from "./api/openai";

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const search = async (text: string) => {
    setLoading(true);
    setResult("");
    complete(text)
      .then((data) => {
        const result = data;
        setResult(result);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="App">
      <div>
        <h1>TwinCity</h1>
        <h2>Stadt Karlsruhe</h2>
      </div>
      <div className="content">
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
        {loading && <div className="dot-elastic"></div>}
        {result && (
          <>
            <p>{result}</p>
            <a href="./data.html" target="_blank">
              Schaue dir die PDF an
            </a>
          </>
        )}
      </div>
      <div className="footer">
        TwinCity | Ein Produkt von{" "}
        <a href="https://enpulse.io/" target="_blank">
          enpulse
        </a>
      </div>
    </div>
  );
}

export default App;
