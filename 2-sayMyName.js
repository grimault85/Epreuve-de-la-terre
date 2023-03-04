function sayMyName() {
    process.argv.slice(2).forEach(arg => {
        console.log(arg);
    });
}


