function isSorted(arg) {
    if (arg.some(n => !Number.isInteger(n))) {
        console.log('Veuillez entrer uniquement des entiers.');
        process.exit(1);
    }

    const sortedNumbers = [...arg].sort((a, b) => a - b);

    if (arg.some((n, i) => n !== sortedNumbers[i])) {
        console.log("La liste n'est pas triée.");
    } else {
        console.log('La liste est triée.');
    }
}

isSorted(process.argv.slice(2).map(Number))