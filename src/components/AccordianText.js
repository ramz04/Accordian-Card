import React from 'react'
import arrow from '../assets/images/icon-arrow-down.svg'

function AccordianText(props) {

  const [isShown, setIsShown] = React.useState(false)


  function toggle() {
    setIsShown(prevShown => !prevShown) 
  }
  

  return (
    <div className='mt-2 md:mt-4'>
      {/*First section*/}
      <div className='mt-2 md:mt-4'>
        <div className='flex items-center justify-between gap-8 text-Darkgrayishblue'>
          <p className='text-sm aria-checked:text-black aria-checked:font-bold' aria-checked={isShown}>{props.header}</p>
          <button onClick={toggle} aria-checked={isShown} className="aria-checked:rotate-180 transition duration-400">
            <img src={arrow}  className="w-[10px]" alt={"arrow"} />
          </button>
        </div>
          {isShown && <p className='text-Darkgrayishblue mt-3 md:mt-4 text-sm transition ease-in-out duration-200'>
            {props.textcontent}
          </p>}
          <hr className='mt-4 px-2 md:mt-6'/>
      </div>
    </div>
  )
}

export default AccordianText
