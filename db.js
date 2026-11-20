// step 1, require mongoose
const mongoose = require("mongoose")
const databaseurl = process.env.databaseurl

// step 2, connnect my application to a db
mongoose.connect(databaseurl).then(()=>console.log("database connection established")).catch((err)=>console.log("Unable to connect to database due to:", err.message))