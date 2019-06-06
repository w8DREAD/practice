var arrName = ["Murka", "Barsik", "Lidka", "Zinka", "Tima", "Simba", "Durka", "Glasha", "Scot", "Scotina"];
var arrAge = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var arrGender = ["Male", "Female"];
var arrLegsCount = [1, 2, 3, 4];
var arrTailLength = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function pick(arg) {
    return arg[Math.round(Math.random()*(arg.length - 1))]
}

function catFactory() {
    return {
        name: pick(arrName),
        age: pick(arrAge),
        gender: pick(arrGender),
        legsCount: pick(arrLegsCount),
        tailLength: pick(arrTailLength)
    };
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

const list = catsGroupGenerate(25);

function catsGender(arg, g = "Male") {

    var cats = [];

    arg.forEach(function (cur) {
        if (cur.gender == g) {
            cats.push(cur)
        }
    });
    return cats;
};

function catsName(arg) {

    var cats = [];

    arg.forEach(function (cur, ind) {

        cats.push(arg[ind].name)
        
    });

    return cats;
};

function oldCatsMale (arg, n = 3) {

    var catsMale = catsGender(arg);

    catsMale.sort(function (a, b) {
       return b.age - a.age;
    });

    var cats = catsMale.slice(0, n);
    return cats;
};

var xy;

function youngCatsFemale (arg, n = 3) {

    var catsFemale = catsGender(arg, "Female");

    catsFemale.sort(function (a, b) {
        return a.age - b.age;
    });

   var cats = catsFemale.slice(0, n);
   xy = catsFemale.slice(n);
    return cats;
}


console.log(youngCatsFemale(list, 7));
console.log(oldCatsMale(list, 7));
console.log(catsGender(list));
console.log(catsName(list));