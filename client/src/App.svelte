<script>
	import { Route, Router } from 'svelte-navigator';
	import Login from './lib/Login.svelte';
	import Chat from './lib/Chat.svelte';

	let name = null;
</script>

<div class="container">
	<Router>
		<Route path="/">
			<Login bind:name />
		</Route>

		<Route path="/chat">
			<Chat bind:name />
		</Route>
	</Router>
</div>
