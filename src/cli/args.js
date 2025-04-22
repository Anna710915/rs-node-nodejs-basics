const parseArgs = () => {
    const args = process.argv.slice(2);
    for (let i = 0; i < args.length; i += 2) {
        const key = args[i].substring(2);
        const value = args[i + 1];
        console.log(`${key} is ${value}`)
    }
};

parseArgs();