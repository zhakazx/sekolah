import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../../features/auth/authSlice';
import { useLoginMutation } from '../../features/auth/authApi';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userRef = useRef();
  const passwordRef = useRef();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const [login, { isLoading }] = useLoginMutation();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setError('');
  }, [username, password]);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const data = await login({ username, password }).unwrap();
      console.log('dataUser : ',data);
      dispatch(setCredentials({ ...data, user }));
      setUsername('');
      setPassword('');
      navigate('/dashboard');
    } catch (err) {
      if(!err?.response) {
        setError('No server response')
      } else if (err.response?.status === 401) {
        setError('Unauthorized');
      } else {
        setError('Invalid username or password');
      }
      errRef.current.focus();
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200">
        <div className="card w-96 shadow-2xl bg-base-100">
         {error && (
          <div className="alert alert-error shadow-lg">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current text-white flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span className="text-white">{error}</span>
            </div>
          </div>
         )}
          <div className="card-body">
            <div className="flex justify-center">
              <h2 className="card-title text-3xl">Masuk</h2>
            </div>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label htmlFor="username" className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  type="text"
                  id="username"
                  ref={userRef}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Masukkan username Anda"
                  className="input input-bordered" />
              </div>
              <div className="form-control">
                <label htmlFor="password" className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  id="password"
                  ref={passwordRef}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Masukkan password Anda"
                  className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Lupa password?</a>
                </label>
              </div>
            </form>
            <div className="form-control mt-6">
              <button className={`btn btn-primary disabled ${isLoading ? 'disabled' : ''}`}>Masuk</button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Login