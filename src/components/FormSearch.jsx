import React, { useRef, useState } from 'react'
import getRandomNumber from '../utils/getRandomNumber'
import './styles/formSearch.css'

const FormSearch = ({setIdLocation}) => {
    const idLocationValue = useRef()
    const handleSubmit = e =>{
        e.preventDefault()
        if(idLocationValue.current.value){
            setIdLocation(idLocationValue.current.value)
        }else{
            setIdLocation(getRandomNumber(126))
            console.log('ingresa un parametro');
        }
    }
  return (
    <form className='form' onSubmit={handleSubmit}>
        <input className='form__input'
            type="text" 
            placeholder='enter Id location'
            ref={idLocationValue}/>
        <button className='form__button'>Search</button>
    </form>
  )
}

export default FormSearch