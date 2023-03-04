function charCount(arg) {
    if (!arg) {
        console.log('Veuillez entrer une chaine de caractères.')
    } else {
        const charCount = arg.length
        console.log(`La chaine contient ${charCount} caractères.`)
    }
}

charCount(process.argv[2])