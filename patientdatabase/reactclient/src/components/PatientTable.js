import React from 'react'

const PatientTable = () => (
  <table>
    <thead>
      <tr>
        <th>PESEL</th>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Sex</th>
        <th>Family Doctor</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>PESEL data</td>
        <td>Firstname data</td>
        <td>Lastname data</td>
        <td>Sex data</td>
        <td>Family Doctor data</td>
        <td>
          <button className="button muted-button">Edit</button>
          <button className="button muted-button">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
)

export default PatientTable