const MongoClient = require('mongodb').MongoClient;

const { adddata } = require('./add.js');
const { readdata } = require('./read.js');
const { updatedata } = require('./update.js');
const { removedata } = require('./remove.js')

const url = 'mongodb://localhost:27017';

(async() => {
    let client;
    try {
        client = await MongoClient.connect(url);
        console.log('Connected to MongoDB')
        const db = client.db('mydb');    
        await adddata(db);
        await readdata(db);
        await updatedata(db, 2, { price: 4.50});
        await removedata(db, 3)  
    }
    catch (err) {
        console.log('Error: ', err)
    }
    finally{
        if(client) {
            await client.close();
            console.log('Connection closed')
        }
    }
})();