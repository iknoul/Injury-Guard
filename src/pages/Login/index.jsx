import Navbar from '../../components/Navbar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css';
import { useState } from 'react';

  const Login = (props) => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const nav = useNavigate()

    const handleSubmit=async(e)=>{
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:5000/login', { userName, password });
        console.log(response.status,response.status == 200)
        if (response.status == 200) {
          console.log(props)
          props.setIsAuthenticated(true)
          nav('/home')
        }
      } catch (error) {
        console.error('Login failed', error);
        alert('Invalid credentials');
      }
  }
  return (
    <div className="main-containerL">
      <div className="hLeft">

      </div>
      <div className="hRight">
        <div className="loginBox">
          
          <label>User name</label><input onChange={(e)=>{setUserName(e.target.value)}} type="text"/>
          <label>Password</label><input onChange={(e)=>{setPassword(e.target.value)}} type="password"/>
          <button onClick={handleSubmit}>Login</button>
          
        </div>
      </div>
    </div>
  );
};

export default Login;
