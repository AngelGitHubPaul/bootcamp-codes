async function fruitsOnSale(db) {
    return await(
            db.fruits.aggregate([
                { $match: { onSale: true } },
                { $count: "fruitsOnSale"}
            ])
        );
};

async function fruitsInStock(db) {
    return await(
            db.fruits.aggregate([
                { $match: { stock: {$gte: 20}} },
                { $count: "enoughStock"}
            ])
        );
};

async function fruitsAvePrice(db) {
    return await(
            db.fruits.aggregate([
                { $match: { onSale: true } },
                { $group: { _id: "$supplier_id", avg_price: {$avg: "$price"} } }
            ])
        );
};

async function fruitsHighPrice(db) {
    return await(
            db.fruits.aggregate([
                { $match: { onSale: true } },
                { $group: { _id: "$supplier_id", max_price: {$max: "$price"} } }
            ])
        );
};

async function fruitsLowPrice(db) {
    return await(
            db.fruits.aggregate([
                { $match: { onSale: true } },
                { $group: { _id: "$supplier_id", min_price: {$min: "$price"} } }
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
