import { MongoClient, ServerApiVersion } from 'mongodb'

const uri = "mongodb+srv://angella:Heavenc1t1zens@rockssvelte.tiqf9zy.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

export function start_mongo() {
  console.log('Starting mongo...');
  return client.connect(err => {
    const collection = client.db("rock-db").collection("expenses");
    client.close();
  });
}

export default client.db("rock-db")