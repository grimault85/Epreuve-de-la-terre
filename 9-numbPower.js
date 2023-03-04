function numbPower(num, power) {
    if (!num || !power || power < 0) {
        console.log('Veuillez entrer un nombre et un exposant valide.')
    } else {
        const result = Math.pow(num, power)
        console.log(`${num} à la puissance ${power} est égal à : ${result}`)
    }
}

numbPower(Number(process.argv[2]), Number(process.argv[3]))