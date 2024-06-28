use("kec-crud");

//? To insert data:
//? insertOne
//? insertMany

// db.student.insertOne({
//   name: "Unik",
//   address: "Imadole",
// });

// db.student.insertOne({
//   name: "Smarika",
//   address: "Patan",
// });
// db.student.insertOne({
//   _id: 101,
//   name: "Smarika",
//   address: "Patan",
// });

// db.student.insertMany([
//   {
//     name: "Samundra",
//     address: "Dhapakhel",
//   },
//   {
//     name: "Prashant",
//     address: "Balaju",
//   },
// ]);

//? Read operation:

//? fineOne
//? find

// db.student.find();

// db.student.find({ address: "Imadole" });

// db.student.findOne({ address: "Imadole" });

// db.student.find({ _id: 101 });

// db.student.find({ _id: ObjectId("667e98184884de7387b9373f") });

//? Delete => remove data

//? deleteOne
//? deleteMany

// db.student.deleteOne({ _id: ObjectId("667e970535cd984e89055609") });

// db.student.deleteOne({ address: "Balaju" });

// db.student.deleteMany({ address: "Patan" });

// db.student.insertMany([
//   {
//     name: "Samundra",
//     address: "Dhapakhel",
//   },
//   {
//     name: "Prashant",
//     address: "Balaju",
//   },
// ]);

//? Update => to change field data(s):

//? updateOne
//? updateMany

// db.student.updateOne(
//   { name: "Samundra" },
//   {
//     $set: {
//       name: "Siddhant",
//     },
//   }
// );

// db.student.updateMany(
//   { address: "Dhapakhel" },
//   {
//     $set: {
//       address: "Nakhipot",
//     },
//   }
// );

//?Upsert
db.student.updateOne(
  { name: "Saugat" },
  { $set: { address: "Imadole" } },
  { upsert: true }
);

// db.student.find();
