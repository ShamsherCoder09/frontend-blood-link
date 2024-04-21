import React from 'react'
import { Button, Input } from './globalComponents'
import { updateAvailable } from '../api/getData';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
function SetAvailable() {
    const navigate = useNavigate()
    const user = localStorage.getItem('user')
    const currentUser = JSON.parse(user)
    const [formData, setFormData] = useState({
        "organizationName": currentUser?.fullName,
        "A+": "",
        "AB+": "",
        "AB-": "",
        "B+": "",
        "O+": "",
        "O-": ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await updateAvailable(formData)
        if(res?.message){
            toast.success(res?.message);
        }
        if(res?.data){
            localStorage.setItem('availableBlood',JSON.stringify(res?.data))
            navigate('/')
        }
        console.log(res)
        return;
    }
    return (
        <div>
            <div className='flex mt-12 flex-col w-full justify-center items-center'>
                <div className='text-2xl text-center'> <span className='font-bold text-red-500'>BloodLink</span> Set the Availabilty of Blood of your Organization</div>
                <form action="" className='mt-12 gap-4 flex flex-col' >
                    <Input name="A+" onChange={handleInputChange} label={`Enter A+`} className='w-96' placeholder={`Enter A+`} type='text' required={true} />
                    <Input name="B+" onChange={handleInputChange} label={`Enter B+`} className='w-96' placeholder={`Enter B+`} type='text' required={true} />
                    <Input name="AB+" onChange={handleInputChange} label={`Enter AB+`} className='w-96' placeholder={`Enter AB+`} type='text' required={true} />
                    <Input name="AB-" onChange={handleInputChange} label={`Enter AB-`} className='w-96' placeholder={`Enter AB-`} type='text' required={true} />
                    <Input name="O+" onChange={handleInputChange} label={`Enter O+`} className='w-96' placeholder={`Enter O+`} type='text' required={true} />
                    <Input name="O-" onChange={handleInputChange} label={`Enter O-`} className='w-96' placeholder={`Enter O-`} type='text' required={true} />
                    <Button onClick={handleSubmit} value={'Set'} parentClassName='text-center' className='mt-4 w-64 rounded-xl' />
                </form>
            </div>
        </div>
    )
}

export default SetAvailable
