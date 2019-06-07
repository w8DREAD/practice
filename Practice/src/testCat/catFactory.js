var assert = require('assert');

var arrName = ["Murka", "Barsik", "Lidka", "Zinka", "Tima", "Simba", "Durka", "Glasha", "Scot", "Scotina"];
var arrAge = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var arrGender = ["Male", "Female"];
var arrLegsCount = [1, 2, 3, 4];
var arrTailLength = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];


describe('Проверка функции catFactory', () => {

    it('Проверка свойства name', () => {
        assert("loudness" == Object.keys(catFactory())[0]);
    });
});

function pick(arg) {
    return arg[Math.round(Math.random()*(arg.length - 1))]
}

function catFactory() {

    var cat = {
        name: pick(arrName),
        age: pick(arrAge),
        gender: pick(arrGender),
        legsCount: pick(arrLegsCount),
        tailLength: pick(arrTailLength)
    };
    for (i=0; i < arguments.length; i++) {

        for (var key in arguments[i]) {
            for (var prop in cat) {
                if (key == prop) {
                    cat[key] = arguments[i][key]
                }
            }
        }
    }

    return cat;

}
