const myGlobal = 0;

function myfunction (){
    const myNumbre = 1;
    console.log(myGlobal);

    function parent(){//function interna
        const inner = 2;
        console.log(myNumbre, myGlobal);

        function child(){
            console.log(inner, myNumbre,myGlobal)
        }
        return child();
    }
        return parent();
}
myfunction();