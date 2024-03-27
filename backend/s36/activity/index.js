async function fruitsOnSale(db) {
    return await(
            db.fruits.aggregate([
                { $match: { onSale: true } },
                { $count: "total"}
            ])
        );
};

async function fruitsInStock(db) {
    return await(
            db.fruits.aggregate([
                { $match: { stock: {$gte: 20}} },
                { $count: "total"}
            ])
        );
};

async function fruitsAvePrice(db) {
    return await(
            db.fruits.aggregate([
                { $match: { onSale: true } },
                { $group: { _id: "$supplier_id", average: {$avg: "$price"} } }
            ])
        );
};

async function fruitsHighPrice(db) {
    return await(
            db.fruits.aggregate([
                { $match: { onSale: true } },
                { $group: { _id: "$supplier_id", highestPrice: {$max: "$price"} } }
            ])
        );
};

async function fruitsLowPrice(db) {
    return await(
            db.fruits.aggregate([
                { $match: { onSale: true } },
                { $group: { _id: "$supplier_id", lowestPrice: {$min: "$price"} } }
            ])
        );
}


try{
    module.exports = {
        fruitsOnSale,
        fruitsInStock,
        fruitsAvePrice,
        fruitsHighPrice,
        fruitsLowPrice
    };
} catch(err){

};
