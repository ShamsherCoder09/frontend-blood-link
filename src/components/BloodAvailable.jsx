import React, { useEffect, useState } from 'react'
import Card from './Card'
import { getAvailableBlood } from '../api/getData'
import { useParams } from 'react-router-dom'
import { GoBackBtn } from './globalComponents'
function BloodAvailable() {
  const {organizationName} = useParams()
  const [availableBloodData,setAvailableBloodData] = useState({})
  useEffect(() => {
    const fetchData = async () => {
        if(organizationName.length > 1){
          const res = await getAvailableBlood(organizationName);
          if(res?.data){
            setAvailableBloodData(res?.data)
          }
        }
      
    };
    fetchData();
  }, [organizationName]);
  return (
    <div>

      <GoBackBtn/>
    <div className="mt-12 flex flex-col gap-10 w-full items-center justify-center">
      <div className='text-3xl text-red-500 font-bold'>Our Blood Availability</div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
      <Card
        title={`A+`}
        description={`Each unit of A+ blood contains approximately 450 milliliters (mL) of blood.`}
        availability={availableBloodData["A+"]}
        />
      <Card
        title={`AB+`}
        description={`Each unit of AB+ blood contains approximately 450 milliliters (mL) of blood.`}
        availability={availableBloodData["AB+"]}
        />
      <Card
        title={`AB-`}
        description={`Each unit of AB- blood contains approximately 450 milliliters (mL) of blood.`}
        availability={availableBloodData["AB-"]}
        />
      <Card
        title={`B+`}
        description={`Each unit of B+ blood contains approximately 450 milliliters (mL) of blood.`}
        availability={availableBloodData["B+"]}
        />
      <Card
        title={`O+`}
        description={`Each unit of O+ blood contains approximately 450 milliliters (mL) of blood.`}
        availability={availableBloodData["O+"]}
        />
      <Card
        title={`O-`}
        description={`Each unit of O- blood contains approximately 450 milliliters (mL) of blood.`}
        availability={availableBloodData["O-"]}
        />
    </div>

  </div>
        </div>
  )
}

export default BloodAvailable
