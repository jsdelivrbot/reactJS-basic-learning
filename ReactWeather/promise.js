function addPromise(a, b) {
    return new Promise(function(resolve, reject) {
        if(typeof a === 'number' && typeof b === 'number') {
            resolve(a+b);
        } else  {
            reject('Wrong input type')
        }
    });
}

addPromise(2, 3).then(
    (res) => {
        console.log(res);
    },
    (err) => {
        console.log(err);
    }
)