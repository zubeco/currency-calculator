import React, {useState} from 'react';
import './App.css';
import Form from './components/Form';
import Title from './components/Title';


const App = () => {
  return (
    <div className="App">
      <Title />
      <Form placeholder='USD' name='Dollar' currency='usd'/>
      <Form placeholder='GBP' name='Pounds Sterling' currency='gbp'/>
      <Form placeholder='JPY' name='Japanese Yen'  currency='jpy'/>
      <Form placeholder='EUR' name='Euro'  currency='eur'/>
    </div>
  );
}

export default App;
