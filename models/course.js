const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "Title":String,
        "Description":String,
        "Venue":String,
        "Date":String,
        "Trainer":String,
        "Duration":String
    }
)
let coursemodel = mongoose.model("courses",schema);
module.exports={coursemodel}