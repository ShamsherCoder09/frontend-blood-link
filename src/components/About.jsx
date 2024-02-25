import { useState } from 'react';
import axios from 'axios';

function About() {
  const [arr,setArr] = useState([]);
  axios.get('/api/array')
  .then((res) => setArr(res.data))

  return (
    <div>
       {
        arr.map((item) => (
          <div key={item.id}>
            <div>
              {item.name}
            </div>
          </div>

        ))
      }
    </div>
  )
}

export default About
