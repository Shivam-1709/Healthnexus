import React from 'react'
import { Link } from 'react-router-dom'

function Psidenav() {
  return (
      <div className="col-2 h-100 pe-5" style={{overflow:"auto"}}>
        <div className="row h-100 bg-light rounded-4 pt-5">
  <ul type="none">
    <li>
        <Link to={'/pdash'} className='nav-link bg-white py-2 ps-3 rounded-start my-2'>Dashboard</Link>
      
    </li>

  </ul>

        </div>
    </div>
  )
}

export default Psidenav
