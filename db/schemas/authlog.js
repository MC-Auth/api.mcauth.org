let mongoose = require('mongoose')
    , Schema = mongoose.Schema;
let logSchema = new Schema({
    _id: String,
    time: {
        start: Date,
        authorize: Date,
        verify: Date,
        finish: Date,
        statusCheck: Date
    },
    username: String,
    request_id: String,// internal ID reference to the request collection
    status: {
        type: String,
        enum: ["STARTED", "REQUESTED", "TIMEOUT_LOGIN", "INVALID_TOKEN", "VERIFIED", "NOT_VERIFIED"]
    }
}, {collection: "auth_log"});
module.exports = {
    schema: logSchema,
    model: mongoose.model("AuthLog", logSchema)
};
