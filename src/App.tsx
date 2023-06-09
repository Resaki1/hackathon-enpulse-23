/* import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg"; */
import { useState } from "react";
import "./App.scss";
import { complete } from "./api/openai";
import TwinCity from "/twincity.svg";

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [login, setLogin] = useState(true);

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
      <div className="header">
        <a onClick={() => setLogin(!login)}>{login ? "logout" : "login"}</a>
      </div>
      <div>
        <h1>
          <img src={TwinCity} alt="TwinCity Logo" />
        </h1>
        <h2>Stadt Karlsruhe</h2>
      </div>
      {login && (
        <div className="content">
          <h3>Wonach suchst du?</h3>
          <p>
            Frage zum Beispiel nach der Tiefe von Leitungen in einer bestimmten
            Straße.
          </p>
          <input
            type="text"
            value={text}
            placeholder="Was ist die maximale Grabtiefe in der Moltkestraße?"
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
              <p>
                Lade dir{" "}
                <a href="./data.html" target="_blank">
                  hier
                </a>{" "}
                die Daten runter.
              </p>
            </>
          )}
        </div>
      )}
      <div className="footer">
        TwinCity Karlsruhe
        <img
          height="32"
          src="https://www.cityofmediaarts.de/wp-content/uploads/2021/05/logo_karlsruhe.png"
        />
      </div>
    </div>
  );
}

export default App;
