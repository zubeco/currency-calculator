import React, {useState} from 'react';
import rates from '../rates';
import './Form.css'

const Form = ({placeholder, name, currency}) => {
    const [ngnValue, setNgnValue] = useState(0);
    const [otherCurrencyValue, setOtherCurrencyValue] = useState(0);

    const rate = rates[currency];

    const handleCurrencyConversion = (e, eventIsTriggeredFromOtherCurrency) => {
        if(eventIsTriggeredFromOtherCurrency) {
             setOtherCurrencyValue(e.target.value)
             setNgnValue(e.target.value * rate);
        } else {
            setOtherCurrencyValue(e.target.value / rate);
            setNgnValue(e.target.value);
        }
    };

    return (
            <form className='form-header'>
                <div className='general'>
                    <label className='currency-name'>Naira</label>
                    <input className='input-class' 
                    type="number" 
                    placeholder='NGN' 
                    value={ngnValue} 
                    onChange={e => handleCurrencyConversion(e, false)}/>
                </div>
            
                <div className='general'>
                    <label className='currency-name'>{name}</label> 
                    <input className='input-class'
                     type="number" 
                     placeholder={placeholder} 
                     value={otherCurrencyValue} 
                     onChange={e => handleCurrencyConversion(e, true)}/>
                </div>
            </form>
    )
}

export default Form
