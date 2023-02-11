<script>
	import { ExpenseStore } from '../stores';
	import Card from './Card.svelte';

	$: sum = $ExpenseStore.reduce((a, { amount }) => a + amount, 0);
</script>

<Card>
	<header>
		<h2>Personal Expenses for the year {new Date().toJSON().slice(0, 4)}</h2>
		<h3>Total amount: R{Math.floor(sum)}</h3>
	</header>
</Card>

<style>
	header {
		max-width: 500px;
		margin: auto;
	}

	header h2,
	h3 {
		font-size: 22px;
		font-weight: 600;
		text-align: center;
		color: #333;
		letter-spacing: 0.2px;
	}
</style>
