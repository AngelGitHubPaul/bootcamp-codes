// CRUD Operations
/*
    - CRUD operations are the heart of any backend application.
    - Mastering the CRUD operations is essential for any developer.
    - This helps in building character and increasing exposure to logical statements that will help us manipulate our data.
    - Mastering the CRUD operations of any language makes us a valuable developer and makes the work easier for us to deal with huge amounts of information.
*/

// [SECTION] Inserting documents (CREATE)

// Insert One
// Syntax: db.collectionName.insertOne({object})
db.users.insertOne({
	firstName: "Jane",
	lastName: "Doe",
	age: 21,
	contact: {
		phone: "09123456789",
		email: "janedoe@gmail.com"
	},
	courses: ["CSS", "Javascript", "Python"],
	department: "none"
})

// Insert Many
// Syntax: db.collectionName.insertMany([ {objectA}, {objectB}])
db.users.insertMany([

	{
		firstName: "Stephen",
		lastName: "Hawking",
		age: 76,
		contact: {
			phone: "09123456789",
			email: "stephenhawking@gmail.com"
		},
		courses: ["Python", "React", "PHP"],
		department: "none"	
	},
	{
		firstName: "Neil",
		lastName: "Armstrong",
		age: 82,
		contact: {
			phone: "09123456789",
			email: "neilarmstrong@gmail.com"
		},
		courses: ["React", "Laravel", "Sass"],
		department: "none"	
	}
])

// [SECTION] Finding documents (READ)

// Find One - Finding a single document
// If multiple documents match the criteria for finding a document only the FIRST document that matches the search term will be returned
// Syntax: db.collectionName.findOne()


// Leaving the search criteria empty will retrieve the first document
db.users.findOne()
// Syntax: db.collectionName.findOne({ field: value})
db.users.findOne({ firstName: "Stephen" })

// Find Many - Finding multiple documents
// Syntax: db.collectionName.find()
// Syntax: db.collectionName.find({ field: value})

// Leaving the search criteria empty will retrieve the all documents
db.users.find()

db.users.find({ department: "none" })

// Finding multiple documents with multiple parameters
// Syntax: db.collectionName.find({ fieldA: valueA, fieldB: valueB})
db.users.find({ department: "none", age: 82 })


// [SECTION] Updating documents - (UPDATE)

// Document to update
db.users.insertOne({
	firstName: "Test",
	lastName: "Test",
	age: 0,
	contact: {
		phone: "09123456789",
		email: "test@gmail.com"
	},
	courses: [],
	department: "none"
})

// Updating a single document
// Syntax: db.collectionName.updateOne( {criteria}, {$set: {field: value} } )

db.users.updateOne(

	{ firstName: "Test"},
	{
		$set: {
			firstName: "Bill",
			lastName: "Gates",
			age: 65,
			contact: {
				phone: "09123456799",
				email: "bill@gmail.com"
			},
			courses: ["PHP", "Laravel", "HTML"],
			department: "Operations",
			status: "active"
		}
	}
)

// Updating multiple documents
// Syntax: db.collectionName.updateOne( {criteria}, {$set: {field: value} } )
db.users.updateMany(
	{ department: "none"},
	{
		$set: {
			department: "HR"
		}
	}
)

// Replace One
// Can be used if replacing the whole document is necessary
// Syntax: db.collectionName.replaceOne( {criteria}, {field: value} )
db.users.replaceOne(
	{ firstName: "Bill"},
	{
		firstName: "Bill",
		lastName: "Gates",
		age: 65,
		contact: {
				phone: "09123456799",
				email: "bill@gmail.com"
		},
		courses: ["PHP", "Laravel", "HTML"],
		department: "Operations"
	}
)


// Deleting documents (DELETE)

// Document to delete
db.users.insertOne({ firstName: "test" })

// Deleting a single document
// Syntax: db.collectionName.deleteOne({criteria})
db.users.deleteOne({ firstName: "test" })

// Deleting multiple documents
// Syntax: db.collectionName.deleteMany({criteria})
// Be careful when using the "deleteMany" method. If no search criteria is provided, it will delete all documents in a database.
// DO NOT USE: db.collectionName.deleteMany({})

db.users.insertOne({
	firstName: "Bill",
	lastName: "Gates",
	age: 65,
	contact: {
			phone: "09123456799",
			email: "bill@gmail.com"
	},
	courses: ["PHP", "Laravel", "HTML"],
		department: "Operations"
})

db.users.deleteMany({ firstName: "Bill" })


// [SECTION] Advanced Queries
// Query an embedded document
db.users.findOne({
	contact: {
		phone: "09123456789",
		email: "stephenhawking@gmail.com"
	}
})

// Query on nested field
db.users.findOne({"contact.email": "janedoe@gmail.com"})

// Querying an array with exact elements
db.users.findOne({ courses: ["CSS", "Javascript", "Python"] }

// Querying an array without regard to the order of the elements
db.users.findOne( { courses: { $all: ["React", "Python"] } } )

// Querying an embedded array
db.users.insertOne({
	namearr: [
		{
			namea: "juan"
		},
		{
			nameb: "tamad"
		}
	]
})

db.users.findOne({
	namearr: {
		namea: "juan"
	}
})


// [SECTION] Comparison Query Operators
// $gt/$gte operator
// Syntax: db.collectionName.find({field : {$gt/$gte : value}})
db.users.find({ age: { $gt: 50 } }) //neil, stephen
db.users.find({ age: { $gte: 50 } }) //neil, stephen

// $lt/$lte operator
// Syntax: db.collectionName.find({field : {$lt/$lte : value}})
db.users.find({ age: { $lt: 50 } }) //jane
db.users.find({ age: { $lte: 50 } }) //jane

// $ne operator - not equal
// Syntax: db.collectionName.find({field : {$ne : value}})
db.users.find({ age: {$ne: 82} }) //jane, stephen, juan


// $in operator - in an array

// Syntax: db.collectionName.find({field : {$in : value}})
db.users.find({ lastName: { $in: ["Hawking", "Doe"] } })
db.users.find({ courses: { $in: ["HTML", "React"] } })


// [SECTION] Logical Query Operators

// $or
// Allows us to find documents that match a single criteria from multiple provided criteria
// Syntax: db.collectionName.find( { $or: [ {fieldA: value A}, {fieldB: valueB} ]} )
db.users.find({ 
	$or: [
		{ firstName: "Neil"},
		{ age: 25}
	]
})

db.users.find({ 
	$or: [
		{ firstName: "Neil"},
		{ age: {$gt: 30} }
	]
})

// $and operator
// Syntax: db.collectionName.find( { $and: [ {fieldA: value A}, {fieldB: valueB} ]} )

db.users.find({
	$and: [
		{ age: { $ne: 82}},
		{ age: { $ne: 76}},
	]
})


// [SECTION] Field Projection

// Inclusion
// Allows us to include specific fields only when retrieving documents
// The value 1 denotes that the field is being included
// Syntax: db.collectionName.find({criteria}, {field: 1})
db.users.find(
	{ firstName: "Jane"},
	{
		firstName: 1,
		lastName: 1,
		contact: 1
	}
)

// Exclusion
// Allows us to exclude specific fields only when retrieving documents
// The value 0 denotes that the field is being excluded
// Syntax: db.collectionName.find({criteria}, {field: 0})
db.users.find(
	{firstName: "Jane"},
	{
		contact: 0,
		department: 0
	}
)

// Suppressing the ID field
db.users.find(
	{ firstName: "Jane"},
	{
		firstName: 1,
		lastName: 1,
		contact: 1,
		_id: 0
	}
)


// Evaluation Query Operators
// $regex operator
// Allows us to find documents that match a specific string patter using regular expressions
// Syntax: db.collectionName.find({ field: {$regex: 'pattern', $options: 'optionValue'}})

// Case sensitive query
db.users.find({ firstName: {$regex: 'N' })

// Case insensitive query
db.users.find({ firstName: {$regex: 'j', $options: 'i'}})