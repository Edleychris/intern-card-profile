import React from 'react'

function Button({onLogout}) {

    function handleClick(){
        onLogout();
    }
  return (
    <div className='btn-2'>
        <button className='2' type='submit' onClick={handleClick}> Log Out</button>
    </div>
  )
}

export default Button