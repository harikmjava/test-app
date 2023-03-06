import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <SayHello />
      <SayHello />
    </div>
  );
}

function SayHello(){
  return <p>Hello Crazy World! Learning React</p>
}

export default App;
