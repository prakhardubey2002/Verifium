import React from 'react'
import '../css/Button.css'
const Button = ({word}) => {
  return (
    <div>
        <button className='style-button' >
            {word}
        </button>


    </div>
  )
}

export default Button