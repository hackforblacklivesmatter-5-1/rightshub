import React, { Component, useState, useEffect } from 'react'

export const Statistics = () => {
	const [records, setRecords] = useState([])

	useEffect(() => {}, [])

	return (
		<div>
			<div>Here are the most pressing statistics</div>
			<div> % of the people shot in NY are black </div>
		</div>
	)
}
