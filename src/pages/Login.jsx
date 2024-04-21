import React,{useState,useEffect} from 'react'
import { Input, Button,GoBackBtn  } from '../components/globalComponents/index'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import { loginMutation } from '../api/Auth';
function Login() {
  const isAuthenticated = localStorage.getItem('user')
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
});
const handleInputChange = (e) => {
  setFormData(prev => ({...prev,[e.target.name]: e.target.value}))
}
const handleSubmit = async (e) =>{
  e.preventDefault()
  const res = await loginMutation(formData);
  if(res?.data?.message){
    toast.success(res?.data?.message)
  }
  if(res?.data?.user){
    localStorage.setItem('user',res?.data?.user);
  }
  navigate('/')
}
useEffect(() => {
  if (isAuthenticated) {
      navigate('/');
  }
}, [isAuthenticated, navigate]);
  return (
    <div>
       <div className='px-12 py-12'>
            <GoBackBtn/>
            <div className='flex flex-col w-full justify-center items-center'>
            <div className='text-2xl text-center'> <span className='font-bold text-red-500'>BloodLink</span> Login Here !</div>
            <form action="" className='mt-12 gap-4 flex flex-col' >
                <Input name="email" onChange={handleInputChange} label={`Email`} className='w-96' placeholder={`Enter Mail Id`} type='email' required={true} />
                <Input name="password" onChange={handleInputChange} label={`Password`} className='w-96' placeholder={`Enter Password`} type='password' required={true} />
                <Button onClick={handleSubmit} value={'Login'} parentClassName='text-center' className='mt-4 w-64 rounded-xl'  />
            </form>
            <div className='py-8 flex gap-24 '>
                <Link to="#" className='text-red-500 text-sm'>Forgot Password?</Link>
                <Link to="/signup" className='text-red-500 text-sm'>Not have an Account?</Link>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Login
