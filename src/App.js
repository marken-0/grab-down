import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a href="https://accounts.spotify.com/authorize?client_id=9d686c7d0833427db57420593ab7038b&response_type=token&redirect_uri=http://localhost:3000/callback&scope=user-read-private%20user-read-email">
          Log in with Spotify
        </a>
      </header>
    </div>
  );
}

export default App;
