const Movie = require("./movieModel");

exports.addMovie = async (req, res) =>{
    try {
        const newMovie = await Movie.create(req.body);
        res.status(200).send({movie: newMovie});
    } catch (error) {   
        console.log(error);
        res.status(500).send({err: error.message});
    };
};

exports.listMovie = async (req, res) => {
    try {
        const movies = await Movie.find({})
        res.status(200).send({allMovie: movies});
    } catch (error) {
        console.log(error);
        res.status(500).send({err: error.message});
    };
};

exports.updateMovie = async (req, res) => {
    try {
        const movies = await Movie.updateOne(
           { [req.body.filterKey]: req.body.filterVal },
           { [req.body.updateKey]: req.body.updateVal } 
        );
        res.status(200).send({update: movies});
    } catch (error) {
        console.log(error);
        res.status(500).send({err: error.message});
    };
};

exports.deleteMovie = async (req, res) => {
    try {
        const remove = await Movie.deleteOne(
            {[req.params.filterKey]: req.params.deleteVal}
            )
        res.status(200).send({remove: remove})
    } catch (error) {
        console.log(error);
        res.status(500).send({err: error.message});
    };
};