const express = require('express');

const app = express();
const PORT = 5000;

const artistListArray = require('./modules/artist.js')

const songListArray = require('./modules/song.js')

app.use(express.static('server/public'));

// What happens when user vistits /artist
app.get('/artist', (req, res) => {
    res.send(artistListArray);
});

// What happens when user visitis /song
app.get('/song', (req, res) => {
    res.send(songListArray);
});

// TODO - Add GET for songs

app.listen(PORT, () => {
    console.log('listening on port', PORT)
});