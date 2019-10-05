var express = require('express')
var router = express.Router()

/*SEEU Models */
var Term = require('./models/seeu/Term')

//Add new Term
router.post('/term', (req, res) => {
    var termData = req.body
    var term = new Term(termData)
    term.save((err, newTerm) => {
        if (err)
            return res.status(500).send({ message: 'Error Saving: New Term'})

        res.status(200).send({ message: 'The term ' + newTerm.entry + ' was added satisfactory'})
    })
})

//List all terms
router.get('/terms', async (req, res) => {
    try {
        var terms = await Term.find({})
        res.send(terms)
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: 'We cant retrive the list of terms'})
    }
})


var seeu = {
    router
}


module.exports = seeu
