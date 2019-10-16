var mongoose = require('mongoose')

var entrySchema = mongoose.Schema({
    term: String,
    definition: String,
    uses: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Use' }
    ],
    disciplines: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'DisciplineOfUse' }
    ]
})


module.exports = mongoose.model('Entry', entrySchema)