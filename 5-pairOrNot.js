function isPair(arg) {
    if (isNaN(arg)) {
        console.log('Veuillez entrez un nombre')
    } else if (arg % 2 === 0) {
        console.log(`${arg} est un nombre pair.`)
    } else {
        console.log(`${arg} est un nombre impaire.`)
    }
}

isPair(parseInt(process.argv[2]))