const   cat = require('./Task_2'),
        catsGroupGenerate = require('./Task_3');


function catsGender(arg, g = "Male") {

    return arg.filter( (elem) => {
            return elem.gender == g;
    });

};

function catsName(arg) {

    return arg.map( (elem) => {
        return elem.name
    });

};

function oldCatsMale (arg, n = 3) {

    var catsMale = catsGender(arg);

    catsMale.sort(function (a, b) {
       return b.age - a.age;
    });

    var cats = catsMale.slice(0, n);

    return cats;
};


function youngCatsFemale (arg, n = 3) {

    var catsFemale = catsGender(arg, "Female");

    catsFemale.sort(function (a, b) {
        return a.age - b.age;
    });

   var cats = catsFemale.slice(0, n);

    return cats;
}

module.exports =
    {
        catsName: catsName,
        oldCatsMale: oldCatsMale,
        catsGender: catsGender,
        youngCatsFemale: youngCatsFemale
    };
