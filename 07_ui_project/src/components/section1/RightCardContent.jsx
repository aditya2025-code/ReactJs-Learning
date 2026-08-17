import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className="h-full w-full absolute top-0 left-0  p-8 flex flex-col justify-between">
      <h2 className="bg-white text-xl font-semibold rounded-full h-12 w-12 flex justify-center items-center">{props.id + 1}</h2>
      <div>
        <p className="text-xl text-white leading-relaxed mb-14">{props.intro}</p>
        <div id="buttons" className="flex justify-between">
          <button className="bg-blue-600 text-white font-semibold px-8 py-2 rounded-full">{props.tag}</button>
          <button className="bg-blue-600 text-white font-semibold px-3 py-2 rounded-full"><i className="ri-arrow-right-line"></i></button>
        </div>
      </div>
    </div>
  )
}

export default RightCardContent