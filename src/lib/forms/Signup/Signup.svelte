<h3>Let's get started</h3>

<form action="">
	<label>
		<select name="country" id="countryResidence" aria-label="Country of Residence">
			{#await fetchCountries()}
	
				<option value="">fetching list of countries...</option>
	
			{:then countries}
				{#await fetchLocation()}
	
					<option value="">fetching current location...</option>
	
				{:then location}

					<option value="" disabled>Select country...</option>
					{#each countries as country}
						<option value="{country}" selected={location.country==country}>{country}</option>
					{/each}
	
				{/await}
			{/await}
	
		</select>
		<span>Country of Residence</span>
	</label>

	<label>
		<input 
			type="email" 
			name="email" 
			id="email"
		>
		<span>Email</span>
	</label>

	<label>
		<input 
			type="password"
			name="password"
			id="password"
		>
		<span>Password</span>
	</label>

	<label for="">
		<input 
			type="password" 
			name="passwordConfirmation" 
			placeholder="Re-enter Password" 
			aria-label="passwordConfirmation" 
			id="passwordConfirmation"
		>
	</label>
	
	<label>
		<input type="checkbox" aria-label="Terms and Conditions">
		<span>I agree with the <strong>Terms &amp; Conditions</strong></span>
	</label>

	<button type="submit">Sign Up</button>
</form>

<span class="loginLink"><strong>Log In</strong></span>



<script lang="ts">
	import { fetchCountries, fetchLocation } from './Signup'

</script>

<style lang="scss">
	@use 'utils' as util;
	@use 'colors' as color;

	h3 {
		text-align: center;
	}

	form {
		text-align: left;
		display: flex;
		flex-flow: column wrap;
		padding: 1rem;
	}

	label:not(:last-of-type) {
		position: relative;
		margin-bottom: 1.5rem;

		& * {
			box-sizing: border-box;
		}

		& input, & select {
			padding: .725rem 1rem;
			width: 100%;
			font-size: 1rem;
		}

		& span {
			position: absolute;
			top: 0;
			left: 0;
			transform: translate(1rem, .725rem);
		}
	}

	// Terms and Conditions
	label:last-of-type {
		display: flex;
		flex-flow: row nowrap;

		& span {
			padding-left: 1rem;
			& strong {
				color: color.$primary;
			}
		}
	}

	.loginLink {
		color: color.$primary;
	}

	input {
		border: {
			radius: util.remConverter(5px);
			width: util.remConverter(1px);
			color: #AAA;
			style: solid;
			image: none;
		}
	}

	span:first-child {
		font-size: 1.2rem;
	}

	/* Remove webkit browser input color */
	input:-webkit-autofill,
	input:-webkit-autofill:hover, 
	input:-webkit-autofill:focus, 
	input:-webkit-autofill:active{
		-webkit-box-shadow: 0 0 0 30px white inset !important;
	}

	button[type="submit"] {
		font-size: 1.2rem;
		padding: 1rem 0;
		margin-top: 2rem;
		color: color.$white;
		background-color: color.$primary;
		border: {
			radius: util.remConverter(5px);
			width: util.remConverter(1px);
			style: solid;
			color: transparent;
		}
		
	}
</style>