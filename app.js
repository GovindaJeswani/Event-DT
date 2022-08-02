const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const express = require("express");
const morgan = require("morgan");

const AppError = require("./utils/AppError");
const globalErrorHandler = require("./controller/errorController");

const eventRoutes = require("./routes/eventRoutes");

const app = express();

app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// app.get("/api/v3/app/events/:id", async (req, res, next) => {});

app.use("/api/v3/app/events", eventRoutes);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

module.exports = app;

// // let conn = ''
// // `mongodb+srv://college:college@123@college1.l8avi.mongodb.net/college1?retryWrites=true&w=majority`
// // MongoClient.connect(
// //     conn,(err, client) => {
// //         if (err) {
// //             throw err;
// //             return;
// //         }
// //         console.log('Database connection successful');

// //     // This objects holds the refrence to the db
// //     const db = client.db(dbName);

// //     client.close();

// //     })

//     router.post('/createuser',async(req,res)=>{
//         const dataJson = req.body
//         try{
//             const createduser = await db.collection("customerusers").insertOne(dataJson)
//             res.json(createduser)
//             console.log(createduser);
//         }catch(error){
//             console.log(error);
//             res.json(error.message)
//         }

//     })
//     app.listen(port),()=>{
//         console.log(`App is running on http://${localhost}:${port} ...`);
//     }
// app.use(express.json())


// app.post()



// const app = express()
// let db

// let connectionString = `mongodb://localhost:27017/crud`

// mongodb.connect(
//   connectionString,
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   function (err, client) {
//     db = client.db()
//     app.listen(5000)
//   }
// )

// app.use(express.json())

// app.post('/create-data', function (req, res) {
//   // Sending request to create a data
//   const timeStamp = new Date()
//     const dataJson =req.body
//     db.collection('data').insertOne({ dataJson }, function (
//         err,
//         info
//         ) {
//             res.json({
//         status:201,
//         data:res.data
//     })
// })
// })


// app.get('/', function (req, res) {
//     // getting all the data
//     //   console.log(res);
//     db.collection('data')
//     .find({})
//     .toArray(function (err, items) {
//         if(err){
//             res.status(400).send("Error fetching listings!");
//         }else{
//             res.json(items)
//         }
//     })
// })

// app.put('/update-data/:id', function (req, res) {
//     // updating a data by it's ID and new value

//     const postId = {_id :req.params.id}
//     let dataJson ={
//         $set:{
//             data:req.body
//         }
//     }

// //    db.collection('data').findOneAndUpdate(
//    db.collection('data').updateOne(
//     // postId,dataJson,(err,data)=>{
//     postId,dataJson,(err,data)=>{
//         if(err){
//             res.status(400).send(`Error updating likes on listing with id ${postId.id}!`);

//         }else{
//             res.status(200).json(data)  
//         }
//     })
// })
    // { _id: new mongodb.ObjectId(req.body.id) },
    // { $set: {  dataJson } },
    // function () {
    //   res.send('Success updated!')
    //   res.json(items)
    // }
//   )
// })

// app.delete('/delete-data', function (req, res) {
//   // deleting a data by it's ID
  
//   db.collection('data').deleteOne(
//     { _id: new mongodb.ObjectId(req.body.id) },
//     function () {
//       res.send('Successfully deleted!')
//     }
//   )
// })


//  documentation link =>  https://documenter.getpostman.com/view/18365324/Uze4uiKi