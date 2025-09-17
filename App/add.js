async function adddata(db) {
    const result = await db.collection('products').insertMany([
        {   
            id: 1,
            name: 'Apple',
            description: 'Fresh red apples, crisp and sweet. Great for snacking or baking.',
            price: 2.50,
            units: 120
        },
        {
            id: 2,
            name: 'Banana',
            description: 'Ripe yellow bananas, full of potassium and natural energy.',
            price: 1.20,
            units: 200
        },
        {
            id: 3,
            name: 'Grapes',
            description: 'Seedless green grapes, juicy and refreshing for salads or snacks.',
            price: 3.75,
            units: 80
        }
    ]);
    return { insertedId: result.insertedId}
}

module.exports = {adddata}