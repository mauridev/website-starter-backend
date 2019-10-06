var mongoose = require('mongoose')

var useSchema = mongoose.Schema({
    use: String
})

module.exports = mongoose.model('Use', useSchema)