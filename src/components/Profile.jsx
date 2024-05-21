import React from 'react'

function Profile() {
    const user = JSON.parse(localStorage.getItem('user'))
    console.log(user)
  return (
    <div>
      <h2>{user?.role} Details</h2>
      <h2 className='text-center w-full'>My Details</h2>
      <table className='w-full'>
            {Object.entries(user)?.map((arr) => {return(<>
        <tr className='border-t-2 border-b-2 border-gray-300 '>
            <th>{arr[0]}</th>
            <td>{arr[1]}</td>
        </tr>
            </>)})}
        
      </table>
    </div>
  )
}

export default Profile
