function greeting(){
    let username = 'Dave'

    function displayUserName(){
        return `Hello ${username}`;
    }
    return displayUserName;
}

const g = greeting();
console.log(g);  //Retornando la definición de la función
console.log(g()); // Aquí estamos ejecutando la función 