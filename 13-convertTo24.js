function convertTo24(time12h) {

    if (!time12h) {
        console.log("Veuillez entrer une heure en format 12h ('hh:mm AM/PM').");
    } else {
        const [time, meridiem] = time12h.split(' ');
        const [hours, minutes] = time.split(':');

        let hours24h = Number(hours);

        if (meridiem === 'PM' && hours24h !== 12) {
            hours24h += 12;
        } else if (meridiem === 'AM' && hours24h === 12) {
            hours24h = 0;
        }

        const time24h = `${hours24h.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
        console.log(`L'heure ${time12h} en format 24h est : ${time24h}.`);
    }

}

convertTo24((process.argv[2]))
