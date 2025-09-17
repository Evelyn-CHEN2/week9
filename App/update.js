async function updatedata(db, id, updates) {
    await db.collection('products').updateOne(
        { id },
        { $set: updates }
    );
}
module.exports = {updatedata}