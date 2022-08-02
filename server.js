const dotenv = require('dotenv')


dotenv.config({ path: "./config.env" });
const app = require("./app");
const client = require("./database");


// Connection URL

client.connect(async function (err, database) {
    if (err) throw err;
  
    console.log("Database connected successfully");
    db = database;

    
  const port = process.env.PORT || 8080;
  const host = "127.0.0.1";
  // Start the application after the database connection is ready
  app.listen(port, host, () => {
    console.log(`App is up and running at : http://${host}:${port}`);
  });
});




async function listDatabases(client) {
    const databaseList = await client.db().admin().listDatabases();
  
    console.log("Database names : ");
    databaseList.databases.forEach((ele) => {
      console.log(ele.name);
    });
  }