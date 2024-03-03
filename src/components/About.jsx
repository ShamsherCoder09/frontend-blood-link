import  CarouselDefault  from "./CarouselDefault"
// About Page treeated Like A HOMEPAGE FOR US So it Render on the / Route
function About() {


  return (
    <div>
      <section className="w-full h-[400px] md:h-[450px] bg-red-100 flex justify-center items-center text-center">
        <p className="text-red-500 font-bold text-4xl md:text-6xl">Be a Lifesaver <br /> Donate Blood, Save Lives</p>
      </section>
      <section className="mt-20 gap-8 flex items-center justify-center md:flex-row flex-col w-full">
        <p className="md:w-1/2 p-4">Welcome to BloodLink, your lifeline to a healthier community. At BloodLink, we are dedicated to revolutionizing the way blood donation works, ensuring that every drop counts in the fight against life-threatening conditions. Our platform serves as a vital link between blood donors and organizations, making it easier than ever to give and receive the gift of life.</p>
        <h2 className="md:w-1/2 flex items-center  justify-center text-center bg-red-100 text-red-500  w-full text-5xl md:text-6xl font-bold h-[250px]">
          About <br /> Us
        </h2>
      </section>
      <section className="mt-20 flex gap-8 items-center justify-center md:flex-row flex-col-reverse w-full">
        <h2 className="md:w-1/2 flex items-center justify-center text-center bg-red-100 text-red-500  w-full text-5xl md:text-6xl font-bold h-[250px] md:h-[368px]">
          Learn About <br /> Donation
        </h2>
        <table className="md:w-1/2 p-4 border-collapse border border-gray-400">
          <thead>
            <tr>
              <th className="px-4 py-2 border border-gray-400 text-center">Blood Type</th>
              <th className="px-4 py-2 border border-gray-400 text-center">Donate Blood To</th>
              <th className="px-4 py-2 border border-gray-400 text-center">Receive Blood From</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border border-gray-400 text-center">A+</td>
              <td className="px-4 py-2 border border-gray-400 text-center">A+ AB+</td>
              <td className="px-4 py-2 border border-gray-400 text-center">A+ A- O+ O-</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-400 text-center">A-</td>
              <td className="px-4 py-2 border border-gray-400 text-center">A+ A- AB+ AB-</td>
              <td className="px-4 py-2 border border-gray-400 text-center">A- O-</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-400 text-center">B+</td>
              <td className="px-4 py-2 border border-gray-400 text-center">B+ AB+</td>
              <td className="px-4 py-2 border border-gray-400 text-center">B+ B- O+ O-</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-400 text-center">B-</td>
              <td className="px-4 py-2 border border-gray-400 text-center">B+ B- AB+ AB-</td>
              <td className="px-4 py-2 border border-gray-400 text-center">B- O-</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-400 text-center">AB+</td>
              <td className="px-4 py-2 border border-gray-400 text-center">AB+</td>
              <td className="px-4 py-2 border border-gray-400 text-center">Everyone</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-400 text-center">AB-</td>
              <td className="px-4 py-2 border border-gray-400 text-center">AB+ AB-</td>
              <td className="px-4 py-2 border border-gray-400 text-center">AB- A- B- O-</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-400 text-center">O+</td>
              <td className="px-4 py-2 border border-gray-400 text-center">Everyone</td>
              <td className="px-4 py-2 border border-gray-400 text-center">O+ O-</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-400 text-center">O-</td>
              <td className="px-4 py-2 border border-gray-400 text-center">Everyone</td>
              <td className="px-4 py-2 border border-gray-400 text-center">O-</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="my-20">
        <h2 className="text-center font-bold text-4xl">How We Works</h2>
        <CarouselDefault />
      </section>

    </div>
  )
}

export default About
