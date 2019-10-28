const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true,  useUnifiedTopology: true });

mongoose.connect("mongodb://localhost:27017/personDB", { useNewUrlParser: true,  useUnifiedTopology: true });

const personSchema = new mongoose.Schema ({
    name: String,
    age: Number
});

const Person = mongoose.model ("Person", personSchema);
// const person = new Person ({
//     name: "John",
//     age: 37
// })
const Sally = new Person ({
    name: "Sally",
    age: 175
});
const Peter = new Person ({
    name: "Peter",
    age: 525
});
const Alice = new Person ({
    name: "Alice",
    age: 245
});

Person.insertMany([Sally, Peter, Alice], function(err){
    err ? console.log( err ) : console.log( "Successfully added" );
});

Person.find(function(err, people){
    err ? console.log( err ) : console.log( people );
});



// const fruitsSchema = new mongoose.Schema ({
//     name: String,
//     rating: Number,
//     review: String
// });

// const Fruit = mongoose.model("Fruit", fruitsSchema);

// const fruit = new Fruit ({
//     name: "Apple",
//     rating: 7,
//     review: "Pretty solid as a fruit."
// });

// fruit.save();




// const insertDocuments = function (db, callback) {
//     // Get the documents collection
//     const collection = db.collection('fruits');
//     // Insert some documents
//     collection.insertMany([{
//         name: "Apple",
//         score: 8,
//         review: "Great fruit!"
//     }, {
//         name: "Orange",
//         score: 6,
//         review: "Kinda sour"
//     }, {
//         name: "Banana",
//         score: 9,
//         review: "Great stuff!"
//     }], function (err, result) {
//         assert.equal(err, null);
//         assert.equal(3, result.result.n);
//         assert.equal(3, result.ops.length);
//         console.log("Inserted 3 documents into the collection");
//         callback(result);
//     });
// }

// const findDocuments = function(db, callback) {
//     // Get the documents collection
//     const collection = db.collection('fruits');
//     // Find some documents
//     collection.find({}).toArray(function(err, fruits) {
//       assert.equal(err, null);
//       console.log("Found the following records");
//       console.log(fruits)
//       callback(fruits);
//     });
//   }