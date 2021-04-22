import React, {useState} from 'react';
import './Form.css'
import currencies from '../currencies'

const Form = ({placeholder, name, rate}) => {
    const [ngnValue, setngnValue] = useState(0)
    const [otherCurrencyValue, setotherCurrencyValue] = useState(0)

    const handleCurrencyConversion = (e, genCurrency) => {
        if (genCurrency){
            setotherCurrencyValue(e.target.value)
            setngnValue(e.target.value / rate)
        }else{
            setotherCurrencyValue(e.target.value * rate)
            setngnValue(e.target.value)
        }
    }

    return (
            <form className='form-header'>
                <div className='general'>
                    <label className='currency-name'>Naira</label>
                    <input className='input-class' 
                    type="number" 
                    value = {ngnValue}
                    placeholder='NGN' 
                    onChange = {e => handleCurrencyConversion (e, false) }/>
                </div>
            
                <div className='general'>
                    <label className='currency-name'>{name}</label> 
                    <input className='input-class'
                     type="number" 
                     value = {otherCurrencyValue}
                     placeholder={placeholder} 
                     onChange = {e => handleCurrencyConversion (e, true) }/>
                </div>
            </form>
    )
}

export default Form
