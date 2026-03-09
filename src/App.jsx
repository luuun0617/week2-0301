import { useState } from 'react'
import axios from 'axios';

import "./assets/style.css";

const API_BASE = import.meta.env.VITE_API_BASE;
const API_PATH = import.meta.env.VITE_API_PATH;





function App() {
  const [data,setData] = useState({
    username :'',
    password :'',
  })
  
  async function login(){
    console.log('login');
  }

  function eventHandler(e){
    const {value,name} =e.target;
    console.log(value,name);
     setData({
     ...data,
     [name] : value
   })
  }

  return (
    <>
      <div className="container login">
        <div className="row justify-content-center">
          <h1 className="h3 mb-3 font-weight-normal">請先登入</h1>
          <div className="col-8">
            <form id="form" className="form-signin">
              <div className="form-floating mb-3">
                <input type="email" className="form-control" 
                  name='username' placeholder="name@example.com" onChange={(e)=>{ eventHandler(e)
                }} />
                <label htmlFor="username">Email address</label>
              </div>
              <div className="form-floating">
                <input type="password" className="form-control" 
                  name='password' placeholder="Password"  onChange={(e)=>{ eventHandler(e)
                  }}  />
                <label htmlFor="password">Password</label>
              </div>
              <button type='submit' id='login' className='btn btn-primary w-100 mt-3' onClick={()=>login()}>登入</button>

            </form>

          </div>
        </div>
        
        
      </div>

    </>
  )
}

export default App
