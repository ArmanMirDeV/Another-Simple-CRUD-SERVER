const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");

const app = express();

const port = process.env.PORT || 3000;


// AnotherSimpleDBUSer
// VLm3Trf8QObwH8tR
const uri =
  "mongodb+srv://AnotherSimpleDBUSer:VLm3Trf8QObwH8tR@anothersimplecrudprojec.sly0hz6.mongodb.net/?appName=AnotherSImpleCRUDProject";


  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

//middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World : Another Simple CRUD server is running");
});



async function run() {
    try {
        await client.connect();

        const usersDB = client.db("UsersDB");
        const usersCollection = usersDB.collection("users")

        // data base related all API's here

        app.post("/users", async(req, res) => {
            // res.send("Hitting the db api")
            console.log('Hitting the users post api');

            const newUser = req.body;
            console.log("User Info ",newUser);

            const result = await usersCollection.insertOne(newUser)

            res.send(result)
            
            
        })




        await client.db('admin').command({ ping: 1 });
        console.log('Pinged your deployment. You successfully connected to MongoDB!');
        
    }
    finally {
        // await client.close();
    }
}

run().catch(console.dir);



app.listen(port, () => {
  console.log(`Another simple crud server is listening on port ${port}`);
});
 