import React from "react";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(Object.entries(user))
  return (
    <div>
  
      <h2 className="text-center text-2xl my-8 w-full">My Details</h2>
      <table className="w-full">
        {Object.entries(user)?.map((arr) => {
          return (
            <>
              <tr className="border-t-2 my-2 border-b-2 capitalize border-gray-300 ">
                {arr[0] !== '_id' && arr[0] !== '__v' && arr[0] !== 'createdAt' && arr[0] !== 'updatedAt' && 
                <>
                <th>{arr[0]}</th>
                <td>{arr[1]}</td>
                </>
              }
              </tr>
            </>
          );
        })}
      </table>
    </div>
  );
}

export default Profile;
