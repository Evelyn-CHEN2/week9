const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors'); 
app.use(cors());
app.use(express.json());

const server = require('http').createServer(app);
const options = {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
}
server.listen(PORT, () => {
    console.log(`HTTP + Socket.IO listening on http://localhost:${PORT}`);
  });

  // Connect to MongoDB
const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017'; 
const client = new MongoClient(uri);

async function connectDB() {
    await client.connect();
    console.log('Connected to MongoDB');
    return client.db('chat')
}

const db = await connectDB();
require('./routes/create').route(app, db);
require('./routes/add').route(app, db);
require('./routes/read').route(app, db);
require('./routes/remove').route(app, db);
require('./routes/update').route(app, db);

  