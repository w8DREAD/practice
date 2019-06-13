const   pick = require('./Task_1');


const cat =
    {
        arrName: ["Murka", "Barsik", "Lidka", "Zinka", "Tima", "Simba", "Durka", "Glasha", "Scot", "Scotina"],
        arrAge: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        arrGender: ["Male", "Female"],
        arrLegsCount: [1, 2, 3, 4],
        arrTailLength: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    };



function catFactory() {

    var cats = {
        name: pick(cat.arrName),
        age: pick(cat.arrAge),
        gender: pick(cat.arrGender),
        legsCount: pick(cat.arrLegsCount),
        tailLength: pick(cat.arrTailLength)
    };
    for (let i=0; i < arguments.length; i++) {

        for (var key in arguments[i]) {
            for (var prop in cats) {
                if (key == prop) {
                    cats[key] = arguments[i][key]
                }
            }
        }
    }

    return cats;

}


module.exports =
    {
        cat: cat,
        catFactory: catFactory
    };