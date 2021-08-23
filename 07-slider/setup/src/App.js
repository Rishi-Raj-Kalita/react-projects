import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [peoples,setPeoples]=useState(data)
  const [index,setIndex]=useState(0)

  useEffect(()=>{
    const lastIndex=peoples.length-1
    if(index<0)
    {
      setIndex(lastIndex)
    }
    if(index>lastIndex)
    {
      setIndex(0)
    }
  },[index,peoples])

  useEffect(()=>{
    const slider=setInterval(() => {
      setIndex(index+1)
    },3000);

    return(()=>{
      clearInterval(slider)
    })
  })

  return (
  <section className='section'>
    <div className='title'>
      <h2>
      <span>/Reviews</span>
      </h2>
    </div>
    <div className='section-center'>
      {
        peoples.map((people,peopleIndex)=>{
          const {id,title,name,quote,image}=people
          let position='nextSlide'
          if(index===peopleIndex)
          {
            position='activeSlide'
          }

          if(peopleIndex==index-1||index===0&&peopleIndex===peoples.length-1)
          {
            position='lastSlide'
          }
          return (
            <div>
              <article key={id} className={position}>
                <img src={image} alt={name} className='person-img'></img>
                <h2>{name}</h2>
                <p className='title'>{title}</p>
                <p className='quote'>{quote}</p>
                <FaQuoteRight/>
              </article>
              <button className='prev' onClick={()=>setIndex(index-1)}>
                <FiChevronLeft/>
              </button>
              <button className='next' onClick={()=>setIndex(index+1)}>
                <FiChevronRight/>
              </button>
            </div>
          )
        })
      }
    </div>
  </section>
  )
}

export default App;
