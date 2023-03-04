function isPrimary(arg) {
    if (!arg || arg < 2) {
        console.log('Veuillez entrer un entier supérieur ou égal à 2.');
    } else {
        let isPrimary = true;

        for (let i = 2; i <= Math.sqrt(arg); i++) {
            if (arg % i === 0) {
                isPrimary = false;
                break;
            }
        }

        if (isPrimary) {
            console.log(`${arg} est un nombre premier.`);
        } else {
            console.log(`${arg} n'est pas un nombre premier.`);
        }
    }
}

isPrimary(Number(process.argv[2]))