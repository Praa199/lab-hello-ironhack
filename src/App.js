import logo from "./logo.svg";
import "./App.css";

import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <nav className="App-nav">
        <div>
          <img src="/images/ironhack-logo.svg"></img>
        </div>
        <div>
          <img src="/images/menu-top.svg"></img>
        </div>
      </nav>
      <header className="App-header">
        <div>
          <h1>Say hello to ReactJS</h1>
          <p>
            Do ipsum veniam magna culpa duis exercitation pariatur. Non in
            pariatur sunt minim sunt sint. Duis nisi laboris esse ipsum laborum
            commodo duis qui magna quis enim qui.
          </p>
          <a>
            <button>Awesome!!</button>
          </a>
          <Footer />
        </div>
      </header>
    </div>
  );
}

export default App;
