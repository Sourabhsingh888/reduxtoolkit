import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signupRequest } from '../../redux/reducers/SignUpSlice';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const SignUpPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.auth.isLoading);
  const error = useSelector(state => state.auth.error);

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(signupRequest(formData));
    alert("SignUp Successfully.")
  };

  // Function to show toast notification
  const showToast = (message, type) => {
    toast[type](message);
  };

  // Display toast if error occurs
  if (error) {
    showToast(error, 'error');
  }

  return (
    <div className="d-flex justify-content-center">
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-3">
          <input type="text" name="username" className="form-control" placeholder="Username" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <input type="email" name="email" className="form-control" placeholder="Email" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <input type="password" name="password" className="form-control" placeholder="Password" onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary" disabled={isLoading}>Sign up</button>
         
      <p style={{color:"black", marginTop: "20px"}}>If You have an already account <Link to="/login"><b style={{color:"blue"}}>SignIn</b></Link></p>
     
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignUpPage;
