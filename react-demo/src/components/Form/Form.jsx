import React, { useState} from 'react'
// import './Form.css'

function Form(props) {
  const [input, setInput] = useState ('');

  const handleChange =e => {
    setInput(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit ({
      id: Math.floor (Math.random() * 10000),
      text: input
    });

    setInput('');
  };

    return (
      <form action="" className='todo-form' onSubmit={handleSubmit}>
        <div>
            <input 
            type="text" 
            name="text" 
            id="taskName" 
            value={input} 
            placeholder='Add a Todo' 
            className='todo-input'
            onChange={handleChange}
            />
            <button className='todo-button'>Add todo</button>

        </div>
      </form>
    );
  }

  export default Form