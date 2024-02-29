import React from 'react'
import { Input, Button,GoBackBtn  } from '../components/globalComponents/index'
import { Link } from 'react-router-dom'
function Login() {
  return (
    <div>
       <div className='px-12 py-12'>
            <GoBackBtn/>
            <div className='flex flex-col w-full justify-center items-center'>
            <div className='text-2xl text-center'> <span className='font-bold text-red-500'>BloodLink</span> Login Here !</div>
            <form action="" className='mt-12 gap-4 flex flex-col' >
                <Input label={`Email`} className='w-96' placeholder={`Enter Mail Id`} type='email' required={true} />
                <Input label={`Password`} className='w-96' placeholder={`Enter Password`} type='password' required={true} />
                <Button  value={'Login'} parentClassName='text-center' className='mt-4 w-64 rounded-xl'  />
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
