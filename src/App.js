import "./App.css";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <main>
        <Form />
      </main>

      {/* /* *****************************  footer */}
      <footer>
        <p>
          Made with <span>React</span> at{" "}
          <a href="https://www.lereacteur.io/">Le Réacteur </a>
          by
          <span> Emilie Leury</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
