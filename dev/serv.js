const buildGame = require("./build.js");

const express = require("express");
const Database = require("@replit/database")
const db = new Database()
const path = require("path");

const app = express();

db.list().then(keys => {
    if (keys.includes("leaderboard")) {
        return
    } else {
        return db.set("leaderboard", JSON.stringify([{
            name: "DaInfLoop",
            score: 100
        },
        {
            name: "LaJBel",
            score: 120
        }]))
    }
});

app.get("/", (req, res) => {
    buildGame()
	res.sendFile(path.join(__dirname, "..", "index.html"));
});

app.get('/api/leaderboard', (req, res) => {
    db.get("leaderboard").then((res1) => {
        let leaderboard = JSON.parse(res1)
        leaderboard.sort(function(a, b){
            return b.score-a.score
        });
        res.json(leaderboard)
    })
})

app.use(express.static(path.join(__dirname, "..")));

app.listen(8000, () => {
    console.log("online");
});