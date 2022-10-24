function loopStats() {
    let statistics = {
        redCars: 21,
        blueCars: 45,
        greenCars: 12,
        raceCars: 5,
        blackCars: 40,
        rareCares: 2
    };

    for (const prop in statistics) {
        let currPropVal = statistics[prop];
        if (prop.charAt(0) == 'r') {
            console.log(prop + ': ' + currPropVal);
        }
        if (currPropVal % 2) {
            console.log(prop + "'s value is odd.");
        }
    }
}

loopStats();