import React from 'react'
import { Button } from './globalComponents'
import { submitForm } from '../api/submitForm';

function FormModal({organizationId,setShowForm}) {
    const user = JSON.parse(localStorage.getItem('user'));
    const sendFormdata = async () => {
        const res = await submitForm(user,organizationId)
        setShowForm(false)
    }
  return (
    <div className='w-full flex justify-center items-center h-full absolute'>
      <div className="container h-96 w-96 shadow-lg flex bg-white justify-between">
        <Button onClick={sendFormdata} value={'Submit Form'}>Submit Form</Button>
        <span className='h-4 w-4 text-red-500 p-4 cursor-pointer' onClick={() => setShowForm(false)}>X</span>
      </div>
    </div>
  )
}

export default FormModal
