import React from 'react'
import { ComboBox } from './utils/ComboBox'

const OrgNav = () => {
  return (
    <div className='h-20 border-b flex items-center justify-between px-32'>
        {/* combobox navbar for creating service  */}
        <div>
            <ComboBox/>
        </div>

        {/* Navbar for routes of particular services  */}
        <div>
            routes 
        </div>


        {/* //useavartar and logout button  */}
        <div>
            logout and username
        </div>
    </div>
  )
}

export default OrgNav
