<script>
	import { ExpenseStore } from '../stores';
	import Card from './Card.svelte';
	export let item;

	const handleDelete = (itemId) => {
		console.log('Deleteing', itemId);
		ExpenseStore.update((currentExpense) => {
			return currentExpense.filter((item) => item.id != itemId);
		});
	};
</script>

<Card>
	<button class="close" on:click={() => handleDelete(item.id)}>X</button>
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
