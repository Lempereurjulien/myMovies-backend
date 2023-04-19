var express = require('express');
var router = express.Router();

// const MyApi = process.env.TMDB_API_KEY;
const MyApi = '4e0cecae944829c8da40abccbf45dafe';
router.get('/movies', (req, res) => {
fetch(`https://api.themoviedb.org/3/discover/movie?api_key=4e0cecae944829c8da40abccbf45dafe`)
.then(response => response.json())
.then(data => res.json({movies :data.results}));
})


module.exports = router;
