<script lang="ts">

	let fetchUserLocationCountry = async () => {

		const userLocationDataPromise = await fetch('http://ip-api.com/json')
		const userLocationData = await userLocationDataPromise.json()

		if (userLocationDataPromise.ok) return userLocationData
		else throw new Error(userLocationData)
	}

	let fetchCountries = async () => {		
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

	let countryData = fetchCountries();
	let currentLocationData = fetchUserLocationCountry();
</script>

<style lang="postcss">
	form {
		text-align: left;
		display: flex;
		flex-flow: column wrap;
	}

	input {
		/* display: block; */
	}

	span:first-child {
		font-size: 1.2rem;
	}
</style>

<span>Let's get started</span>
<form action="">	
	<label for="countryResidence">Country of residence</label>
	<select name="country" id="countryResidence">
		{#await countryData}

			<option value="">fetching list of countries...</option>

		{:then countries}
			{#await currentLocationData}

				<option value="">fetching current location...</option>

			{:then location}
				<option value="" disabled>Select country...</option>
				{#each countries as country}
					<option value="{country}" selected={location.country==country}>{country}</option>
				{/each}

			{/await}
		{/await}

	</select>

	<label for="email">Email</label>
	<input type="email" name="email" id="email">

	<label for="password">Create your password</label>
	<input type="password" name="password" id="password">

	
	<input 
	type="password" 
	name="passwordConfirmation" 
	placeholder="Re-enter Password" 
	aria-label="passwordConfirmation" 
	id="passwordConfirmation">

	<input type="checkbox" aria-labelledby="tac">
	<span id="tac">I agree with the <a href="javascript:void(0);">Terms &amp; Conditions</a></span>

	<input type="submit" value="Signup">
</form>
<a href="javascript:void(0);">Log In</a>
<a href="javascript:void(0);">Customer Support</a>