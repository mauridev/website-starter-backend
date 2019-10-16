var express = require('express')
var router = express.Router()

/*SEEU Models */
var Entry = require('./models/seeu/Entry')
var Use = require('./models/seeu/Use')
var DisciplineOfUse = require('./models/seeu/Discipline')

/* Entry Atributes */
//Add new Entry
router.post('/entry', (req, res) => {
    var entryData = req.body
    var entry = new Entry(entryData)
    entry.save((err, newEntry) => {
        if (err)
            return res.status(500).send({ message: 'Error Saving: New Entry'})

        res.status(200).send({ message: 'The entry ' + newEntry.term + ' was added satisfactory'})
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


//Add new Discipline
router.post('/discipline', (req, res) => {
    var disciplineData = req.body
    var discipline = new DisciplineOfUse(disciplineData)
    discipline.save((err, newDiscipline) => {
        if (err)
            return res.status(500).send({ message: 'Error Saving: New Discipline of use'})

        res.status(200).send({ message: 'The discipline of use ' + newDiscipline.name + ' was added satisfactory'})
    })
})

//List all disciplines
router.get('/disciplines', async (req, res) => {
    try {
        var disciplines = await DisciplineOfUse.find({})
        res.send(disciplines)
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: 'We cant retrive the list of disciplines'})
    }
})

var seeu = {
    router
}


module.exports = seeu
