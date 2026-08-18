import { useState } from 'react'
import React from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')

  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task]
    copyTask.push({ title, detail })

    setTask(copyTask)

    setTitle('')
    setDetail('')
  }

  const deleteNote = (idx) => {
    const copyTask = [...task]
    copyTask.splice(idx, 1)
    setTask(copyTask)
  }


  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={(e) => {
        submitHandler(e);
      }} className='flex flex-col lg:w-1/2 item-start gap-4  p-10'>
        <h1 className='text-3xl font-bold'>Add Notes</h1>
        <input type="text" placeholder='Enter notes heading'
          className='px-5 py-2 border-2 font-medium rounded outline-none'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)

          }}
        />
        <textarea type="text" placeholder='Enter details'
          className='px-5 py-2 h-32 border-2 font-medium rounded outline-none'
          value={detail}
          onChange={(e) => {
            setDetail(e.target.value)

          }}
        />
        <button className='active:scale-95 cursor-pointer px-5 py-2 font-medium bg-white outline-none text-black'>Add Notes</button>
      </form>
      <div className='lg:w-1/2 lg:border-l-2 p-10'>
        <h1 className='text-3xl font-bold'>Recent Notes</h1>
        <div className='h-[90%] overflow-auto flex flex-wrap item-start justify-start gap-7 mt-5'>
          {task.map(function (elem, idx) {

            return <div key={idx} className='flex justify-between flex-col item-start h-56 w-48 py-8 px-4 rounded-2xl bg-cover bg-[url("https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png")] text-black p-4'>
              <div>
                <h3 className='leading-tight text-lg font-bold wrap-break-word'>{elem.title}</h3>
                <p className='leading-tight mt-4 text-sm font-medium text-gray-500 wrap-break-word'>{elem.detail}</p>
              </div>
              <button onClick={() => {
                deleteNote(idx)
              }} className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>Delete</button>
            </div>
          })}
        </div>

      </div>
    </div>
  )
}

export default App