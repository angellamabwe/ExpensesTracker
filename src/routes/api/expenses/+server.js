import { expenses } from "$db/expenses";

export const GET = async () => {
  const data = await expenses.find().toArray()
  return new Response(JSON.stringify({
    expenses: data
  }, { status: 200 }))

}

export async function POST(request) {
  const exp = JSON.parse(request.body);
  const newExp = await expenses.insertOne(exp);
  return {
    status: 201,
    body: {
      newExp
    }
  }
}

export async function DEL(id) {
  expenses.remove({ id: id })
  return {
    status: 200
  }
}

