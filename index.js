function cb(){
    console.log("test");
}

function receivesAFunction(cb){
    cb();
}

function returnsANamedFunction(){
    return receivesAFunction;
}

function returnsAnAnonymousFunction(){
    return function (){
        console.log("Test");
    }
}