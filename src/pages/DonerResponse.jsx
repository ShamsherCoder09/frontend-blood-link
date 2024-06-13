import React, { useState, useEffect } from "react";
import { getAllForms } from "../api/submitForm";
function DonerResponse() {
  const [donerDetails, setDonerDetails] = useState([]);
  useEffect(() => {
    const getAllFormsFunc = async () => {
      try {
        const data = await getAllForms();
        const details = data?.map((elem) => elem?.donerDetails);
        setDonerDetails(details);
      } catch (error) {
        console.error("Error fetching forms:", error);
      }
    };

    getAllFormsFunc(); // Call the function inside useEffect
  }, []);

  return (
    <div>
      <div className="text-center mt-12">
        <h3 className="text-2xl">Doner Lists</h3>
        <p>
          This Page contains the List of Doners who want to Donate in Our
          organization
        </p>
      </div>
      <section className="container">
        <div className="flex flex-col justify-center items-center mt-12">
          <table>
            <thead>
              <tr>
                {donerDetails?.length > 0 &&
                  Object.keys(donerDetails[0])?.map((key, index) => (
                    <th
                      className="capitalize px-4 py-2 border border-gray-400 text-center"
                      key={index}
                    >
                      {key}
                    </th>
                  ))}
              </tr>
            </thead>
            <tbody>
              {donerDetails &&
                donerDetails.map((doner, index) => (
                  <tr key={index}>
                    {Object.values(doner)?.map((value, innerIndex) => (
                      <td className="capitalize px-4 py-2 border border-gray-400 text-center" key={innerIndex}>{value}</td>
                    ))}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default DonerResponse;
