<script>
	export let messages;

	export let messagesContainer;
</script>

<div class="messages" bind:this={messagesContainer}>
	{#each messages as message}
		<div class="message">
			<span class="name" class:me={message.me}>
				{message.name}:
			</span>

			{message.message}
		</div>
	{/each}
</div>

<style>
	.messages {
		min-height: 80%;
		max-height: 80%;
		overflow-y: scroll;
	}

    .message {
        display: flex;
    }

	.name {
		color: blue;
	    min-width: 10ch;

	}
	.me {
		color: red;
	}
</style>
