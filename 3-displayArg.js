function displayArg(args) {
    args.forEach(arg => {
        console.log(arg)
    })
}

displayArg(process.argv.slice(2))
