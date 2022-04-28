import './App.css';
import Button from './Button'

function soma(a,b) {
  alert (a + b);
}

function App() {
  return (
    <div className='App'>
      10+20<Button onClick={() => soma(10,20)} name="Soma" />

    </div>
  );
}

export default App;
