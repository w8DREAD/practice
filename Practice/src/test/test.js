var assert = require('assert');
var arrName = ["Murka", "Barsik", "Lidka", "Zinka", "Tima", "Simba", "Durka", "Glasha", "Scot", "Scotina"];
var arrAge = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var arrGender = ["Male", "Female"];
var arrLegsCount = [1, 2, 3, 4];
var arrTailLength = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
var list = catsGroupGenerate(15);

var remainsOld, remainsYoung;


describe('Проверка функции pick', () => {

    it('Проверка вернувшего числа', () => {
        assert(1 || 2 == pick([1, 2]))
    });
});

describe('Проверка функции catFactory', () => {

    describe('Проверка значений свойств вернувшего объекта', () => {
        it('Проверка свойства name', () => {
            assert(testCat(arrName, cat.name));
        });
        it('Проверка свойства age', () => {
            assert(testCat(arrAge, cat.age));
        });
        it('Проверка свойства gender', () => {
            assert(testCat(arrGender, cat.gender));
        });
        it('Проверка свойства legsCount', () => {
            assert(testCat(arrLegsCount, cat.legsCount));
        });
        it('Проверка свойства tailLength', () => {
            assert(testCat(arrTailLength, cat.tailLength));
        });
    });
});


describe('Проверка функции catsGroupGenerate', () => {

    it('Проверка типа данных массива на наличие объектов', () => {
        assert(checkGenerate(catsGroupGenerate(115)));
    });
});

describe('Проверка функции catsName', () => {

    it('Проверка типа данных массива на наличие строк', () => {
        assert(checkName(catsName(list)));
    });
});

describe('Проверка функции catsGender', () => {

    it('Проверка данных на значение "Male" в свойстве "Gender"', () => {
        assert(checkGender(catsGender(list)));
    });
});

describe('Проверка функции catsGender', () => {

    it('Проверка данных на значение "Male" в свойстве "Gender"', () => {
        assert(checkGender(catsGender(list)));
    });
});

describe('Проверка функции youngCatsFemale', () => {

    it('Проверка на наличие значения "age" в остаточном массиве меньше чем в возращенном', () => {
        var old = oldCatsMale(list, 8);
        assert(checkOld(remainsOld, old));
    });
});

describe('Проверка функции oldCatsMale', () => {

    it('Проверка на наличие значения "age" в остаточном массиве больше чем в возращенном', () => {
        var young = youngCatsFemale(list, 8);
        assert(checkYoung(remainsYoung, young));
    });
});

describe('Проверка функции nameStats', () => {

    it('Проверка суммы количества созданных имен', () => {
        assert(checkSum(nameStats(list)));
    });
});

describe('Проверка функции catFactory2', () => {

    it('Проверка заданых значений на их наличия в свойствах', () => {
        var x1, x2, x3, x4, x5;
        x1 = catFactory2({name: 'Cats'});
        x2 = catFactory2({name: 'Cats'}, {age: 100});
        x3 = catFactory2({name: 'Cats'}, {age: 100}, {gender: 'SuperMan'});
        x4 = catFactory2({name: 'Cats'}, {age: 100}, {gender: 'SuperMan'}, {legsCount: 90});
        x5 = catFactory2({name: 'Cats'}, {age: 100}, {gender: 'SuperMan'}, {legsCount: 90}, {tailLength: 50});
        assert(x5.gender == 'SuperMan');
    });
});


function checkSum (obj) {
    var res = 0;
    for (key in obj) {
        res += obj[key];
    }
    if (list.length != res) {
        return false
    }
    console.log('Количества имен совпадают');
    return true
}

function checkYoung(arr1, arr) {
    var i = 0;
    while (i < arr1.length) {
        if(arr1[i].gender < arr[i].gender) {
            return false;
        }
        i++
    }
    console.log('В остаточном массиве объекта значения меньше отсутствуют');
    return true;
}


function checkOld(arr1, arr) {
    var i = 0;
    while (i < arr1.length) {
        if(arr1[i].gender > arr[i].gender) {
            return false;
        }
        i++
    }
    console.log('В остаточном массиве объекта значения больше отсутствуют');
    return true;
}


function checkGender(arr) {
    var i = 0;
    while (i < arr.length) {
        if('Male' != arr[i].gender) {
            return false;
        }
        i++
    }
    console.log('В объектах массива все значения "Male"');
    return true;
}


function checkName (arr) {
    var i = 0;
    while (i < arr.length) {
        if(typeof arr[i] != typeof '') {
            return false;
        }
        i++
    }
    console.log('Массив состоит из строк');
    return true;
}

var cat = catFactory();

function checkProp (arr, props) {
    var i = 0;
    var res;
    while (i < arr.length) {
        if (props === arr[i]) {
            res = arr[i];
            break;
        }
        i++
    }
    return res;
};

function testCat (arr, props) {
    if (props == checkProp(arr, props)) {
        console.log(`Значение в свойстве: ${props}`);
        return true;

    } else {

        return false;
    }
};

function catsGroupGenerate(n) {
    let x = [];
    let i = 0;
    while (i < n) {
        x.push(catFactory());
        i++;
    }
    return x;
}


function checkGenerate (arr) {
    var i = 0;
    while (i < arr.length) {
        if(Array.isArray(arr[i]) || typeof arr[i] != typeof {}) {
            return false;
        }
        i++
    }
    console.log('Массив состоит из объектов');
    return true;
}

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
    remainsOld = catsMale.slice(n);
    return cats;
};

function youngCatsFemale (arg, n = 3) {

    var catsFemale = catsGender(arg, "Female");

    catsFemale.sort(function (a, b) {
        return a.age - b.age;
    });

    var cats = catsFemale.slice(0, n);
    remainsYoung = catsFemale.slice(n);
    return cats;
}

function nameStats(arg) {

    var stats = {};
    var allNames = catsName(arg);
    var i = 0;

    while (i < allNames.length) {

        var str = allNames[i];

        stats[str] = true;
        i++

    };

    for (key in stats) {
        var i = 0;
        allNames.forEach( cur => {
            if (key == cur) {
                i++
            }
            stats[key] = i;
        });
    }

    return stats;
}

function catFactory2() {

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