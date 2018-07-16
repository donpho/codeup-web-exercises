const wait = milisecond => {
    return new Promise( (resolve,reject) => {
        if (isNaN(milisecond) === false){
            setTimeout( () => {
                //console.log(milisecond);
                resolve(`You'll see this after ${milisecond/1000} seconds.`);
            }, milisecond);
        }
        else{
            reject(`${milisecond} is not a valid number!`);
        }
    })
};

//wait(3000).then(data => console.log(data));
let url ='https://api.github.com/users/donpho/events';

fetch(url, {headers: {'Authorization': 'token e8d25ea05f3669bb42f5e5d412019eb60bfa2ae3'}})
    .then(response => response.json())
    //.then(response => console.log(response))
    .then(response => response[0].created_at)
    .then(response => console.log(`Your last commit you made was on ${response}`))
    .catch(error => console.error(error));
