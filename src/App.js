import "./App.css";
import Weather from "./components/Weather";
import Change from "./components/Change";
function App() {
  return (
    <div className="App">
      <Change />
      <div className="container">
        <h1 className="H">Just Weather</h1>
        <Weather defaultCity="Edmonton" />
        <footer>
          <p>
            App created by{" "}
            <a
              href="https://github.com/hugo-pb"
              target="_blank"
              rel="noreferrer"
            >
              Hugo-Palomera
            </a>
            , open source{" "}
            <a
              href="https://github.com/hugo-pb/React-Weather-App"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              here{" "}
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
