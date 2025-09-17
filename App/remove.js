async function removedata(db, id) {
    await db.collection('products').deleteOne
    (
        {id}
    );
};
module.exports = {removedata}