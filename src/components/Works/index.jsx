import React, { useEffect, useState } from 'react';
import { projectNav, projectsData } from '../Work/Data';
import WorkItem from '../WorkItem';
import "./index.css";

const Works = () => {
  const [item, setItem] = useState({name:"all"})
  const [projects, setProjects] = useState([])
  const [active, setActive] = useState(0)
  console.log(item)
  useEffect(()=>{
   if(item.name === "all") {
     setProjects(projectsData)
   } else {
     const newProjects = projectsData.filter((project) => {
       return project.category === item.name
     })
     setProjects(newProjects)
   }
  },[item])

  return (
    <div>
     <div className='work__filters'>
      {
          projectNav.map((item, index) => {
              return (
                  <span 
                  onClick={()=> {
                    setActive(index)
                    setItem({name: item.name})}
                  } 
                  className={`${active === index ?"active_work":""} work__item`} key={index}>
                    {item.name}
                  </span>
              )
          })
      }
     </div>
     <div className='work__container container grid'>
      {
        projects.map((item) => {
              return <WorkItem item={item} key={item.id}/>
          })
      }
     </div>
    </div>
  )
}

export default Works;