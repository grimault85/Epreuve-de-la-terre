function convertTo12(arg) {
    if (!arg) {
        console.log('Veuillez entrer une heure en format 24h (HH:mm).');
    } else {
        const [hours, minutes] = arg.split(':');
        let hours12h = Number(hours);
        let meridiem = 'AM';

        if (hours12h >= 12) {
            if (hours12h > 12) {
                hours12h -= 12;
            }
            meridiem = 'PM';
        }

        if (hours12h === 0) {
            hours12h = 12;
        }

        console.log(`L'heure ${arg} en format 12h est : ${hours12h}:${minutes} ${meridiem}.`);
    }
}

convertTo12(process.argv[2])

