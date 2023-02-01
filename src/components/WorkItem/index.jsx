import React from 'react'
const WorkItem = ({item}) => {
  return (
   <div className='work__card'>
     <img src={item.image} alt='' className='work__img'/>
     <h3 className='work__title'>{item.title}</h3>
    <div className='tech__head'>
      <div className='tech__main'>
      {
        item.tech.map((t) => (
          <span className='tech__stack'>{t}</span>
        ))
      }
    </div>
    </div>
     <div className='tect__desc'>
        <p>{item.desc}</p>
     </div>
     <div className='work__link'>
       <a href={item.demo_link} className='work__button' target='_blank'>
           Demo <i class="uil uil-external-link-alt"></i>
       </a>
        <a href={item.git_link} className='work__button' target='_blank'>
            github <i class="uil uil-github"></i>
        </a>
     </div>
   </div>
  )
}

export default WorkItem

// <i className='bx bx-right-arrow-alt work__button-icon'></i>