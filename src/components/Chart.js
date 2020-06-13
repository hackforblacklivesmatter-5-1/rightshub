import React, { Component, useState, useEffect } from 'react'
// import rd3 from 'react-d3-library'
// import node from 'd3file'
// import axios from 'axios'
import { render } from '@testing-library/react'
import * as d3 from 'd3'

// var BarChart = rd3.createBarChart
// const RD3Component = rd3.Component

let data = require('../data/data.json')
console.log(data)

export class Chart extends React.Component {
	state = {
		data: data,
		yAxisAttribute: 'State',
		xAxisAttribute: '',
		width: 1000,
		height: 1000,
	}
	// chartRef = React.createRef()
	componentDidMount() {
		this.drawChart()
	}

	drawChart() {
		let margin = { top: 20, right: 30, bottom: 40, left: 90 },
			width = this.state.width - margin.left - margin.right,
			height = this.state.height - margin.top - margin.bottom
		// append the svg object to the body of the page
		let svg = d3
			.select('.rowChart')
			.append('svg')
			.attr('width', width + margin.left + margin.right)
			.attr('height', height + margin.top + margin.bottom)
			.append('g')
			.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
		// Add X axis
		let x = d3.scaleLinear().domain([0, 100]).range([0, width])
		svg
			.append('g')
			.attr('transform', 'translate(0,' + height + ')')
			.attr('class', 'axis x')
			.call(d3.axisBottom(x))
			.selectAll('text')
			.attr('transform', 'translate(-10,0)rotate(-45)')
			.style('text-anchor', 'end')
		// Add Y axis
		let y = d3
			.scaleBand()
			.range([0, height])
			.domain(this.state.data.map((d) => d[this.state.yAxisAttribute]))
			.padding(0.1)
		svg
			.append('g')
			.attr('class', 'axis y')
			.call(d3.axisLeft(y))
			.selectAll('text')
			.attr('dy', null)
		// Add Bars
		svg
			.selectAll('myRect')
			.data(this.state.data)
			.enter()
			.append('rect')
			.on('mouseover', function () {
				d3.select(this).style('opacity', 0.5)
			})
			.on('mouseout', function () {
				d3.select(this).style('opacity', 1)
			})
			.attr('x', x(0))
			.attr('y', (d) => y(d[this.state.yAxisAttribute]))
			.attr('width', 0)
			.attr('height', y.bandwidth() - 10)
			.attr('fill', '#DF337D')
			.transition(d3.transition().duration(1000))
			.attr('width', (d) => x(d[this.state.xAxisAttribute]))
	}
	render() {
		// 	console.log(this.state)
		return <div className='rowChart' ref={this.chartRef}></div>
	}
}

// export const Chart = () => {
// 	// const [records, setRecords] = useState([])

// 	useEffect(() => {
// 		// shooting incident data historic
// 		// .get("https://data.cityofnewyork.us/resource/833y-fsy8.json")
// 		// shooting incident data YTD
// 		// .get("https://data.cityofnewyork.us/resource/5ucz-vwe8.json")
// 		// Arrest data historic
// 		// .get("https://data.cityofnewyork.us/resource/8h9b-rp9u.json")
// 		// Arrest data YTD
// 		// fetch(data)
// 		// 	.then((res) => {
// 		// 		console.log(res)
// 		// 		setRecords(res.data)
// 		// 	})
// 		setRecords({ d3: node })
// 		// 	.catch((err) => {
// 		// 		console.log(err)
// 		// 	})
// 	}, [])

// 	const xScale = d3
// 		.scaleLinear()
// 		.domain(d3.extent(data.dataset, (d) => d.x))
// 		.range([data.margin, data.width])
// 	const yScale = d3
// 		.scaleLinear()
// 		.domain([0, d3.max(data.dataset, (d) => d.y)])
// 		.range([data.height, data.margin])
// 	const line = d3
// 		.line()
// 		.x((d) => xScale(d.x))
// 		.y((d) => yScale(d.y))
// 		.curve(d3.curveCatmullRom.alpha(0.7))
// 	return (
// 		<div>
// 			<svg height={data.height} width={data.width}>
// 				<line
// 					className='axis'
// 					x1={data.margin}
// 					x2={data.width}
// 					y1={data.height}
// 					y2={data.height}
// 				/>
// 				<line
// 					className='axis'
// 					x1={data.margin}
// 					x2={data.margin}
// 					y1={data.margin}
// 					y2={data.height}
// 				/>
// 				<path d={click.clicked ? line(data.dataset) : 0} />
// 			</svg>
// 		</div>
// 	)
// }
// const set = {
// 	dataset: [
// 		{ x: 0, y: 0 },
// 		{ x: 1, y: 1 },
// 		{ x: 2, y: 1 },
// 		{ x: 3, y: 2 },
// 		{ x: 4, y: 3 },
// 		{ x: 5, y: 5 },
// 		{ x: 6, y: 8 },
// 		{ x: 7, y: 13 },
// 		{ x: 8, y: 21 },
// 		{ x: 9, y: 34 },
// 		{ x: 10, y: 55 },
// 	],
// 	width: 500,
// 	height: 500,
// 	margin: 20,
// }
