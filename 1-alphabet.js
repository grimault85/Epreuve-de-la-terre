function alphabet() {
    let alphabet = ''
    let i = 97
    while (i <= 122) {
        alphabet += String.fromCharCode(i)
        i++
    }
    console.log(alphabet)
}

alphabet()