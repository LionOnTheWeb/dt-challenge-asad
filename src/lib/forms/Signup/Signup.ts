export const fetchLocation = async () => {

	const userLocationDataPromise = await fetch('http://ip-api.com/json')
	const userLocationData = await userLocationDataPromise.json()

	if (userLocationDataPromise.ok) return userLocationData
	else throw new Error(userLocationData)
}

export const fetchCountries = async () => {

	const countryDataPromise = await fetch('https://restcountries.com/v3.1/all')
	const countryData = await countryDataPromise.json()

	if (countryDataPromise.ok) {

		let countryList = [];
		
		countryData.forEach((item: { name: { common: any; } }) => {
			countryList.push(item?.name?.common)
		});

		countryList.join()
		countryList.sort()

		return countryList
	}
	else throw new Error(countryData)
}