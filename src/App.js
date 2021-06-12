import logo from './logo.svg';
import SpotifyLogin from './components/SpotifyLogin'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Connect to
        </p>
        <SpotifyLogin/>
      </header>
    </div>
  );
}

export default App;
