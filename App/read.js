async function readdata(db) {
    const data = await db.collection('products').find().toArray();
    return {data}
};
module.exports = {readdata}