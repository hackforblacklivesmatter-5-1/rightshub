import React from 'react'
import data from '../data/data-ny.json'
import { Statistics } from './Statistics'

export const Table = () => {
	console.log(data)

	const renderData = () => {
		return data.map((record, id) => {
			return (
				<tr key={id}>
					<td>{record["Victim's race"]}</td>
					<td>{record["Victim's name"]}</td>
					<td>{record['Cause of death']}</td>
					<td>{record['Criminal Charges?']}</td>
					<td>{record['Fleeing (Source: WaPo)']}</td>
					<td>{record['Alleged Weapon (Source: WaPo)']}</td>
					<td>{record['Alleged Threat Level (Source: WaPo):']}</td>
					<td>{record['Body Camera (Source: WaPo)']}</td>
				</tr>
			)
		})
	}

	return (
		<div className='table-component'>
			<h1 className='table-title'>Shooting Incidents</h1>
			<div className='yellow-line'></div>
			<Statistics />
			<div className='table-container'>
				<table className='table-content'>
					<thead>
						<tr>
							<th>Victim's Race</th>
							<th>Victim's Name</th>
							<th>Cause of Death</th>
							<th>Criminal Charges</th>
							<th>Fleeing</th>
							<th>Alleged Weapon</th>
							<th>Alleged Threat Level</th>
							<th>Body Camera</th>
						</tr>
					</thead>
					<tbody>
						{renderData()}
						{/* {sortByRace()} */}
						{/* {sortByName()} */}
					</tbody>
				</table>
			</div>
		</div>
	)
}

// const sortByRace = () => {
//   return data
//     .sort((a, b) => (a["Victim's race"] > b["Victim's race"] ? 1 : -1))
//     .map((record, id) => {
//       return (
//         <tr key={id}>
//           <td>{record["Victim's race"]}</td>
//         </tr>
//       )
//     })
// }
// const sortByName = () => {
//   return data
//     .sort((a, b) => (a["Victim's name"] > b["Victim's name"] ? 1 : -1))
//     .map((record, id) => {
//       return (
//         <tr key={id}>
//           <td>{record["Victim's name"]}</td>
//         </tr>
//       )
//     })
// }
