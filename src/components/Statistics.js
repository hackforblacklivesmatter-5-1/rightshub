import React, { Component } from 'react'

export const Statistics = () => {
	const [records, setRecords] = useState([])

	useEffect(() => {
			.get('https://data.cityofnewyork.us/resource/uip8-fykc.json')
			.then((res) => {
				// console.log(res.data)
				setRecords(res.data)
			})
			.catch((err) => {
				// console.log(err)
			})
	}, [])

	return (
		<div>
			<div>Here are what are the most pressing things today </div>
			<div></div>
		</div>
	)
}
