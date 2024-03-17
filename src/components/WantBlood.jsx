import React, { useEffect , useState } from 'react'
import { Button, Select } from './globalComponents/index'
import { useStates } from '../hooks/useStates'
import { useCity } from '../hooks/useCity';
function WantBlood() {
  const [stateData, setStateData] = useState([]);
  const [cities, setCities] = useState([]);
  const [stateCode, setStateCode] = useState("");
  const [formData,setFormData] = useState({
    state: "",
    city: "",
  })
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
  const handleStateChange = (e) =>{
    setFormData(prev => ({...prev,'state': e.target.value}))
}
const handleCityChange = (e) =>{
    setFormData(prev => ({...prev,'city': e.target.value}))
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
            <tr>
              <td className="px-4 py-2 border border-gray-400 text-center">Aanchal Blood</td>
              <td className="px-4 py-2 border border-gray-400 text-center">Rajasthan</td>
              <td className="px-4 py-2 border border-gray-400 text-center">Jaipur</td>
              <td className="px-4 py-2 border border-gray-400 text-center">9636245087</td>
              <td className="px-4 py-2 border border-gray-400 text-center">99 Jaisingh nagar Delhi By pass road jaipur</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-400 text-center">Aanchal Blood</td>
              <td className="px-4 py-2 border border-gray-400 text-center">Rajasthan</td>
              <td className="px-4 py-2 border border-gray-400 text-center">Jaipur</td>
              <td className="px-4 py-2 border border-gray-400 text-center">9636245087</td>
              <td className="px-4 py-2 border border-gray-400 text-center">99 Jaisingh nagar Delhi By pass road jaipur</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-400 text-center">Aanchal Blood</td>
              <td className="px-4 py-2 border border-gray-400 text-center">Rajasthan</td>
              <td className="px-4 py-2 border border-gray-400 text-center">Jaipur</td>
              <td className="px-4 py-2 border border-gray-400 text-center">9636245087</td>
              <td className="px-4 py-2 border border-gray-400 text-center">99 Jaisingh nagar Delhi By pass road jaipur</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-400 text-center">Aanchal Blood</td>
              <td className="px-4 py-2 border border-gray-400 text-center">Rajasthan</td>
              <td className="px-4 py-2 border border-gray-400 text-center">Jaipur</td>
              <td className="px-4 py-2 border border-gray-400 text-center">9636245087</td>
              <td className="px-4 py-2 border border-gray-400 text-center">99 Jaisingh nagar Delhi By pass road jaipur</td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default WantBlood
