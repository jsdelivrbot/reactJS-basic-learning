var AppActions = require('../actions/AppActions');

module.exports = {
    addNote: function (note) {
        $.ajax({
            url: "https://api.mongolab.com/api/1/databases/react-note/collections/notes?apiKey=3m5b6W7TnL8XFABZIbMDgUOAnlqsG9rh",
            data: JSON.stringify(note),
            type: "POST",
            contentType: "application/json"
        });
    },

    getNotes: function () {
        $.ajax({
            url: "https://api.mongolab.com/api/1/databases/react-note/collections/notes?apiKey=3m5b6W7TnL8XFABZIbMDgUOAnlqsG9rh",
            dataType: 'json',
            cache: false,
            success: function (data) {
                console.log(data);
                AppActions.receiveNotes(data);
            }.bind(this),
            error: function (xhr, status, err) {
                console.log(err);
            }.bind(this)
        });
    },

    removeNote: function (noteId) {
        $.ajax({
            url: "https://api.mongolab.com/api/1/databases/react-note/collections/notes/" + noteId + "?apiKey=3m5b6W7TnL8XFABZIbMDgUOAnlqsG9rh",
            type: "DELETE",
            async: true,
            timeout: 300000,
            success: function (data) {
                console.log('Note Deleted...');
            }.bind(this),
            error: function (xhr, status, err) {
                console.log(err);
            }.bind(this)
        });
    }
}