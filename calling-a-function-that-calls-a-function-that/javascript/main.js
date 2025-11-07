
function FunctionA() { FunctionB(); }
function FunctionB() { FunctionC(); }

function FunctionA() { FunctionC(); }

function FunctionC() { 
    console.log("Hello World");
}


for (let i = 0; i < 5; i++) {
    console.time("function");
    F1();
    console.timeEnd('function')
}
