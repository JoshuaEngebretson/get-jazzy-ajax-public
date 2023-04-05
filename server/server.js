const express = require('express');

const app = express();
const PORT = 5000;

const artistListArray = require('./modules/artist.js')

const songListArray = require('./modules/song.js')

const albumsArray = require('./modules/albums.js')

app.use(express.static('server/public'));

// What happens when user visits /artist
app.get('/artist', (req, res) => {
    res.send(artistListArray);
});

// What happens when user visits /song
app.get('/song', (req, res) => {
    res.send(songListArray);
});

// What happens when user visits /album
app.get('/album', (req, res) => {
    res.send(albumsArray);
});

// TODO - Add GET for songs

app.listen(PORT, () => {
    console.log('listening on port', PORT)
});