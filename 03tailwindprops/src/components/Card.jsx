import React from 'react'

function Card({username,btnTxt='visit me'}) {
  return (
   <div className="max-w-xs p-6 rounded-md shadow-md bg-black mb-4 ">
        <img
          src="https://images.pexels.com/photos/11039696/pexels-photo-11039696.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            {username}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">Lorem ipsum dolor</h2>
        </div>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
          amet
          
        </p>
        <button className="mt-3">{btnTxt}</button>
      </div>
  )
}

export default Card
