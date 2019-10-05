var mongoose = require('mongoose')

var termSchema = mongoose.Schema({
    entry: String,
    definition: String
})


module.exports = mongoose.model('Term', termSchema)