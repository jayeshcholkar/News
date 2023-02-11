import React from 'react'

function ScrollBar(props) {
    const {setCategory} = props
    const btnStyle ="inline-block py-1 text-xl text-white bg-[#625b71] px-7 hover:bg-[#1e192b] rounded-xl"
   
  return (
    <div className='mb-10 mx-8 relative z-0'>
        <ul className="flex overflow-x-scroll w-[80%] max-sm:w-80 no-scrollbar items-center justify-between max-sm:gap-2 ">
        <button className={btnStyle} onClick={() => setCategory("sports")}>
            <li>Sports</li>
          </button>
          <button className={btnStyle} onClick={() => setCategory("business")}>
            <li>Business</li>
          </button>
          <button className={btnStyle} onClick={() => setCategory("nation")}>
            <li>Nation</li>
          </button>
          <button className={btnStyle} onClick={() => setCategory("entertainment")}>
            <li>Entertainment</li>
          </button>
          <button className={btnStyle} onClick={() => setCategory("health")}>
            <li>Health</li>
          </button>
          <button className={btnStyle} onClick={() => setCategory("science")}>
            <li>Science</li>
          </button>
          <button className={btnStyle} onClick={() => setCategory("general")}>
            <li>General</li>
          </button>
        </ul>
        <div className=" md:hidden absolute top-0 left-[270px] h-9 w-2/12 bg-gradient-to-l from-[#06202A]" />
    </div>
  )
}

export default ScrollBar