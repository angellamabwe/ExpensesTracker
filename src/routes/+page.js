export const load = ({ fetch }) => {

  const fetchPosts = async () => {
    const res = await fetch('/api/expenses')
    const data = await res.json()
    return data.expenses
  }

  return {
    expenses: fetchPosts()
  }

}