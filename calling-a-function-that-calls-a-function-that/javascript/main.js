function F1() {
    console.log("Hello World");
}

for (let i = 0; i < 5; i++) {
    console.time("function");
    F1();
    console.timeEnd('function')
}
