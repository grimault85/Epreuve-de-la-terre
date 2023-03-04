function squareRoot(arg) {
    if (!arg || arg < 0) {
        console.log('Veuillez entrer un entier positif.');
    } else {
        const squareRoot = Math.sqrt(arg);
        console.log(`La racine carrée de ${arg} est : ${squareRoot}`);
    }
}

squareRoot(Number(process.argv[2]))