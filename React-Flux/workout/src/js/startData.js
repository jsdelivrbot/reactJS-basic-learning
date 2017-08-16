module.exports = {
    init: function(){
        localStorage.clear();
        localStorage.setItem('workouts', JSON.stringify([
            {
                id:0001,
                type: 'basketball',
                minutes: 20,
                mile: 2,
                data: new Date()
            }
        ]))
    }
}