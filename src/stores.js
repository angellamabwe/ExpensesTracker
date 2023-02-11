import { writable } from 'svelte/store'
import { v4 as uuidv4 } from 'uuid'

export const ExpenseStore = writable([
  {
    id: uuidv4(),
    title: 'Dummy Expense',
    amount: 20,
    description: 'Default Dummy expense',
    date: Date()
  },
])