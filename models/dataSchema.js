const dbMongo = require("mongoose");
const uniqueArray = new dbMongo.Schema({
    uniqueNo:[{
        type: Number,
        require: true,
    }],
    days:[{
        type: String,
        require: true,
    }],
    largestElement:[{
        type: Number,
        require: true,
    }],
    moveElement:[{
        type: Number,
        require: true,
    }],
    validElement:[{
        type: String,
        require: true,
    }],
    calculateNoArr:[{
        type: Number,
        require: true,
    }],
})
module.exports = dbMongo.model("uniqueNumbers", uniqueArray);