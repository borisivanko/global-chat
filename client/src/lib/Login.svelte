<script>
	import { useNavigate } from 'svelte-navigator';

	export let name;

	const navigate = useNavigate();

	let nameInput = '';

	const handleLogin = () => {
		if (nameInput.length >= 10) {
			alert('Zadajte meno kratšie ako 10 znakov');
			return;
		}

		if (nameInput) {
			name = nameInput;
			navigate('/chat');
		} else {
			alert('Zadajte meno');
		}
	};
</script>

<main class="login-screen">
	<form on:submit|preventDefault={handleLogin} class="login">
		<div class="form-control">
			<label for="name">Meno:</label>
			<input bind:value={nameInput} type="text" id="name" />
		</div>

		<button type="submit" class="btn btn-join">Pripojiť sa</button>
	</form>
</main>

<style>
	.login-screen {
		width: 100%;
		height: 100vh;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	.form-control {
		display: flex;
		margin: 1rem 0;
		align-items: center;
	}

	.form-control input {
		flex-grow: 1;
		margin-left: 1rem;
		  padding: 0.5rem;
	}

	.btn-join {
		width: 100%;
	}

	.login {
		max-width: 420px;
		width: 100%;
	}
</style>
