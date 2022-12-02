import React, { useState} from 'react';
// import Form from './'

const Form = () => {
  const [styled, setStyled] = useState({});
  const [inputValue, setValue] = useState('');
  const [err, setErr] = useState('')

  const formChangeHandler = (e) => {
    e.preventDefault();
    let style = {};
    if (inputValue === '' ){
      style = {
        border: '2px solid red'
      }
    }
    else{
      style = {
        border: '2px solid green'
      }
    }
  }
}
export default Form;