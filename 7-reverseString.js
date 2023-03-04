function reverseString(arg) {
    if (!arg) {
        console.log('Veuillez entrer une chaine de caractère.')
    } else {
        const reverseStr = arg.split('').reverse().join('')
        console.log(`La chaine inversée est : ${reverseStr}`)
    }
}

reverseString(process.argv[2])