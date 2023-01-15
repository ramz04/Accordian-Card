import React from 'react'
import womanonline from '../assets/images/illustration-woman-online-mobile.svg'
import './AccordianText'
import AccordianText from './AccordianText'
import Text from './Text'

function Accordian() {
  const data = Text.map(
    i => {
      return (
        <AccordianText 
          key={i.id}
          header={i.head}
          textcontent={i.text}
        />
      )
    }
  )
  return (
    <div className='font-kumbhsans flex justify-center items-center h-screen bg-gradient-to-t from-Softblue to-Softviolet p-6'>
      <main className='w-[400px] md:w-[900px] bg-white md:px-16 p-6  gap-5 rounded-xl p-3 md:grid md:grid-cols-2 md:justify-center flex flex-col items-center'>
        <div className='md:-ml-20'>
          <div className=''>
                        <svg width="240" height="104" className='-mt-6 md:hidden' xmlns="http://www.w3.org/2000/svg"><path d="M116.454 102.048L4.667    34.239c-3.56-2.054-6.61-5.42-3.142-7.627l112.184-66.364c1.682-1.07 4.237-1.773 5.951-.75l117.328 69.904c3.559 2.12 4.198 8.028.652 10.17L131.185 101.94a14.53 14.53 0 01-14.731.107z" fill="#6862E6" fill-rule="nonzero" opacity=".099"/></svg>
          </div>
          <div className='-mt-52 md:mt-0 md:p-16 md:-ml-28 '>
            <img src={womanonline} alt={'womanonline'} className='' />
          </div>
        </div>
        <div className='mb-6'>
        <h2 className='mt-10  text-4xl font-bold text-black text-center md:text-left md:mb-5'>FAQ</h2>
          {data}
        </div>
      </main>
    </div>
  )
}

export default Accordian
