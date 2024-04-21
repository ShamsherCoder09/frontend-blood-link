import React from 'react'
import Card from './Card'

function BloodAvailable() {
  return (
    <div className="mt-12 flex flex-col gap-10 w-full items-center justify-center">
      <div className='text-3xl text-red-500 font-bold'>Our Blood Availability</div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
       <Card
        title={`A+`}
        description={`Each unit of A+ blood contains approximately 450 milliliters (mL) of blood.`}
        availability={320}
      />
      <Card
        title={`B+`}
        description={`Each unit of B+ blood contains approximately 450 milliliters (mL) of blood.`}
        availability={250}
        />
      <Card
        title={`AB+`}
        description={`Each unit of AB+ blood contains approximately 450 milliliters (mL) of blood.`}
        availability={120}
        />
      <Card
        title={`AB-`}
        description={`Each unit of AB- blood contains approximately 450 milliliters (mL) of blood.`}
        availability={80}
        />
      <Card
        title={`O+`}
        description={`Each unit of O+ blood contains approximately 450 milliliters (mL) of blood.`}
        availability={250}
        />
      <Card
        title={`O-`}
        description={`Each unit of O- blood contains approximately 450 milliliters (mL) of blood.`}
        availability={180}
        />
    </div>

  </div>
  )
}

export default BloodAvailable
