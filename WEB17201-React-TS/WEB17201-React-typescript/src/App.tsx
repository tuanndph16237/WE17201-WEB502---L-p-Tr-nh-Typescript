import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  type Info = {
    name: string;
  }
  function hello(props: Info){
    return <div>Hallo {props.name}</div>;
  }
  function Hello(props: Info){
    return <div>Hallo {props.name}</div>;
  }
  return (
    <div className="App">
      <div>
        <ul className='main-menu'>
          <li>{hello({name: "Tuan"})}</li>
          <li>
            <Hello name='Tuan'/>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default App
