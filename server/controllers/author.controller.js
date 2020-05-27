const Author = require('../models/author.model');

module.exports = {
    working: (req,res) =>{
        res.json({message: "Working"});
    },
    index:(req,res) =>{
        Author.find()
            .then(authors => res.json(authors))
            .catch(err => res.status(400).json(err.errors))
    },
    show: (req,res) =>{
        Author.findById({_id: req.params.id})
            .then(author=> res.json(author))
            .catch(err => res.status(400).json(err.errors))
    },
    create: (req, res) => {
        const {name} = req.body;
        Author.create({
            name
        })
            .then(author => res.json(author))
            .catch(err => res.status(400).json(err))
    },
    update: (req, res) => {
        Author.findOneAndUpdate({_id:req.params.id}, req.body, {runValidators:true})
            .then(author => res.json(author))
            .catch(err => res.status(400).json(err.errors))
    }, 
    destroy: (req,res) => {
        Author.deleteOne({_id:req.params.id})
            .then(author => res.json(author))
            .catch(err => res.status(400).json(err.errors))
    }
}