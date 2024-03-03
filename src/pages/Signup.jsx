import React, { useEffect, useState } from 'react'
import { Input, Select, Button, GoBackBtn } from '../components/globalComponents/index'
import { useStates } from '../hooks/useStates'
import { useCity } from '../hooks/useCity';

function Signup() {
    const [stateData, setStateData] = useState([]);
    const [cities,setCities] = useState([]);
    const [stateCode, setStateCode] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            const states = await useStates();
            setStateData(states);
        };
        fetchData();
    }, []);
    useEffect(() => {
            if(stateCode){
            useCity(stateCode)
            .then(cities =>  setCities(cities))
            }
        
    }, [stateCode]);
    return (
        <div className='px-12 py-12'>
            <GoBackBtn />
            <div className='text-2xl text-center'> <span className='font-bold text-red-500'>Join Us in Saving Lives</span> Sign Up Today!</div>

            <form action="" className='grid md:grid-cols-3 sm:grid-cols-2 place-items-center mt-12 gap-12' >
                <Input label={`Full Name`} placeholder={`Enter Your Name`} required={true} />
                <Select label={`Role`} placeholder={`Select Role`} 
                options={[{id: 1,name: "Doner"},{id: 2,name: "Organization"}]}
                />
                <Input label={`Email`} placeholder={`Enter Mail Id`} type='email' required={true} />
                <Input label={`Password`} placeholder={`Enter Password`} type='password' required={true} />
                <Input label={`Confirm Password`} placeholder={`Re-Enter Password`} type='password' required={true} />
                <Input label={`Contact`} placeholder={`Enter Contact`} required={true} maxLength={10} />
                <Input label={`Address`} placeholder={`Enter Address`} required={true} />
                <Input label={`Aadhar`} placeholder={`Enter Aadhar`} maxLength={12} />
                <Select label={`State`} placeholder={`Select State`} type='dropdown'
                    required={true}
                    options={stateData}
                    setStateCode={setStateCode}
                />
                <Select label={`City`} placeholder={`Select City`} type='dropdown' required={true} 
                options={cities}
                />
                <Input label={`PinCode`} placeholder={`Enter PinCode`} required={true} />
            </form>
            <Button value={'Create One'} parentClassName='text-center mt-12' />
        </div>
    )
}

export default Signup
