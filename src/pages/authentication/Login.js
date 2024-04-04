import React, { useState , useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { loginRequest } from '../../store/auth/login/actions'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(loginRequest({ email, password }));
    navigate('/dashboard')
  };
 

  return (
    <div className='mt-5 p-5'>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
