<script lang="ts">
	import FormField from '@smui/form-field'
	import Checkbox from '@smui/checkbox'
	import Select, { Option } from '@smui/select'
  	import SelectIcon from '@smui/select/icon'
	import Textfield from '@smui/textfield'
	import Icon from '@smui/textfield/icon';
  	import HelperText from '@smui/textfield/helper-text';

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

	$: fetchUserLocationCountry().then((locationRes) => {
		// if (locationRes.country == res[`${locationRes.country}`]) countryV = locationRes.country
		countryV = locationRes.country
	})
	
	const showPassword = (e) => {
		e.target.previousElementSibling.type === 'password' 
		? e.target.previousElementSibling.type = 'text' 
		: e.target.previousElementSibling.type = 'password';
	}

	let countryData = fetchCountries();
	let currentLocationData = fetchUserLocationCountry();
	let checked = false;
	let email = '';
	let password = '';
	let confirmPassword = '';
	let countryV;

	console.log(countryV);
</script>

<style lang="postcss">
	h3 {
		margin-top: 20vh;
		margin-bottom: 4vh;
		font-size: 1.2rem;
	}

	div {
		margin-bottom: 2rem;
	}

	form {
		text-align: left;
		display: flex;
		flex-flow: column wrap;
		position: relative;
		color: #1a1a1a;
		margin: 0 auto;
	}

	/* label { 
		position: relative;
		display: flex;
		
		&:last-of-type {
			align-items: start;
		}
	}
	
	
	input, select {
		padding: .5rem;
		display: block;	
		flex: 1 1 100%;
		margin-bottom: 2rem;
		background-color: white;
		border: .1rem solid #757575;
		border-radius: 5px;
	}
	
	input:not([type="checkbox"]):focus + span,
	input:not([type="checkbox"]):valid + span,
	select + span {
		font-size: .725rem;
		top: -.75rem;
		background-color: white;
	}

	input:not(:focus):not(:valid) {
		color: transparent;
	}
	
	input[type="checkbox"] {
		position: relative;
		flex: 0 1 auto;
		top: .4rem;
	} */

	input[type="submit"] {
		color: white;
		background-color: var(--primary-color);
		font-weight: bolder;
		padding: .725rem 0;
		font-size: 1rem;
		&:hover {
			background-color: var(--primary-color-light);
		}
	}

	/* span {
		position: absolute;		
		top: .6rem;
		left: .5rem;
		padding: 0 .725rem;
		transition: all 0.3s;
		line-height: 1rem;
	}

	#tac {
		position: relative;
		flex: 1 1 auto;
		background-color: transparent;
	} */

	a {
		color: var(--primary-color);
		&:hover {
			color: var(--primary-color-light);
		}

		strong {
			font-weight: bolder;
		}
	}
</style>


<h3>Let's get started</h3>
<form action="">
	<div>		
		<Select 
			variant="outlined" 
			key={(countryV) => `${(countryV) || ''}`}
			bind:value={countryV} 
			label="Country of residence"
			>
			{#await countryData}
				<!-- <Option value="">fetching list of countries...</Option>	 -->
				{:then countries}
					{#await currentLocationData}
					...loading
					{:then location}
						{#each countries as country}
								<Option value="{country}" selected={location?.country==country}>{country}</Option>
						{/each}
					{/await}
			{/await}
		</Select>
	</div>

	<div>
		<Textfield 
			variant="outlined" 
			bind:value={email} 
			label="Email" 
			type="email" 
			updateInvalid
			required 
			input$autocomplete="email"
		>
			<HelperText validationMsg slot="helper">
				That's not a valid email address.
			</HelperText>
		</Textfield>
	</div>

	<div>
		<Textfield 
			variant="outlined" 
			bind:value={password} 
			label="Create your password" 
			type="password" 
			required
		>
		<svelte:fragment slot="trailingIcon">
			<Icon class="material-icons" role="button" on:click={showPassword}>visibility</Icon>
		</svelte:fragment>
		</Textfield>
	</div>

	<div>
		<Textfield 
			variant="outlined" 
			bind:value={confirmPassword} 
			placeholder="Re-enter password" 
			type="password" 
			required
		>
		<svelte:fragment slot="trailingIcon">
			<Icon class="material-icons" role="button" on:click={showPassword}>visibility</Icon>
		</svelte:fragment>
		</Textfield>
	</div>
</form>

<a href="javascript:void(0);"><strong>Log In</strong></a>