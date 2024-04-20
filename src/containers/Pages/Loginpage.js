import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  {loginRequest} from '../../redux/reducers/LoginSlice'
import { Link } from 'react-router-dom';

const Loginpage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.auth.isLoading);
  const error = useSelector(state => state.auth.error);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loginRequest(formData));
    alert('login successfully')
  };

  return (
    <div className="d-flex justify-content-center">
      <form onSubmit={handleSubmit} className="mt-4">
       
        <div className="mb-3">
          <input type="email" name="email" className="form-control" placeholder="Email" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <input type="password" name="password" className="form-control" placeholder="Password" onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary" disabled={isLoading}>Sign in</button>
        {error && <p className="text-danger mt-2">{error}</p>}
         
      <p style={{color:"black", marginTop: "20px"}}>Do not have an account?<Link to="/signup"> <b style={{color:"blue"}}>Sign up</b></Link> </p>
       
      </form>
     
    </div>
  );
};

export default Loginpage;
