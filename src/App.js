import { useState, useEffect } from 'react'


function ExampleChild() {

  useEffect(() => {
    console.log('Subscribing...(effect)')
    return () => {
      console.log('Unsubscribing...(cleanup)')
    }
  });

  return (
    <h2>I am the example child</h2>
  );
}

function App() {
  const [color, setColor] = useState('red');
  const [msg, setMsg] = useState('Initial Message');

  // useEffect(() => {
  //   console.log(msg);
  // }, [msg, color]);

  // useEffect(() => {
  //   console.log('mount');
  // }, []);//empty array prevents effect from running after mounting, thus simulating componentDidMount();


  function changeColor() {
    color === 'red' ? setColor('blue') : setColor('red');
  }
  function changeMsg() {
    setMsg('Super Secret Message');
  }

  return (
    <div>
      <h1 style={{ background: color }}>React Hooks Demo</h1>
      <h1>{msg}</h1>
      <button onClick={changeColor}>Click me(color)</button>
      <button onClick={changeMsg}>Click me(msg)</button>
      {msg === 'Initial Message' && <ExampleChild />}
    </div>
  );
}

export default App;
