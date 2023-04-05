$(document).ready(onReady);

function onReady() {

    // get the information from the get request
    //  that is located on the server
    $.ajax({
        type: 'GET',
        url: '/artist'
    }).then(function (response) {
        // Do a loop function based on response
        for (let i = 0; i < response.length; i++) {
            let artist = response[i];
            //For each "artist" adds the artist's 
            //  name, date born, and date died
            //  to the table with id="artistTableBody"
            $('#artistTableBody').append(`
                <tr>
                    <td>${artist.name}</td>
                    <td>${artist.born}</td>
                    <td>${artist.died}</td>
                </tr>
            `);
        }
    });

    // TODO Add ajax request for /songs and display on DOM
    $.ajax({
        type: 'GET',
        url: '/song'
    }).then(function (response) {
        for (let i = 0; i < response.length; i++) {
            const song = response[i];
            $('#songTableBody').append(`
                <tr>
                    <td>${song.title}</td>
                    <td>- ${song.artist}</td>
                </tr>
            `)
        }
    })
}