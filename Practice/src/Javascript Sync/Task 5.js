var arrName = ["Murka", "Barsik", "Lidka", "Zinka", "Tima", "Simba", "Durka", "Glasha", "Scot", "Scotina"];
var arrAge = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var arrGender = ["Male", "Female"];
var arrLegsCount = [1, 2, 3, 4];
var arrTailLength = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function pick(arg) {
    return arg[Math.round(Math.random()*(arg.length - 1))]
}

function catFactory(arg) {

    var cat = {
        name: pick(arrName),
        age: pick(arrAge),
        gender: pick(arrGender),
        legsCount: pick(arrLegsCount),
        tailLength: pick(arrTailLength)
    };
    for (i=0; i < arguments.length; i++) {

        for (var key in arguments[i]) {
            if (cat.hasOwnProperty(key)) cat[key] = arguments[i][key]
        }
    }

    return cat;

}

function catsGroupGenerate(n) {
    let x = [];
    let i = 0;
    while (i < n) {
        x.push(catFactory());
        i++;
    }
    return x;
};

function catsName(arg) {

    var cats = [];

    arg.forEach(function (cur, ind) {

        cats.push(arg[ind].name)

    });

    return cats;
};

const list = catsGroupGenerate(15);

function nameStats(arg) {

    var stats = {};
    var allNames = catsName(arg);

    allNames.forEach((elem) => {

        if (stats.hasOwnProperty(elem)) {
            stats[elem] += 1
        } else {
            stats[elem] = 1;
        }
    });

    return stats;
}


console.log(nameStats(list));