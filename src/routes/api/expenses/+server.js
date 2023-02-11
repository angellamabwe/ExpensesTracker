import { expenses } from "$db/expenses";

export const GET = async () => {
  const data = await expenses.find().toArray()
  return new Response(JSON.stringify({
    expenses: data
  }, { status: 200 }))

}

export const POST = async ({ request }) => {
  const authHeader = request.headers.get('Authorization')
  const body = await request.json()
  console.log(body)
  if (authHeader !== 'Myauthheader') {
    return new Response(JSON.stringify({ message: "Invalid credentials" }, { status: 401 }))
  }
  return new Response(JSON.stringify({ message: "Successful" }, { status: 201 }))
}