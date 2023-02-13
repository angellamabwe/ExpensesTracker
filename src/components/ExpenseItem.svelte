<script>
	import Card from './Card.svelte';
	import { createEventDispatcher } from 'svelte';
	export let item;
	const dispatch = createEventDispatcher();
	const deleteExp = async () => {
		dispatch('delete-expense', item);
	};
</script>

<Card>
	<button class="close" on:click={() => deleteExp(item)}>X</button>
	<p class="text-display">
		Item: {item.title}
	</p>
	<p class="text-display">
		Description: {item.description}
	</p>
	<p class="text-display">
		Costs: R{item.amount}
	</p>
	<p class="text-display">
		Date added: {item.date.split('2023')[0] || new Date().toJSON().slice(0, 10)}
	</p>
</Card>

<style>
	.close {
		position: absolute;
		top: 10px;
		right: 20px;
		cursor: pointer;
		background: none;
		border: none;
	}
</style>
