<script lang="ts">

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
	<label for="countryOfResidence">Country of residence</label>
	<input name="countryOfResidence" type="location">

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