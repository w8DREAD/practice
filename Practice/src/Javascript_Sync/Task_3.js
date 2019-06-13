const  cat = require('./Task_2');



function catsGroupGenerate(n) {
    let x = [];
    let i = 0;
    while (i < n) {
        x.push(cat.catFactory());
        i++;
    }
    return x;
}

module.exports = catsGroupGenerate;