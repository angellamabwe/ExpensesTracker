import db from '$db/mongo'

export const expenses = db.collection("expenses")