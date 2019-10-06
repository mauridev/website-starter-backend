var express = require('express')
var router = express.Router()

/*SEEU Models */
var Entry = require('./models/seeu/Entry')
var Use = require('./models/seeu/Use')

/* Entry Atributes */
//Add new Entry
router.post('/entry', (req, res) => {
    var entryData = req.body
    var entry = new Entry(entryData)
    entry.save((err, newEntry) => {
        if (err)
            return res.status(500).send({ message: 'Error Saving: New Entry'})

        res.status(200).send({ message: 'The entry ' + newEntry.entry + ' was added satisfactory'})
    })
})

//List all entries
router.get('/entries', async (req, res) => {
    try {
        var entries = await Entry.find({})
        res.send(entries)
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: 'We cant retrive the list of entries'})
    }
})


//Add new use
router.post('/use', (req, res) => {
    var useData = req.body
    var use = new Use(useData)

    use.save((err, newUse) => {
        if (err)
            return res.status(500).send({message: 'Error Saving: New Use'})

        res.status(200).send({ message: 'The use ' + newUse.use + ' was added satisfactory'})
    })

})

//List all uses
router.get('/uses', async (req, res) => {
    try {
        var uses = await Use.find({})
        res.send(uses)
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: 'We cant retrive the list of uses'})
    }
})

var seeu = {
    router
}


module.exports = seeu
