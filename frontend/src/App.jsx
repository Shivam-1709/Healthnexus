import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter ,Route , Routes} from 'react-router-dom'
import Adlogin from './Pages/Adlogin'
import Admindash from './Admin/Admindash';
import Addoc from './Admin/Addoc';
import Adpatient from './Admin/Adpatient';
import Viewdoc from './Admin/Viewdoc';
import Viewpatient from './Admin/Viewpatient';
import Viewfeed from './Admin/Viewfeed';
import Viewenquiry from './Admin/Viewenquiry';
import Adnews from './Admin/Adnews';
import Viewapp from './Admin/Viewapp';
import Reg from './Pages/Reg';
import Login from './Pages/Login'
import Pdash from './Patient/Pdash'
import Ddash from './Doctor/Ddash'
function App() {
  return (
    <>
      <div className="container-fluid">
        <BrowserRouter>
        <Routes>
           <Route path='/pdash' element={<Pdash />} />
          <Route path='/ddash' element={<Ddash />} />
          
          <Route path='/admin' element={<Adlogin />} />
          <Route path='/admindash' element={<Admindash />} />
          <Route path='/addoc' element={<Addoc />} />
          <Route path='/adpatient' element={<Adpatient />} />
          <Route path='/viewdoc' element={<Viewdoc />} />
          <Route path='/viewpatient' element={<Viewpatient />} />
          <Route path='/viewfeed' element={<Viewfeed />} />
          <Route path='/viewapp' element={<Viewapp />} />
          <Route path='/viewenquiry' element={<Viewenquiry />} />
          <Route path='/adnews' element={<Adnews />} />
          <Route path='/reg' element={<Reg />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        </BrowserRouter>
      </div>

    </>
  )
}

export default App
