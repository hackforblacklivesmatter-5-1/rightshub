import React, { Component } from 'react'

export const Statistics = () => {
	const [records, setRecords] = useState([])

	useEffect(() => {
		axios
			// shooting incident data historic
			// .get("https://data.cityofnewyork.us/resource/833y-fsy8.json")
			// shooting incident data YTD
			// .get("https://data.cityofnewyork.us/resource/5ucz-vwe8.json")
			// Arrest data historic
			// .get("https://data.cityofnewyork.us/resource/8h9b-rp9u.json")
			// Arrest data YTD
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
