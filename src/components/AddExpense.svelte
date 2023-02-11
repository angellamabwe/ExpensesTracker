<script>
	import { v4 as uuidv4 } from 'uuid';
	import { ExpenseStore } from '../stores';
	import Card from './Card.svelte';
	import Button from './Button.svelte';

	let title = '';
	let description = '';
	let amount = 50;

	let titleMin = 3;
	let descMin = 5;

	let titleMsg;
	let descMsg;

	let btnDisabled = true;

	const handleTitleInp = () => {
		if (title.trim().length <= titleMin) {
			titleMsg = `Text must be at least ${titleMin} characters`;
		} else {
			titleMsg = null;
		}
	};
	const handleDescInp = () => {
		if (description.trim().length <= descMin) {
			descMsg = `Text must be at least ${descMin} characters`;
		} else {
			descMsg = null;
		}
	};
	const handleAmtInp = () => {
		if (amount.trim().length <= min) {
			message = `Text must be at least ${min} characters`;
		} else {
			message = null;
		}
	};

	const handleSubmit = () => {
		if (title.trim().length > titleMin && description.trim().length > descMin) {
			btnDisabled = false;

			const newExpense = {
				id: uuidv4(),
				title,
				description,
				amount,
				date: new Date().toJSON()
			};

			ExpenseStore.update((currentFeedback) => {
				return [newExpense, ...currentFeedback];
			});

			title = '';
			description = '';
		}
	};
</script>

<Card>
	<header>
		<h4>Add another expense.</h4>
	</header>
	<form on:submit|preventDefault={handleSubmit}>
		<label for="title">Title</label>
		<div class="input-group">
			<input
				name="title"
				type="text"
				on:input={handleTitleInp}
				bind:value={title}
				placeholder="Please enter product title"
			/>
		</div>

		<label for="desc">Description</label>
		<div class="input-group">
			<input
				name="desc"
				type="text"
				placeholder="Please enter product description"
				bind:value={description}
				on:input={handleDescInp}
			/>
		</div>
		<label for="amount">Amount</label>
		<div class="input-group">
			<input name="amount" type="number" bind:value={amount} on:input={handleAmtInp} />
		</div>

		<Button disabled={btnDisabled} type="submit">Send</Button>
		{#if titleMsg || descMsg}
			<div class="message">
				{titleMsg}
				{descMsg}
			</div>
		{/if}
	</form>
</Card>

<style>
	header {
		max-width: 400px;
		margin: auto;
	}

	header h4 {
		font-size: 22px;
		font-weight: 500;
		text-align: center;
	}

	label {
		margin: 10px auto 0px;
	}

	.input-group {
		display: flex;
		flex-direction: row;
		border: 1px solid #ccc;
		padding: 8px 10px;
		border-radius: 8px;
		margin-top: 2px;
	}

	input {
		flex-grow: 2;
		border: none;
		font-size: 16px;
	}

	input:focus {
		outline: none;
	}

	.message {
		padding-top: 10px;
		text-align: center;
		color: #562a83;
	}
</style>
