import React from 'react'
import { useState } from 'react'
import JSON from './details.json'

const App = () => {
  let [datas, Setdata] = useState(JSON)
  console.log(datas.first_name);
  return (
    <div>

      {datas.map((data, index) => (
        <div>

          {/* <p>{data.first_name}</p>
          <p>{data.last_name}</p>
          <p>{data.age}</p>
          <p>{data.address.street_address}</p>
          <p>{data.address.city}</p> */}

          <table>
            <tbody>
              <div className='header'>
                <th>FirstName</th>
                <th>Lastname</th>
              </div>
              <tr>
                <td>{data.first_name}</td>
                <td>{data.last_name}</td>
              </tr>
            </tbody>
          </table>
        </div>

      ))
      }
    </div>
  )
}

export default App