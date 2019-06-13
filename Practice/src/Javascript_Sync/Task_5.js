const   cat = require('./Task_2'),
        catsGroupGenerate = require('./Task_3'),
        sort = require('./Task_4');

function nameStats(arg) {

    var stats = {};
    var allNames = sort.catsName(arg);

    allNames.forEach((elem) => {

        if (stats.hasOwnProperty(elem)) {
            stats[elem] += 1
        } else {
            stats[elem] = 1;
        }
    });

    return stats;
}

module.exports = nameStats;