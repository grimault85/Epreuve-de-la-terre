function division(arg1, arg2) {
    if (isNaN(arg1) || isNaN(arg2)) {
        console.log('Veuillez entrer deux nombres valides.');
    } else if (arg2 === 0) {
        console.log('La division par zéro est impossible.');
    } else {
        const result = arg1 / arg2;
        const remainder = arg1 % arg2;
        console.log(`Le résultat de la division est : ${result}`);
        console.log(`Le reste de la division est : ${remainder}`);
    }
}
division(parseInt(process.argv[2]), parseInt(process.argv[3]))