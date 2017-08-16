var AppActions = require('../actions/AppActions');

module.exports = {
	searchMovies: function (movie) {
		$.ajax({
			url: 'http://www.omdiapi.com/?s=' + movie.title,
			dataType: 'json',
			cache: false,
			success: function () {
				AppActions.receiveMovieResults(data.Search);
			}.bind(this),
			error: function (xhr, status, err) {
				console.log(err);
			}
		});
	}
}