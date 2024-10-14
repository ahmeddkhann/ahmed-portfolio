import React from 'react'
import { projects } from '../data'

const RecentProjects = () => {
  return (
    <div className='py-20'>
        <h1 className='heading'>
            A small collection of {" "}
            <span className='text-purple'>
                recent projects
            </span>
            </h1>      
            <div className='flex flex-wrap items-center 
             justify-center p-4 gap-16 mt-20'>
                {projects.map(({id, title, des, img, iconLists, link}) => (
                    <div key={id} className='lg:min-h-[32.5rem] 
                    h-[25rem] flex itmes-centre justify-center sm:w-96 
                    w-[80vh]'>
                        
                    </div>
                ))} 

            </div>
    </div>
  )
}

export default RecentProjects
