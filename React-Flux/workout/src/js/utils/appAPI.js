var AppActions = require('../actions/AppActions');

module.exports = {
    addWorkout: function (workout) {
        var workouts = JSON.parse(localStorage.getItem('workouts'));
        workouts.push(workout);
        localStorage.setItem('workouts', JSON.stringify(workouts));
    },

    getWorkouts: function () {
        var workouts = JSON.parse(localStorage.getItem('workouts'));
        AppActions.receiveWorkouts(workous);
    },

    removeWorkout: function (workoutId) {
        var workouts = JSON.parse(localStorage.getItem('workouts'));
        for (var i = 0: i<workouts.length; i++) {
            if (workouts[i] == workoutId) {
                workouts.splice(i, 1);
            }
        }
        localStorage.setItem('workouts', JSON.stringify(workouts));
    }
}