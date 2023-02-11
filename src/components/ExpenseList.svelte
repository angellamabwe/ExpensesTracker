<script>
	import { fade, scale } from 'svelte/transition';
	import { ExpenseStore } from '../stores';
	import ExpenseItem from './ExpenseItem.svelte';
</script>

<main>
	<!-- <h3>expense list</h3> -->
	{#each $ExpenseStore as fb (fb.id)}
		<div in:scale out:fade={{ duration: 500 }}>
			<ExpenseItem item={fb} />
		</div>
	{/each}
</main>
