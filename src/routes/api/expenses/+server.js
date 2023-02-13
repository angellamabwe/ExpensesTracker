import { expenses } from "$db/expenses";

export const GET = async () => {
  try {
    const data = await expenses.find().toArray()
    return new Response(JSON.stringify({
      expenses: data
    }, { status: 200 }))
  } catch (error) {
    return {
      status: 500,
      body: {
        error: 'Server error'
      }
    };
  }

}

export async function POST(request) {
  try {
    const exp = JSON.parse(request.body);
    await expenses.insertOne(exp);
    return {
      status: 201,
      body: {
        message: 'Success'
      }
    }
  } catch (error) {
    return {
      status: 500,
      body: {
        error: 'Server error'
      }
    };
  }
}

export async function DELETE(request) {
  try {
    const exp = JSON.parse(request.body);
    await expenses.deleteOne({ _id: ObjectId(exp._id) });
    return {
      status: 200,
      body: {
        message: 'Success'
      }
    }
  } catch (error) {
    return {
      status: 500,
      body: {
        error: 'Server error'
      }
    };

  }
}

