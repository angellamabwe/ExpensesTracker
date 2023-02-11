import { MongoClient, ServerApiVersion } from 'mongodb'
import { MONGODB_URI, MONGODB_DB } from '$env/static/private'

const uri = MONGODB_URI
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

export function start_mongo() {
  console.log('Starting mongo...');
  return client.connect(err => {
    const collection = client.db("rock-db").collection("expenses");
    client.close();
  });
}

export default client.db(MONGODB_DB)