import './App.css';

function sum(a,b) {
  return a + b;
}

function primeiroJSX() {
  return(
    <div>
      Murilo - Introdução ao ReactJS
      <h1>Soma: {sum(10, 20)}</h1>
    </div>
  )
}

function App() {
  return (
    <div className='App'>
      {primeiroJSX()}
    </div>
  );
}

export default App;
