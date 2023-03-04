function findSwiss(num1, num2, num3) {
    if (!num1 || !num2 || !num3) {
        console.log('Veuillez entrer trois nombres')
    } else {
        if (num1 === num2 && num2 === num3) {
            console.log("Erreur : les trois nombres sont identiques !");
        } else if (num1 >= num2 && num1 <= num3 || num1 <= num2 && num1 >= num3) {
            console.log(`Le nombre du milieu est : ${num1}`);
        } else if (num2 >= num1 && num2 <= num3 || num2 <= num1 && num2 >= num3) {
            console.log(`Le nombre du milieu est : ${num2}`);
        } else {
            console.log(`Le nombre du milieu est : ${num3}`);
        }
    }
}

findSwiss(Number(process.argv[2]), Number(process.argv[3]), Number(process.argv[4]))

