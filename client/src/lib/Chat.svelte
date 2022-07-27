<script>
	import { useNavigate } from 'svelte-navigator';
	import Messages from './Messages.svelte';

	export let name;

	const ws = new WebSocket(`ws://${process.env.API_BASE_URL}:6408`);

	let message = '';
	let messages = [];

	let messagesContainer;

	const navigate = useNavigate();

	$: !name && navigate('/');

	const handleLogout = () => {
		name = null;
	};

	const scrollToBottom = () => {
		messagesContainer.scroll({
			top: messagesContainer.scrollHeight,
			behavior: 'smooth',
		});
	};

	const sendMessage = () => {
		if (!message) return;

		ws.send(JSON.stringify({ name, message }));
		messages = [...messages, { name, message, me: true }];
		message = '';

		scrollToBottom();
	};

	ws.onmessage = function (event) {
		messages = [...messages, JSON.parse(event.data)];

		scrollToBottom();
	};
</script>

<main class="chat-screen">
	<div class="top-panel">
		<span>{name}</span>
		<button on:click={handleLogout} class="btn">Odhlasiť</button>
	</div>

	<Messages bind:messagesContainer {messages} />

	<form on:submit|preventDefault={sendMessage} class="message-input">
		<input type="text" bind:value={message} />
		<button type="submit" class="btn" disabled={!message}>Odoslať</button>
	</form>
</main>

<style>
	.chat-screen {
		height: 100vh;
		width: 100%;
	}
	.top-panel {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		height: 10%;
	}

	.top-panel button {
		margin-left: 1rem;
	}

	.message-input {
		height: 10%;
		display: flex;
		align-items: center;
	}

	.message-input input,
	.message-input button {
		height: 30px;
	}

	.message-input input {
		flex-grow: 1;
		margin-right: 1rem;
	}
</style>
