import logo from './react.svg';
import './App.css';
import Body from './components/body/Body';
function App() {
  return (
    <div className="App">
        <header><img src={logo} alt=""/></header>
        <Body></Body>
    </div>
  );
}

export default App;
