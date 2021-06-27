import React, {useEffect, useState} from 'react';
import './App.css';
import Form from './components/Form';
import Title from './components/Title';
import currencies from './currencies'


const App = () => {

  const [rates, setRates] = useState(null);

  useEffect(() => {
    
    const url = 'https://api.exchangerate.host/latest?base=NGN&symbols=USD,EUR,GBP,JPY';
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
            //
            console.log(result)
            setRates(result.rates);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
            //
        }
      )
  }, [])






  return (
    <div className="app-container"  >
      <Title />
      {rates ? (
        <>
          <Form placeholder={currencies[0].code} name={currencies[0].currency} rate={rates[currencies[0].code]} />
          <Form placeholder={currencies[1].code} name={currencies[1].currency} rate={rates[currencies[1].code]} />
          <Form placeholder={currencies[2].code} name={currencies[2].currency} rate={rates[currencies[2].code]} />
          <Form placeholder={currencies[3].code} name={currencies[3].currency} rate={rates[currencies[3].code]} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div> 
  );
}

export default App;
