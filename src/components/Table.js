import React from 'react'
import data from '../data/data-ny.json'
import Slider from '@material-ui/core/Slider'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

export const Table = () => {
	console.log(data)

	const renderData = () => {
		return data.map((record, id) => {
			return (
				<tr key={id}>
					<td>{record["Victim's race"]}</td>
					<td>{record["Victim's name"]}</td>
					<td>{record['Cause of death']}</td>
					<td>{record["Victim's age"]}</td>
					<td>{record['Date of Incident (month/day/year)']}</td>
					<td>{record['Fleeing (Source: WaPo)']}</td>
					<td>{record['Alleged Weapon (Source: WaPo)']}</td>
					<td>{record['Alleged Threat Level (Source: WaPo):']}</td>
					<td>{record['Body Camera (Source: WaPo)']}</td>
				</tr>
			)
		})
	}
	// slider for year
	const useStyles = makeStyles({
		root: {
			width: 300,
		},
	})
	function valuetext(value) {
		return `${value}°C`
	}

	// filter by race
	const filterByRace = () => {
		const blackVictims = data.filter(
			(victim) => victim["Victim's race"] === 'Black'
		)
		console.log('blackVictims: ', blackVictims)
	}

	const sortByDate = () => {
		let sorted = data.sort((a, b) =>
			new Date(a['Date of Incident (month/day/year)']) <
			new Date(b['Date of Incident (month/day/year)'])
				? 1
				: -1
		)
		console.log(sorted)
	}

	const sortByAge = () => {
		let sorted = data.sort((a, b) =>
			parseInt(a["Victim's age"]) < parseInt(b["Victim's age"]) ? 1 : -1
		)
		console.log(sorted)
	}

	const sortByGun = () => {
		let sorted = data.sort((a, b) =>
			a['Cause of death'] > b['Cause of death'] ? 1 : -1
		)
		console.log(sorted)
	}

	return (
		<div className='table-component'>
			<h1 className='table-title'>Killings by Police</h1>
			<div className='yellow-line'></div>
			<div className='toggle'>
				<label onClick={() => filterByRace()}>Black Victims</label>
				<label onClick={() => sortByDate()}>Sorted Race</label>
				<label onClick={() => sortByAge()}>Sorted Age</label>
				<label onClick={() => sortByGun()}>Sorted Gun</label>
				<Typography id='discrete-slider' gutterBottom>
					Year
				</Typography>
				<Slider
					defaultValue={0}
					getAriaValueText={valuetext}
					aria-labelledby='discrete-slider'
					valueLabelDisplay='auto'
					step={6}
					marks
					min={2013}
					max={2019}
				/>
			</div>
			<div className='table-container'>
				<table className='table-content'>
					<thead>
						<tr>
							<th>Victim's Race</th>
							<th>Victim's Name</th>
							<th>Cause of Death</th>
							<th>Victim's age</th>
							<th>Date of Incident (month/day/year)</th>
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

// .map((record, id) => {
//   return (
//     // <tr key={id}>
//     //   <td>{record["Date of Incident (month/day/year)"]}</td>
//     // </tr>
//   )
// })

// Filter victims by being from New York City - can be anywhere
// const filterNewYork = () => {
//   const newYorkVictims = data.filter(victim => victim.City === 'New York')
//   console.log('New York victims: ', newYorkVictims)
//   return newYorkVictims

// };

// const filterByGunshot = () => {
//   const gunshotVictims = data.filter(victim => victim["Cause of death"] === "Gunshot")
//   console.log('gunshotVictims: ', gunshotVictims)
//   // data.forEach(victim => console.log(victim["Cause of death"]))
// };

// const filterByNoCriminalCharges = () => {
//   const noCriminalCharges = data.filter(victim => victim["Criminal Charges?"] === "No known charges")
//   console.log('noCriminalCharges: ', noCriminalCharges)
// };

// const filterByAllegedWeapons = () => {
//   const allegedWeapons = data.map(victim => victim["Alleged Weapon (Source: WaPo)"])
//   console.log('allegedWeapons: ', allegedWeapons);
// };
