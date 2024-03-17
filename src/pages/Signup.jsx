import React, { useEffect, useState } from 'react'
import { Input, Select, Button, GoBackBtn } from '../components/globalComponents/index'
import { useStates } from '../hooks/useStates'
import { useCity } from '../hooks/useCity';
import { SignupMutation } from '../api/Auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const navigate = useNavigate();
    const [stateData, setStateData] = useState([]);
    const [cities, setCities] = useState([]);
    const [stateCode, setStateCode] = useState("");
    const [formData, setFormData] = useState({
        fullName: "",
        role: "",
        email: "",
        password: "",
        confirmPassword: "",
        contact: "",
        address: "",
        aadhar: "",
        state: "",
        city: "",
        pincode: ""
    });
    useEffect(() => {
        const fetchData = async () => {
            const states = await useStates();
            setStateData(states);
        };
        fetchData();
    }, []);
    useEffect(() => {
        if (stateCode) {
            useCity(stateCode)
                .then(cities => setCities(cities))
        }

    }, [stateCode]);
    const handleInputChange = (e) => {
        setFormData(prev => ({...prev,[e.target.name]: e.target.value}))
    }
    const handleStateChange = (e) =>{
        setFormData(prev => ({...prev,'state': e.target.value}))
    }
    const handleCityChange = (e) =>{
        setFormData(prev => ({...prev,'city': e.target.value}))
    }
    const handleRole = (e) => {
        setFormData(prev => ({...prev,'role': e.target.value}))
    }
    const handleSubmit = async () =>{
        // Write backend Query BY Passing the data Object
        const res = await SignupMutation(formData);
        if(res?.response?.status === 500 || res?.response?.status === 400){
            toast.error(res?.response?.data)
            return
        }
        if(res){
            toast.success(res?.data?.message)
        }
        navigate('/')

    }
    return (
        <div className='px-12 py-12'>
            <GoBackBtn />
            <div className='text-2xl text-center'> <span className='font-bold text-red-500'>Join Us in Saving Lives</span> Sign Up Today!</div>

            <form action="" className='grid md:grid-cols-3 sm:grid-cols-2 place-items-center mt-12 gap-12' >
                <Input name='fullName' onChange={handleInputChange} label={`Full Name`} placeholder={`Enter Your Name`} required={true} />
                <Select onChange={handleRole} label={`Role`} placeholder={`Select Role`}
                    options={[{ id: 1, name: "Doner" }, { id: 2, name: "Organization" }]}
                />
                <Input name='email' onChange={handleInputChange} label={`Email`} placeholder={`Enter Mail Id`} type='email' required={true} />
                <Input name='password' onChange={handleInputChange} label={`Password`} placeholder={`Enter Password`} type='password' required={true} />
                <Input name='confirmPassword' onChange={handleInputChange} label={`Confirm Password`} placeholder={`Re-Enter Password`} type='password' required={true} />
                <Input name='contact' onChange={handleInputChange} label={`Contact`} placeholder={`Enter Contact`} required={true} maxLength={10} />
                <Input name='address' onChange={handleInputChange} label={`Address`} placeholder={`Enter Address`} required={true} />
                <Input name='aadhar' onChange={handleInputChange} label={`Aadhar`} placeholder={`Enter Aadhar`} maxLength={12} />
                <Select onChange={handleStateChange} label={`State`} placeholder={`Select State`} type='dropdown'
                    required={true}
                    options={stateData}
                    setStateCode={setStateCode}
                />
                <Select onChange={handleCityChange} label={`City`} placeholder={`Select City`} type='dropdown' required={true}
                    options={cities}
                />
                <Input name='pincode' onChange={handleInputChange} label={`Pincode`} placeholder={`Enter Pincode`} required={true} />
            </form>
            <Button onClick={handleSubmit} value={'Create One'} parentClassName='text-center mt-12' />
        </div>
    )
}

export default Signup
