import express from "express"
import cors from "cors"
import Database from "better-sqlite3"


// application.listen("3000", () => {
//     console.log("the server has landed")
// })
const db = new Database('database.db')
const app = express()
const PORT = "2222";
app.use(express.json())

// res.send('ooooOOooh!👻')
// req.json({spooked: true})
// res.status(200)

app.get('/movies', (req, res) => {
    try {
        if (req.query.id) {
            let movie = db.prepare(`SELECT * FROM movies WHERE id = ?`).all(req.query.id)
            req.status(200).json(movie)
            return;
        }
        let movies = db.prepare(`SELECT * FROM movies`).all()
        res.status(200).json(movies)
        const movie = req.body.movie
        const year = req.body.year
        const imgURL = req.body.imgURL
    } catch (err) {
        res.status(500).json(err)
    }
})

app.post('/movies', (req, res) => {
    try {
        // if (req.query.id){
        //     let movie = db.prepare(`INSERT FROM TABLE`)
        // }
        const movie = req.body.movie
        const year = req.body.year
        const imgURL = req.body.imgURL
        const newMovie = db.prepare(`INSERT INTO movies (movie, year, imgURL) VALUES (?, ?, ?) `).run(movie, year, imgUrl)
        res.status(200).json(newMovie)
    } catch (err) {
        res.status(500).json({ error: err })
    }
})


app.listen("2222", () => {
    console.log(`( ˘ ³˘)ノ°ﾟº❍｡server started on PORT: ${PORT}`)
})