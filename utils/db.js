// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const url =
//   "mongodb+srv://deleveryadmin:<password>@cluster0.jdyxr.mongodb.net/<dbname>?retryWrites=true&w=majority";
// MongoClient.connect(url, (error, client) => {
//   if (error) console.log(client);
//   return;

//   const db = client.db("delivery");
//   db.collection("users")
//     .insertOne({
//       name: "Baurice Bagalwa",
//       level: 1,
//     })
//     .then((res) => {
//       res.ops;
//     })
//     .catch((error) => "something went wrong");
// });

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://deleveryadmin:admin_delivery@cluster0.jdyxr.mongodb.net/delivery?retryWrites=true&w=majority",
    // "mongodb+srv://deleveryadmin:admin_delivery@cluster0.jdyxr.mongodb.net/<dbname>?retryWrites=true&w=majority"
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("DB Connected!"))
  .catch((err) => {
    console.log("DB Connection Error: " + err);
  });
