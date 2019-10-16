var mongoose = require('mongoose')

var disciplineSchema = mongoose.Schema({
    name: String
})

module.exports = mongoose.model('DisciplineOfUse', disciplineSchema)