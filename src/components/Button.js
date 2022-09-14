import React from 'react'

const Button = ({ onClick, children }) => {
  return (
    <div>
      <button className='bg-indigo-600 text-white py-2 px-6 my-10 rounded hover:bg-indigo-700'
        onClick={onClick}>
        {children}
      </button>

    </div>
  )
}

export default Button