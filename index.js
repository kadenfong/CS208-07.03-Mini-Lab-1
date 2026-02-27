function calcWordFrequencies(words) {
    let list = words.split(" ");
    let counts = new Map();

    for (let item of list) {
        if (counts.has(item)) {
            counts.set(item, counts.get(item) + 1);
        }
        else {
            counts.set(item, 1);
        }
    }

    for (let [name, total] of counts) {
        console.log(name + " " + total);
    }
}


export default calcWordFrequencies;
