// /Unarmed victims
const filterUnarmed = () => {
	const unarmedVictims = data.filter(
		(victim) => victim['Unarmed'] === 'Unarmed'
	)
	console.log('unarmedVictims: ', unarmedVictims)
}
// Filter victims by being from New York City - can be anywhere
const filterNewYork = () => {
	const newYorkVictims = data.filter((victim) => victim.City === 'New York')
	console.log('New York victims: ', newYorkVictims)
	return newYorkVictims
}
//Filter victims by being gunshot victims
const filterByGunshot = () => {
	const gunshotVictims = data.filter(
		(victim) => victim['Cause of death'] === 'Gunshot'
	)
	console.log('gunshotVictims: ', gunshotVictims)
	// data.forEach(victim => console.log(victim["Cause of death"]))
}
//Filter victims by no criminal charges
const filterByNoCriminalCharges = () => {
	const noCriminalCharges = data.filter(
		(victim) => victim['Criminal Charges?'] === 'No known charges'
	)
	console.log('noCriminalCharges: ', noCriminalCharges)
}
//Alleged weapon types
const filterByAllegedWeapons = () => {
	const allegedWeapons = data.map(
		(victim) => victim['Alleged Weapon (Source: WaPo)']
	)
	console.log('allegedWeapons: ', allegedWeapons)
}
//All African American Victims
const filterByRace = () => {
	const blackVictims = data.filter(
		(victim) => victim["Victim's race"] === 'Black'
	)
	console.log('blackVictims: ', blackVictims)
}
