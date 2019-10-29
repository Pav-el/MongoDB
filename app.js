const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true,  useUnifiedTopology: true });

// mongoose.connect("mongodb://localhost:27017/fruitsDB", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: [true, "name please!"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    rating: 7,
    review: "Great!"
});

const banana = new Fruit({
    name: "banana",
    rating: 7,
    review: "Very nice!"
});

const pineapple = new Fruit({
    name: "pineapple",
    rating: 9,
    review: "Very nice!"
});

const peach = new Fruit({
    rating: 5,
    review: "good!"
});
Fruit.deleteMany({}, function (err) {
    err ? console.log(err) : (console.log('docs deleted'), mongoose.connection.close());
});


// Fruit.updateOne({
//     "_id": "5db83a0a56bd2504944fa3db"
// }, {
//     "name": "pineapple"
// }, function (err) {
//     if (err) {
//         console.log(fruit.name);
//         mongoose.connection.close();
//     } else {
//         Fruit.updateOne({
//             "_id": "5db83a0a56bd2504944fa3dc"
//         }, {
//             "name": "peach"
//         }, function (err) {
//             if (err) {
//                 console.log(fruit.name);
//                 mongoose.connection.close();
//             } else {
//                 console.log('updated successfully');
//                 mongoose.connection.close();
//             }
//         })
//     }
// })



// Fruit.insertMany([banana, pineapple, peach]);

// Person.insertMany([Sally, Peter, Alice], function(err){
//     err ? console.log( err ) : console.log( "Successfully added" );
// });

// Fruit.find(function (err, fruits) {
//     err ? console.log(err) :
//         (
//             mongoose.connection.close(),
//             fruits.forEach((fruit) => console.log(fruit.name))
//         )
// });



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