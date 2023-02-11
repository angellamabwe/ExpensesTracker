<script>
	import { ExpenseStore } from '../stores';
	import ExpenseList from '../components/ExpenseList.svelte';
	import ExpenseStats from '../components/ExpenseStats.svelte';
	import AddExpense from '../components/AddExpense.svelte';
	export let data;

	// console.log('data', data);
	// console.log('dataExpenses', data.expenses);

	// ExpenseStore.update((currentFeedback) => {
	// 	return [...currentFeedback, ...data.expenses];
	// });

	ExpenseStore.update(() => {
		return [...data.expenses];
	});

	// ExpenseStore.set((currentFeedback) => {
	// 	return [...currentFeedback, ...data.expenses];
	// });
</script>

<main class="container">
	<ExpenseStats />
	<AddExpense />
	<ExpenseList />
</main>

<div />

<style>
	@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	:root {
		font-family: 'Poppins', sans-serif;
		background-color: dodgerblue;
		line-height: 1.6;
		color: #fff;
	}

	ul {
		list-style: none;
	}

	.container {
		max-width: 768px;
		margin: 100px auto;
		padding: 0 20px;
	}
</style>
