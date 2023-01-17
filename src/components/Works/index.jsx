import React, { useEffect, useState } from 'react';
import { projectNav, projectsData } from '../Work/Data';
import WorkItem from '../WorkItem';


const Works = () => {
  const [item, setItem] = useState({name:"all"})
  const [projects, setProjects] = useState([])
  const [active, setActive] = useState(0)

  return (
    <div>
     <div className='work__container container grid'>
      {
        projectsData.map((item) => {
              return <WorkItem item={item} key={item.id}/>
          })
      }
     </div>
    </div>
  )
}

export default Works;