<script>
	import ExpenseList from '../components/ExpenseList.svelte';
	import AddExpense from '../components/AddExpense.svelte';
	export let data;

	// console.log('DATA', data);
	const AddNewExpense = async (newExpense) => {
		try {
			await fetch('/api/expenses', {
				method: 'POST',
				body: JSON.stringify(newExpense)
			});
			getLatest();
		} catch (error) {
			alert('An error occurred');
		}
	};

	const handleDelete = async (item) => {
		try {
			await fetch('/api/expenses', {
				method: 'DELETE',
				body: JSON.stringify(item)
			});
			getLatest();
		} catch (err) {
			alert('An error occurred');
		}
	};

	const getLatest = async () => {
		const res = await fetch('/api/expenses');
		const jsonRes = await res.json();
		data = jsonRes;
	};
</script>

<main class="container">
	<AddExpense on:add-expense={AddNewExpense} />
	<ExpenseList expenses={data.expenses} on:delete-expense={handleDelete} />
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

	.container {
		max-width: 768px;
		margin: 100px auto;
		padding: 0 20px;
	}
</style>
