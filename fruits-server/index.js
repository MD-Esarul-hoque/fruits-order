const express =require('express');
const app=express();
const cors=require('cors');
require('dotenv').config()
const port=process.env.PORT || 5016;


app.use(cors());
app.use(express.json());





const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://fruitsUser:kNPsRqdIhT8TgEr9@cluster0.fuddcn2.mongodb.net/?appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    
    await client.connect();

   
    const menuCollection=client.db("fruits").collection("menu");
    const reviewsCollection=client.db("fruits").collection("reviews");
    const cartCollection=client.db("fruits").collection("carts");

   

    app.get('/menu',async(req,res)=>{
        const result=await menuCollection.find().toArray();
        res.send(result);
    })
    app.get('/reviews',async(req,res)=>{
        const result=await reviewsCollection.find().toArray();
        res.send(result);
    })
    app.get('/carts',async(req,res)=>{
      const email=req.query.email;
      const query={email:email};
        const result=await cartCollection.find(query).toArray();
        res.send(result);
    })
    app.post('/carts',async(req,res)=>{
      const cartItem=req.body;
      const result=await cartCollection.insertOne(cartItem);
      res.send(result);
    })
    app.delete('/carts/:id',async(req,res)=>{
      const id=req.params.id;
      const query={_id: new ObjectId(id)};
      const result=await cartCollection.deleteOne(query);
      res.send(result);
    })
    
    await client.db("admin").command({ ping: 1 });
    console.log(" You successfully connected to MongoDB!");
  } finally {
    
    //await client.close();
  }
}
run().catch(console.dir);





app.get('/',(req,res)=>{
    res.send('Fruits Order')
})

app.listen(port,()=>{
    console.log(`Fruits order is sitting on port ${port}`);
})