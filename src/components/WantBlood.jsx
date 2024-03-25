import React, { useEffect, useState } from 'react'
import { Button, Select } from './globalComponents/index'
import { useStates } from '../hooks/useStates'
import { useCity } from '../hooks/useCity';
import { getOrganizations } from '../api/getData';
function WantBlood() {
  const [stateData, setStateData] = useState([]);
  const [cities, setCities] = useState([]);
  const [stateCode, setStateCode] = useState("");
  const [organizations, setOrganizations] = useState([]);
  const [formData, setFormData] = useState({
    state: "",
    city: "",
  })
  useEffect(() => {
    async function fetchData() {
      const res = await getOrganizations(formData);
      if (res.response) {
        setOrganizations([]);
        return;
      }
      else {
        setOrganizations(res)
      }
    }
    fetchData();
  }, [formData])
  // console.log(organizations)
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
  const handleStateChange = (e) => {
    setFormData(prev => ({ ...prev, 'state': e.target.value }))
  }
  const handleCityChange = (e) => {
    setFormData(prev => ({ ...prev, 'city': e.target.value }))
  }
  return (
    <div>
      <div className='flex flex-col items-center mt-12 gap-8 justify-center h-[200px]'>
        <div className='text-center'>
          Manual Search
          <div className='flex gap-8'>
            <Select label={'State'} options={stateData} setStateCode={setStateCode} onChange={handleStateChange} />
            <Select label={'City'} options={cities} onChange={handleCityChange} />
          </div>
        </div>
        <div>---------Or---------</div>
        <div className='flex flex-col gap-4 items-center text-center'>
          Locate Your Nearby blood Organization
          <Button value={`Find`} />
        </div>
      </div>

      <div className='flex flex-col justify-center items-center mt-12'>
        <table>
          <thead>
            <tr>
              <th className="px-4 py-2 border border-gray-400 text-center">Organization Name</th>
              <th className="px-4 py-2 border border-gray-400 text-center">State</th>
              <th className="px-4 py-2 border border-gray-400 text-center">City</th>
              <th className="px-4 py-2 border border-gray-400 text-center">Contact</th>
              <th className="px-4 py-2 border border-gray-400 text-center">Address</th>
            </tr>
          </thead>
          <tbody>
            {organizations?.map((item) => (
              <tr key={item._id}>
                <th className="px-4 py-2 border border-gray-400 text-center">{item.fullName}</th>
                <th className="px-4 py-2 border border-gray-400 text-center">{item.state}</th>
                <th className="px-4 py-2 border border-gray-400 text-center">{item.city}</th>
                <th className="px-4 py-2 border border-gray-400 text-center">{item.contact}</th>
                <th className="px-4 py-2 border border-gray-400 text-center">{item.address}</th>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default WantBlood
