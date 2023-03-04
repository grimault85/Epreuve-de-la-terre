function sayMyName(startLetter) {
    const startCharCode = startLetter.charCodeAt(0)
    let alphabet = ''

    for (let i = startCharCode; i <= 122; i++) {
        const letter = String.fromCharCode(i)
        alphabet += letter
    }
    console.log(alphabet)
}

sayMyName(startLetter = process.argv[2])
