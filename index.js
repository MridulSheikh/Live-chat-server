const express = require("express");
const cors = require('cors')
require('dotenv').config();
const { MongoClient } = require('mongodb');
const app = express();
const port = process.env.PORT|| 5000;

//middlewars
app.use(cors());
app.use(express.json())

// mogodb connected
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@mydatabase.jdlyw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

 async function run(){
     try{
     await client.connect()
     console.log("mongoDb connect successfully")
     const database = client.db("liveChat");
     const useCollection = database.collection("users")
     }
     finally{

     }

 }
 run().catch(console.dir)
app.get('/',(req, res)=>{
    res.send('this is live chat server')
})
app.listen(port,()=>{
    console.log('lisiting the port',port)
})