// Documents to be added

db.fruits.insertMany([

	{
		name: "Apple",
		color: "Red",
		stock: 20,
		price: 40,
		supplier_id: 1,
		onSale: true,
		origin: ["Philippines", "US"]
	},

	{
		name: "Banana",
		color: "Yellow",
		stock: 15,
		price: 20,
		supplier_id: 2,
		onSale: true,
		origin: ["Philippines", "Ecuador"]
	},

	{
		name: "Kiwi",
		color: "Green",
		stock: 25,
		price: 50,
		supplier_id: 1,
		onSale: true,
		origin: ["US", "China"]
	},

	{
		name: "Mango",
		color: "Yellow",
		stock: 10,
		price: 120,
		supplier_id: 2,
		onSale: false,
		origin: ["Philippines", "India"]
	}

])

// [SECTION] MongoDB Aggregation
// Used to generate manipulated data and perform operations to create filtered results that help in analyzing data

//Using the aggregate method
/*
	$match - used to pass the documents that meet the pecified condition to the next pipeling stage
		Syntax: {$match: { field: value }}
	
	$group - used to group documents together abd field-value pairs using the data from the grouped elements
		Syntax: {$group: {_id: "value", fieldResult: "valueResult"}}
	
	The "$" symbol will refer to a field name that is available in the documents that are being aggregated on.

	The "$sum" operator will total the values of all "stock" fields in the returned documents that are found using the "$match" criteria
*/ 
db.fruits.aggregate([
	{ $match: { onSale: true } },
	{ $group: { _id: "$supplier_id", total: {$sum: "$stock"} } }
])

// Field projection with aggregation
// $project - can be used when aggregating data to include/exclude fields from the returned results
db.fruits.aggregate([
	{ $match: { onSale: true} },
	{ $group : {_id: "$supplier_id", total: {$sum: "$stock"} } },
	{ $project: { _id: 0 }}
])

// Sorting aggregated results
// $sort - can be used to change the orde of the aggregated result
// value - 1/-1
// Syntax - { $sort { field: 1/-1 } }
db.fruits.aggregate([
	{ $match: { onSale: true} },
	{ $group : {_id: "$supplier_id", total: {$sum: "$stock"} } },
	{ $sort: { total: -1 }}
])

// Aggregating results based on array field
// $unwind - deconstructs an array field from a document with an array value to output a result for each element
db.fruits.aggregate([
	{ $unwind: "$origin"}
])

// Display the fruit document by theiru origin and the kinds of fruits that supplied
db.fruits.aggregate([
	{ $unwind: "$origin"},
	{ $group: {_id: "$origin", kinds: { $sum: 1}}}
])